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

import { decorate as decorateButton } from './blocks/Button';
import { decorate as decorateColumn } from './blocks/Columns';
import { createElement } from './dom';
import './styles/styles.scss';

function wrapSections(selector: string) {
  document.querySelectorAll(selector).forEach(($div) => {
    if (!$div.id) {
      const $wrapper = createElement('div', { class: 'section' });
      $div.parentNode?.appendChild($wrapper);
      $wrapper.appendChild($div);
    }
  });
}

window.addEventListener('load', () => {
  document.querySelector('main')?.classList.add('container');
  const columnBlock = document.querySelector('.columns');

  if (columnBlock) {
    const columns = decorateColumn(
      columnBlock,
      { classes: ['is-variable', 'is-8'] },
      [{ classes: ['is-two-fifths'] }, { classes: ['is-three-fifths'] }]
    );

    const accountColumn = columns[1];
    const buttonElement = accountColumn.querySelector('p a');
    if (buttonElement) {
      decorateButton(buttonElement, accountColumn, {
        classes: ['customButton']
      });
    }
  }

  wrapSections('main > div');

  document.body.classList.add('appear');
});
