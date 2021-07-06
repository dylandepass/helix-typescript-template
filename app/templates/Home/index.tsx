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

import { decorate as decorateColumns } from '../../blocks/Columns';
import { decorate as decorateSwiper } from '../../blocks/Swiper';
import { applyElementModifier, wrapSections } from '../../dom';

function decoratePage() {
  const main = document.querySelector('main');
  if (main) {
    //Decorate hero block
    const heroBlock = document.querySelector('main > div:first-of-type');
    if (heroBlock && heroBlock.parentElement) {
      applyElementModifier(heroBlock, {
        classes: [
          'hero',
          'flex',
          'flex-col',
          'bg-black',
          'bg-opacity-30',
          'shadow-inner',
          'min-h-screen',
          'text-center',
          'justify-center',
          'items-center',
          'hero-text-color'
        ],
        childModifiers: [
          {
            selector: 'h1',
            modifier: { classes: ['text-8xl', 'uppercase', 'leading-tight', 'font-extrabold', 'md:text-12xl'] }
          },
          {
            selector: 'h3',
            modifier: { classes: ['text-4xl', 'font-semibold', 'uppercase', 'md:text-6xl'] }
          }
        ]
      });
    }

    //Decorate about
    const aboutBlock = document.querySelector('.about');
    if (aboutBlock) {
      decorateColumns(aboutBlock, { classes: ['responsive-row', 'gap-20'] }, [
        {
          classes: ['responsive-col', 'w-1/2'],
          childModifiers: [
            { selector: 'hr', modifier: { classes: ['about-hr', 'w-8', 'mt-5', 'border-1'] } },
            {
              selector: 'div:first-of-type h1',
              modifier: { classes: ['text-3xl', 'tracking-wide', 'leading-snug'] }
            }
          ]
        },
        { classes: ['responsive-col', 'w-1/2', 'flex-auto', 'text-lg'] }
      ]);
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
      decorateColumns(
        skillsBlock,
        {
          classes: ['responsive-row'],
          childModifiers: [
            {
              selector: 'p:first-of-type',
              modifier: { classes: ['secondary-font', 'uppercase', 'leading-6', 'pb-4', 'text-center', 'lg:text-left'] }
            },
            {
              selector: 'p:nth-of-type(2)',
              modifier: { classes: ['font-light', 'pb-8', 'text-center', 'lg:text-left'] }
            },
            {
              selector: 'img',
              modifier: { classes: ['mx-auto', 'w-14', 'h-14', 'm-10', 'lg:w-7', 'lg:h-7', 'lg:m-0'] }
            }
          ]
        },
        [
          {
            classes: ['md:w-12']
          },
          {
            classes: ['md:w-1/2', 'sm:text-center']
          },
          { classes: ['md:w-12'] },
          { classes: ['md:w-1/2', 'sm:text-center'] }
        ]
      );
    }

    //Decorate cards
    const cardsBlock = document.querySelector('.cards');
    if (cardsBlock) {
      decorateColumns(
        cardsBlock,
        {
          classes: ['responsive-row', 'gap-10', 'is-6', 'text-center'],
          childModifiers: [
            {
              selector: 'img',
              modifier: { classes: ['mb-12', 'mx-auto', 'w-10/12'] }
            },
            {
              selector: 'div h3',
              modifier: { classes: ['secondary-font', 'font-light', 'text-base', 'uppercase', 'mb-8'] }
            }
          ]
        },
        [
          {
            classes: ['responsive-col', 'p-6', 'card-1-background-color', 'card-1-text-color']
          },
          { classes: ['responsive-col', 'p-6', 'card-2-background-color', 'card-2-text-color'] },
          { classes: ['responsive-col', 'p-6', 'card-1-background-color', 'card-1-text-color'] }
        ]
      );
    }

    //Decorate swiper
    const swiperBlock = document.querySelector('.swiper');
    if (swiperBlock && swiperBlock.parentElement) {
      decorateSwiper(swiperBlock, swiperBlock.parentElement, {
        childModifiers: [
          { selector: 'picture', modifier: { classes: ['mb-6'] } },
          { selector: 'img', modifier: { classes: ['rounded-full', 'w-24', 'h-24', 'my-8', 'mx-auto'] } },
          {
            selector: 'h3',
            modifier: {
              classes: ['mb-24', 'secondary-font', 'secondary-font-color', 'uppercase', 'pt-10', 'font-bold', 'italic']
            }
          },
          { selector: 'swiper-pagination', modifier: { classes: ['mb-10'] } },
          { selector: 'p', modifier: { classes: ['w-9/12', 'mx-auto', 'font-light', 'secondary-font-color'] } }
        ]
      });
    }

    const resumeHeading = document.querySelector('#my-resume');
    if (resumeHeading) {
      applyElementModifier(resumeHeading, {
        classes: ['text-center', 'uppercase', 'secondary-font', 'text-3xl', 'mb-8']
      });
    }
    //Decorate about
    const resumeBlock = document.querySelector('.resume');
    if (resumeBlock) {
      decorateColumns(
        resumeBlock,
        {
          classes: [
            'responsive-row',
            'py-8',
            'sm:py-4',
            'border-b',
            'resume-separator-color',
            'w-3/4',
            'mx-auto',
            'mb-16'
          ]
        },
        [
          {
            classes: ['responsive-col', 'w-1/2', 'pb-10', 'sm:pb-2'],
            childModifiers: [
              { selector: 'h2', modifier: { classes: ['secondary-font'] } },
              { selector: 'h3', modifier: { classes: ['font-extralight'] } }
            ]
          },
          { classes: ['responsive-col', 'w-1/2', 'flex-auto', 'text-lg', 'font-light'] }
        ]
      );
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
