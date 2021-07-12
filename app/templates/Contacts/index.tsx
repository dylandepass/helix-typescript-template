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

import { decorateSections } from '../../dom';
import { decorate as decorateTwoColumn } from '../../blocks/TwoColumn';
import { decorate as decorateMap } from '../../blocks/Map';

function decoratePage() {
  //Decorate contacts
  decorateTwoColumn('.contacts', {
    classes: ['responsive-row', 'md:mt-24', 'gap-10', 'md:gap-24', 'mb-24'],
    childModifiers: [
      {
        selector: 'h3',
        modifier: { classes: ['text-sm', 'mb-6'] }
      },
      {
        selector: 'div:first-of-type > h2',
        modifier: { classes: ['text-2xl', 'mb-0'] }
      },
      {
        selector: 'p',
        modifier: { classes: ['mt-6', 'font-light'] }
      },
      {
        selector: 'div:nth-of-type(2) > h2',
        modifier: { classes: ['text-lg', 'mb-0', 'secondary-font'] }
      }
    ]
  });

  const mapBlock = document.querySelector('.maps');
  if (mapBlock) {
    decorateMap(mapBlock);
    mapBlock;
  }

  decorateSections(`main .contacts`);
  document.body.classList.add('appear');
}

decoratePage();
