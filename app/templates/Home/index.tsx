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
import { decorate as decorateHero } from '../../blocks/Hero';
import { decorate as decorateSwiper } from '../../blocks/Swiper';
import { wrapSections } from '../../dom';
import './styles.scss';

function decoratePage() {
  const main = document.querySelector('main');
  if (main) {
    //Decorate hero block
    const heroBlock = document.querySelector('main > div:first-of-type');
    if (heroBlock && heroBlock.parentElement) {
      decorateHero(heroBlock, heroBlock.parentElement);
    }

    //Decorate columns
    const columnBlock = document.querySelector('.columns:first-of-type');
    if (columnBlock) {
      decorateColumns(columnBlock, { classes: ['is-variable'] }, [
        { classes: ['is-two-fifths'] },
        { classes: ['is-three-fifths'] }
      ]);
    }

    //Decorate skills
    const skillsBlock = document.querySelector('.skills');
    if (skillsBlock) {
      decorateColumns(skillsBlock, {}, [
        {
          classes: ['is-narrow', 'icon', 'has-text-centered-mobile']
        },
        { classes: ['has-text-centered-mobile'] },
        { classes: ['is-narrow', 'icon', 'has-text-centered-mobile'] },
        { classes: ['has-text-centered-mobile'] }
      ]);
    }

    //Decorate swiper
    const swiperBlock = document.querySelector('.swiper');
    if (swiperBlock && swiperBlock.parentElement) {
      decorateSwiper(swiperBlock, swiperBlock.parentElement, (slide: Element): void => {
        const pictureTag = slide.querySelector('picture');
        if (pictureTag) {
          pictureTag.classList.add('image');
          pictureTag.classList.add('is-128x128');
          pictureTag.classList.add('m-auto');
          pictureTag.classList.add('pb-6');
          const imgTag = pictureTag.querySelector('img');
          imgTag?.classList.add('is-circle');
          imgTag?.classList.add('is-rounded');
        }
      });
    }
  }

  wrapSections(`main > div:not(.swiper header)`);

  document.body.classList.add('appear');
}

if (document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    decoratePage();
  });
} else {
  decoratePage();
}
