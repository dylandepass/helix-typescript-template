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
export interface ElementModifier {
  classes?: string[];
  attributes?: Record<string, string>;
}

export function createElement(name: string, attrs?: Record<string, string>): HTMLElement {
  console.log('create');
  const el = document.createElement(name);
  if (typeof attrs === 'object') {
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

export function applyElementModifier(element: Element, modifier: ElementModifier): Element {
  if (modifier.classes) {
    addElementClasses(element, modifier.classes);
  }
  if (modifier.attributes) {
    addElementAttributes(element, modifier.attributes);
  }

  return element;
}

export function addElementClasses(element: Element, classes: string[]): void {
  for (const className of classes) {
    element.classList.add(className);
  }
}

export function addElementAttributes(element: Element, attributes: Record<string, string>): void {
  for (const key of Object.keys(attributes)) {
    element.setAttribute(key, attributes[key]);
  }
}

export function wrapNodes(newParent: HTMLElement, nodes: NodeListOf<Element>): void {
  nodes.forEach((el) => {
    newParent.appendChild(el.cloneNode(true));
    if (newParent.children.length !== 1) {
      el.parentNode?.removeChild(el);
    } else {
      el.parentNode?.replaceChild(newParent, el);
    }
  });
}

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

export function wrap(classname: string, selectors: string | string[], root: HTMLElement): void {
  if (!Array.isArray(selectors)) {
    selectors = [selectors];
  }
  const div = createElement('div', { class: classname });

  for (const selector of selectors) {
    const elements = (root || document).querySelectorAll(selector);
    wrapNodes(div, elements);
  }
}

export function getElementContent(element: Element, selector: string): string | undefined {
  return element.querySelector(selector)?.innerHTML;
}

export function getElementAttribute(element: Element, selector: string, attribute: string): string | undefined {
  return element.querySelector(selector)?.attributes.getNamedItem(attribute)?.value;
}

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

export function loadCSS(href: string): Promise<void> {
  return new Promise(function (resolve, reject) {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', href);
      link.onload = () => {
        resolve();
      };
      link.onerror = () => {
        reject();
      };
      document.head.appendChild(link);
    }
  });
}

export function wrapSections(selector: string): void {
  document.querySelectorAll(selector).forEach(($div) => {
    if (!$div.id) {
      $div.classList.add('container');
      $div.classList.add('section');
      $div.classList.add('is-max-widescreen');
    }
  });
}
