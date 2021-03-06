/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { FORM_SINK_AUTH, FORM_SINK_URL } from './constants';

export interface ElementModifier {
  classes?: string[];
  attributes?: Record<string, string>;
  wraps?: WrapModifier[];
  inserts?: InsertModifier[];
  childModifiers?: ChildElementModifier[];
}
export interface ChildElementModifier {
  selector: string;
  modifier?: ElementModifier;
  callback?: (element: Element) => void;
  validation?: (element: Element) => boolean;
}
export interface WrapModifier {
  tag: string;
  classes?: string[];
  attributes?: Record<string, string>;
}
export interface InsertModifier {
  tag: string;
  position: InsertPosition | number;
  innerHTML?: string;
  classes?: string[];
  attributes?: Record<string, string>;
}
export interface FormSinkBody {
  sheet: string;
  data: { name: string; value: string }[];
}

/**
 * Loads the js & css files for a template
 */
export function loadTemplate(): void {
  const templateElement = document.querySelector('.template');
  if (templateElement) {
    const template = templateElement?.textContent?.toLowerCase();
    loadScript(`/build/${template}-bundle.js`);
    loadCSS(`/build/${template}.css`);
    templateElement.remove();
  }
}

/**
 * Loads a script into the head tag
 *
 * @param {string} url     Script URL
 * @param {string} type    Script type
 *
 * @returns                Promise
 */
export function loadScript(url: string, type = 'text/javascript'): Promise<void> {
  return new Promise(function (resolve, reject) {
    const head = document.querySelector('head');
    if (head) {
      const script = createElement('script', { src: url }) as HTMLScriptElement;
      script.async = true;
      if (type) {
        script.type = type;
      }
      head.append(script);
      script.onload = function () {
        resolve();
      };
      script.onerror = function () {
        reject();
      };
    }
  });
}

/**
 * Loads a ccs file into the head tag
 *
 * @param {string} href   Script Href
 * @returns               Promise
 */
export function loadCSS(href: string): Promise<void> {
  return new Promise(function (resolve, reject) {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const preloadCSSLink = document.createElement('link');
      preloadCSSLink.setAttribute('rel', 'preload');
      preloadCSSLink.setAttribute('as', 'style');
      preloadCSSLink.setAttribute('href', href);
      document.head.appendChild(preloadCSSLink);

      const cssLink = document.createElement('link');
      cssLink.setAttribute('rel', 'stylesheet');
      cssLink.setAttribute('href', href);
      cssLink.onload = () => {
        resolve();
      };
      cssLink.onerror = () => {
        reject();
      };
      document.head.appendChild(cssLink);
    }
  });
}

/**
 * Loads an HTML fragments matching the given selector
 *
 * @param {string} selector   Selector to match
 * @returns                   Promise
 */
export async function loadFragmentBySelector(selector: string): Promise<Element | void> {
  const fragmentElements = document.querySelectorAll(selector);
  for (const fragmentElement of Array.from(fragmentElements)) {
    return loadFragmentByElement(fragmentElement);
  }
}

/**
 * Loads an HTML fragment matching the given element
 *
 * @param {Element} element   Element to match
 * @returns                   Promise
 */
export async function loadFragmentByElement(element: Element): Promise<Element | void> {
  const path = element.querySelector('p:first-of-type')?.textContent || element.textContent;
  if (path) {
    const fragment = await fetchFragmentAtPath(path);
    element.insertAdjacentHTML('beforebegin', fragment);
    element.remove();
    return element;
  }
}

/**
 * Retrieves an HTML fragment at the given path
 *
 * @param {string} path   Fragment path
 * @returns               Promise
 */
export function fetchFragmentAtPath(path: string): Promise<string> {
  return new Promise(function (resolve, reject) {
    fetch(path)
      .then((response) => {
        resolve(response.text());
      })
      .catch((error: string) => {
        reject(error);
      });
  });
}

/**
 * Creates an element
 * @param {string} name                     Tag name
 * @param {Record<string, string>} attrs    Attributes
 * @returns {HTMLElement}                   The created element
 */
export function createElement(name: string, attrs?: Record<string, string>): HTMLElement {
  const el = document.createElement(name);
  if (typeof attrs === 'object') {
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

/**
 * If a selector is provided the dom is queried for the element, else the element provided is returned
 * @param {Element | string} elementOrSelector        An element or a selector string
 * @returns {Element | undefined}                     The element or undefined
 */
export function resolveElement(elementOrSelector: Element | string): Element | undefined {
  let el = elementOrSelector;
  if (typeof elementOrSelector === 'string') {
    const result = document.querySelector(elementOrSelector);

    if (!result) return;
    el = result;
  }

  return el as Element;
}

/**
 * Decorate the element according to the provided modifier
 * @param {Element | string} elementOrSelector  An element or a selector string
 * @param {ElementModifier} modifier            The modifier used to decorate the element
 * @returns {Element | undefined}               The decorated element or undefined
 */
export function decorateElement(elementOrSelector: Element | string, modifier: ElementModifier): Element | undefined {
  const { classes, attributes, wraps, inserts, childModifiers } = modifier;
  const el = resolveElement(elementOrSelector);
  if (el) {
    if (classes) {
      addElementClasses(el, classes);
    }
    if (attributes) {
      addElementAttributes(el, attributes);
    }
    if (wraps) {
      for (const wrapModifier of wraps) {
        wrapElement(el, wrapModifier);
      }
    }
    if (inserts) {
      for (const insertModifier of inserts) {
        insertElement(el, insertModifier);
      }
    }
    if (childModifiers) {
      for (const childModifier of childModifiers) {
        decorateChildElement(el, childModifier);
      }
    }

    return el as Element;
  }
}

/**
 * Decorates the children of the provided element
 * @param {Element} element                       The element
 * @param {ChildElementModifier} childModifier    The modifier that defines which elements to modify and how
 * @returns {Element | undefined}                 The decorated child element or undefined
 */
export function decorateChildElement(element: Element, childModifier: ChildElementModifier): Element | null {
  const { selector, modifier, callback, validation } = childModifier;
  const childElements = element.querySelectorAll(selector);
  for (const childElement of Array.from(childElements)) {
    if (childElement) {
      if (modifier) decorateElement(childElement, modifier);
      if (callback) callback(childElement);

      if (validation) {
        if (!validation(childElement)) {
          childElement.remove();
        }
      }
    }
  }

  return element;
}

/**
 * Wraps an element in the provided tag
 * @param {Element} element               The element to wrap
 * @param {WrapModifier} wrapModifier     The wrap modifier
 */
export function wrapElement(element: Element, wrapModifier: WrapModifier): void {
  const { tag, classes, attributes } = wrapModifier;
  const wrapper = createElement(tag);

  if (classes) {
    addElementClasses(wrapper, classes);
  }
  if (attributes) {
    addElementAttributes(wrapper, attributes);
  }

  element.parentNode?.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

/**
 * Creates a new element and inserts it as a child and the position provided in the insertModifier
 * @param {Element} element                   The element to have the new element inserted in
 * @param {InsertModifier} insertModifier     The insert modifier
 */
export function insertElement(element: Element, insertModifier: InsertModifier): void {
  const { tag, position, innerHTML, classes, attributes } = insertModifier;
  const newElement = createElement(tag);

  if (classes) {
    addElementClasses(newElement, classes);
  }
  if (attributes) {
    addElementAttributes(newElement, attributes);
  }
  if (innerHTML) {
    newElement.innerHTML = innerHTML;
  }

  if (typeof position === 'number' && element.parentElement) {
    //insert at index
    element.insertBefore(newElement, element.children[position]);
  } else {
    element.insertAdjacentElement(position as InsertPosition, newElement);
  }
}

/**
 * Adds classes to an element
 * @param {Element} element     The element to add the classes to
 * @param {string[]} classes    The classes to add to the element
 */
export function addElementClasses(element: Element, classes: string[]): void {
  for (const className of classes) {
    element.classList.add(className);
  }
}

/**
 * Adds attributes to an element
 * @param {Element} element                   The element to add the attributes to
 * @param {Record<string, string>} classes    The attributes to add to the element
 */
export function addElementAttributes(element: Element, attributes: Record<string, string>): void {
  for (const key of Object.keys(attributes)) {
    element.setAttribute(key, attributes[key]);
  }
}

/**
 * Wraps an array of elements in a new parent
 * @param {HTMLElement} newParent   The target parent of the elements
 * @param {Element[]} elements      The elements to wrap
 */
export function wrapElements(newParent: HTMLElement, elements: Element[]): void {
  elements.forEach((el) => {
    newParent.appendChild(el.cloneNode(true));
    if (newParent.children.length !== 1) {
      el.parentNode?.removeChild(el);
    } else {
      el.parentNode?.replaceChild(newParent, el);
    }
  });
}

/**
 * Decorates the element at the selector as a section
 * @param {string} selector       The selector
 */
export function decorateSections(selector: string): void {
  document.querySelectorAll(selector).forEach((element) => {
    if (!element.id) {
      addElementClasses(element, ['container', 'md:mx-auto', 'section', 'p-10']);
    }
  });
}

/**
 * Fires the action callback when the provided element becomes visible onscreen
 *
 * @param {Element} parent                                        The parent element of the child to watch for visibility
 * @param {string} selector                                       A css selector used to get the elements from the parent
 * @param {(index: number, element: Element) => void} action      A callback function to call when the element becomes visible
 */
export function onElementVisible(
  parent: Element,
  selector: string,
  action: (index: number, element: Element) => void
): void {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const elements = Array.from(parent.querySelectorAll(selector));
        for (const [index, element] of elements.entries()) {
          if (action) {
            action(index, element);
          }
        }
        observer.disconnect();
      }
    },
    { threshold: [0] }
  );

  const el = parent.querySelector(selector);
  if (el) {
    observer.observe(el);
  }
}

/**
 * Add a submit event listener to the provided form. Posts the form data with the provided body
 *
 * @param {HTMLFormElement} form        The form to add the submit event listener to
 * @param {FormSinkBody} body           The form body to post
 *
 * @returns
 */
export function decorateFormSubmit(form: Element, body: FormSinkBody): void {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch(FORM_SINK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: FORM_SINK_AUTH
      },
      body: JSON.stringify(body)
    }).catch((error: string) => {
      console.error(error);
    });
  });
}
