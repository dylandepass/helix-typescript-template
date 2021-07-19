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

import { decorateElement, decorateSections } from '../../dom';

function decoratePage() {
  decorateElement('main p:first-of-type', {
    classes: ['mt-12', 'py-6', 'px-3', 'bg-blue-100']
  });

  decorateElement('main img:first-of-type', {
    classes: ['w-full', 'max-h-96', 'object-cover'],
    attributes: { width: '999', height: '384' }
  });

  decorateElement('main h1', {
    classes: ['text-center', 'mt-16', 'mb-4', 'uppercase', 'text-3xl', 'md:max-w-lg', 'md:mx-auto']
  });

  decorateElement('main h3', {
    classes: ['text-center', 'uppercase', 'mb-16']
  });

  decorateElement('main > div', {
    childModifiers: [
      {
        selector: 'p:not(:first-child)',
        modifier: { classes: ['pb-4', 'md:w-8/12', 'font-light', 'mx-auto'] }
      }
    ],
    inserts: [{ tag: 'hr', position: 'beforeend', classes: ['my-10', 'separator-color'] }]
  });

  decorateSections(`main > div`);
  document.body.classList.add('appear');
}

decoratePage();
