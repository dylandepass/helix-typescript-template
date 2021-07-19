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
import './style.css';
import Flickity from 'flickity';

function createSwiper(renderer: CommonDOMRenderer, slides: Element[]): Node {
  return (
    <section class="swiper-container container mx-auto relative z-10 overflow-hidden list-none">
      <div class="swiper-wrapper">
        {slides.map((slide: Element) => {
          return <div class="swiper-slide flex justify-center items-center text-center text-lg">{slide}</div>;
        })}
      </div>
      <div class="swiper-pagination"></div>
    </section>
  );
}

export function decorate(elementOrSelector: Element | string, parent: Element): void {
  const element = resolveElement(elementOrSelector);
  const renderer = new CommonDOMRenderer();
  if (element) {
    if (parent.previousElementSibling) {
      parent.classList.add('swiper');
      const heroTemplate = createSwiper(renderer, Object.values(element.children));

      decorateElement(heroTemplate as Element, {
        childModifiers: [
          { selector: 'picture', modifier: { classes: ['mb-6'] } },
          {
            selector: 'img',
            modifier: {
              classes: ['rounded-full', 'w-24', 'h-24', 'my-8', 'mx-auto'],
              attributes: { width: '96', height: '96' }
            }
          },
          {
            selector: 'h1',
            modifier: {
              classes: ['mb-24', 'secondary-font', 'secondary-font-color', 'uppercase', 'pt-10', 'font-bold', 'italic']
            }
          },
          { selector: 'h3', modifier: { classes: ['mb-10'] } },
          { selector: 'p', modifier: { classes: ['w-9/12', 'mx-auto', 'font-light', 'secondary-font-color'] } }
        ]
      });

      renderer.render(heroTemplate).after(parent.previousElementSibling);

      new Flickity('.swiper-wrapper', {
        wrapAround: true
      });
      element.remove();
    }
  }
}
