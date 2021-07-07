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
//import Swiper, { Navigation, Pagination } from 'swiper';
import { applyElementModifier, ElementModifier } from '../../dom';
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

export function decorate(block: Element, parent: Element, modifier?: ElementModifier): void {
  const renderer = new CommonDOMRenderer();
  if (parent.previousElementSibling) {
    parent.classList.add('swiper');
    const heroTemplate = createSwiper(renderer, Object.values(block.children));
    if (modifier) {
      applyElementModifier(heroTemplate as Element, modifier);
    }
    renderer.render(heroTemplate).after(parent.previousElementSibling);

    new Flickity('.swiper-wrapper', {
      wrapAround: true
    });
    block.remove();
  }
}
