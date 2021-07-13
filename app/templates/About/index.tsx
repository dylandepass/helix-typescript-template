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

import { decorateElement, onElementVisible, decorateSections } from '../../dom';
import { decorate as decorateIconTwoColumn } from '../../blocks/IconTwoColumn';
import { decorate as decorateTwoColumn } from '../../blocks/TwoColumn';
import { decorate as decorateFourColumn } from '../../blocks/FourColumn';

function decoratePage() {
  //Decorate about
  decorateTwoColumn('.about', {
    classes: ['responsive-row', 'md:mt-24', 'md:gap-24'],
    childModifiers: [
      { selector: 'hr', modifier: { classes: ['about-hr', 'w-8', 'border-1', 'my-5'] } },
      {
        selector: 'div:first-of-type h1',
        modifier: {
          classes: ['text-2xl', 'tracking-wide', 'leading-snug', 'mb-10']
        }
      },
      {
        selector: 'p',
        modifier: { classes: ['font-light', 'mb-5'] }
      }
    ]
  });

  const statsBlock = document.querySelector('.stats');
  if (statsBlock) {
    decorateFourColumn(statsBlock, {
      classes: ['text-center', 'gap-6', 'four-card-text-color'],
      childModifiers: [
        {
          selector: 'div > div',
          modifier: { classes: ['four-card-background-color', 'p-10', 'opacity-0'] }
        },
        {
          selector: 'img',
          modifier: { classes: ['w-auto', 'h-24', 'mx-auto', 'mb-10'] }
        },
        {
          selector: 'h3',
          modifier: { classes: ['text-lg', 'secondary-font', 'text-lg', 'mb-4'] }
        },
        {
          selector: 'p',
          modifier: { classes: ['text-5xl', 'font-bold'] }
        }
      ]
    });
    onElementVisible(statsBlock, '.responsive-col', (index: number, element: Element) => {
      const duration = (index + 1) * 0.2;
      element.addEventListener('animationend', () => {
        element.classList.remove('opacity-0');
      });
      element.setAttribute('style', `animation-delay: ${duration}s;`);
      element.classList.add('animate-fade-in-down');
    });
  }

  decorateElement('#my-skills', {
    classes: ['text-center', 'uppercase', 'secondary-font', 'text-3xl', 'my-10']
  });

  decorateIconTwoColumn('.skills');
  decorateElement('.skills', {
    classes: ['mb-20']
  });

  decorateSections(`main > div`);
  document.body.classList.add('appear');
}

decoratePage();
