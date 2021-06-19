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

import { createTag } from './dom';
import { Observable } from './observable';

const first = new Observable<number>(0);

function wrapSections(selector: string) {
  document.querySelectorAll(selector).forEach(($div) => {
    if (!$div.id) {
      const $wrapper = createTag('div', { class: 'section-wrapper' });
      $div.parentNode?.appendChild($wrapper);
      $wrapper.appendChild($div);
    }
  });
}

window.addEventListener('load', () => {
  wrapSections('main > div');
  const header = document.querySelector('header div h1');

  first.subscribe((newVal: number) => {
    if (header) header.innerHTML = newVal.toString();
  });
});

document.addEventListener('scroll', function (e) {
  console.log('scroll');
  first.value = e.timeStamp;
});
