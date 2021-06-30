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
import Swiper, { Navigation, Pagination } from 'swiper';
import './style.scss';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

function createSwiper(renderer: CommonDOMRenderer, slides: Element[], slideDecorator?: (slide: Element) => void): Node {
  return (
    <section class="swiper-container">
      <div class="swiper-wrapper">
        {slides.map((slide: Element) => {
          if (slideDecorator) {
            slideDecorator(slide);
          }
          return <div class="swiper-slide">{slide}</div>;
        })}
      </div>
      <div class="swiper-pagination"></div>
    </section>
  );
}

export function decorate(block: Element, parent: Element, slideDecorator?: (slide: Element) => void): void {
  const renderer = new CommonDOMRenderer();
  if (parent.previousElementSibling) {
    parent.classList.add('swiper');
    const heroTemplate = createSwiper(renderer, Object.values(block.children), slideDecorator);
    renderer.render(heroTemplate).after(parent.previousElementSibling);
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
    block.remove();
  }
}
