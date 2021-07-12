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

import { CommonDOMRenderer } from 'render-jsx/dom';
import { decorateElement, resolveElement } from '../../dom';

function createNav(renderer: CommonDOMRenderer, title?: string, leftMenu?: Element[], rightMenu?: Element[]): Element {
  return (
    <header class="flex">
      <nav class="w-full md:mx-auto fixed py-7 header-text-color header-background-color z-40">
        <div class="lg:container md:mx-auto pl-11">
          <div class="text-center flex column justify-left lg:justify-center gap-16 items-center lg:ml-0">
            <div class="hidden lg:block">
              {leftMenu?.map((link) => {
                return decorateElement(link, { classes: ['text-sm', 'uppercase', 'p-5'] });
              })}
            </div>
            <h1 class="text-2xl mx-38">{title}</h1>
            <div class="hidden lg:block">
              {rightMenu?.map((link) => {
                return decorateElement(link, { classes: ['text-sm', 'uppercase', 'p-5'] });
              })}
            </div>
          </div>
        </div>
      </nav>
      <button class="inline-block z-50 ml-auto mr-5 lg:hidden lg:hidden py-7">
        <img src="/icons/hamburger.svg" />
      </button>
    </header>
  );
}

export function decorate(elementOrSelector: Element | string): void {
  const element = resolveElement(elementOrSelector);
  if (element) {
    const leftMenu = element.querySelector('div:first-of-type p');
    const rightMenu = element.querySelector('div:nth-of-type(3) p');
    const title = element.querySelector('div:nth-of-type(2) p')?.textContent;
    const renderer = new CommonDOMRenderer();
    if (title && leftMenu && rightMenu) {
      const navTemplate = createNav(renderer, title, Array.from(leftMenu.children), Array.from(rightMenu.children));
      renderer.render(navTemplate).before(element);
      element.remove();
    }
  }
}
