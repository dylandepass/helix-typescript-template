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

import { applyElementModifier, wrapSections } from '../../dom';
import { decorate as decoratePostsList } from '../../blocks/PostsList';

function decoratePage() {
  const picture = document.querySelector('main p:first-of-type');
  if (picture) {
    applyElementModifier(picture, {
      classes: ['mt-24', 'py-6', 'px-3', 'bg-blue-100']
    });
  }

  const img = document.querySelector('main img:first-of-type');
  if (img) {
    applyElementModifier(img, {
      classes: ['w-full', 'max-h-96', 'object-cover']
    });
  }

  const heading = document.querySelector('main h1');
  if (heading) {
    applyElementModifier(heading, {
      classes: ['text-center', 'mt-16', 'mb-4', 'uppercase', 'text-3xl', 'md:max-w-lg', 'md:mx-auto']
    });
  }

  const subHeading = document.querySelector('main h3');
  if (subHeading) {
    applyElementModifier(subHeading, {
      classes: ['text-center', 'uppercase', 'mb-16']
    });
  }

  const main = document.querySelector('main');
  if (main) {
    applyElementModifier(main, {
      childModifiers: [
        {
          selector: 'p:not(:first-child)',
          modifier: { classes: ['pb-4', 'md:w-8/12', 'font-light', 'mx-auto'] }
        }
      ]
    });
  }

  wrapSections(`main > div`);
  document.body.classList.add('appear');
}

if (document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    decoratePage();
  });
} else {
  decoratePage();
}
