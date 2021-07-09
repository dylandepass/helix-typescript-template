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

import { decorate as decorateSwiper } from '../../blocks/Swiper';
import { decorate as decorateTwoColumn } from '../../blocks/TwoColumn';
import { decorate as decorateIconTwoColumn } from '../../blocks/IconTwoColumn';
import { decorate as decorateTwoColumnList } from '../../blocks/TwoColumnList';
import { decorate as decorateHero } from '../../blocks/Hero';
import { decorate as decorateThreeCard } from '../../blocks/ThreeCard';
import { applyElementModifier, onElementVisible, wrapSections } from '../../dom';

function decoratePage() {
  const main = document.querySelector('main');
  if (main) {
    //Decorate hero block
    const heroBlock = document.querySelector('main > div:first-of-type');
    if (heroBlock && heroBlock.parentElement) {
      decorateHero(heroBlock);
    }

    //Decorate about
    const aboutBlock = document.querySelector('.about');
    if (aboutBlock) {
      decorateTwoColumn(aboutBlock, {
        childModifiers: [
          { selector: 'hr', modifier: { classes: ['about-hr', 'w-8', 'mt-5', 'border-1'] } },
          {
            selector: 'div:first-of-type h1',
            modifier: { classes: ['text-3xl', 'tracking-wide', 'leading-snug'] }
          }
        ]
      });
    }

    //Decorate skills
    const skillsHeading = document.querySelector('#my-skills');
    if (skillsHeading) {
      applyElementModifier(skillsHeading, {
        classes: ['text-center', 'uppercase', 'secondary-font', 'text-3xl', 'my-10']
      });
    }
    const skillsBlock = document.querySelector('.skills');
    if (skillsBlock) {
      decorateIconTwoColumn(skillsBlock);
    }

    //Decorate cards
    const cardsBlock = document.querySelector('.cards');
    if (cardsBlock) {
      decorateThreeCard(cardsBlock);
      onElementVisible(cardsBlock, '.responsive-col', (index: number, element: Element) => {
        const duration = (index + 1) * 0.2;
        element.addEventListener('animationend', () => {
          element.classList.remove('opacity-0');
        });
        element.setAttribute('style', `animation-delay: ${duration}s;`);
        element.classList.add('animate-fade-in-down');
      });
    }

    //Decorate swiper
    const swiperBlock = document.querySelector('.swiper');
    if (swiperBlock && swiperBlock.parentElement) {
      decorateSwiper(swiperBlock, swiperBlock.parentElement);
    }

    //Decorate resume
    const resumeHeading = document.querySelector('#my-resume');
    if (resumeHeading) {
      applyElementModifier(resumeHeading, {
        classes: ['text-center', 'uppercase', 'secondary-font', 'text-3xl', 'mb-8']
      });
    }
    const resumeBlock = document.querySelector('.resume');
    if (resumeBlock) {
      decorateTwoColumnList(resumeBlock);
    }
  }

  wrapSections(`main > div:not(.swiper):not(header):not(.hero)`);

  document.body.classList.add('appear');
}

if (document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    decoratePage();
  });
} else {
  decoratePage();
}
