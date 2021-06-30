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
import { decorate as decorateColumns } from './blocks/Columns';
import { decorate as decorateHero } from './blocks/Hero';
import { createElement } from './dom';
import './styles/styles.scss';

function wrapSections(selector: string) {
  document.querySelectorAll(selector).forEach(($div) => {
    if (!$div.id) {
      const $wrapper = createElement('div', {
        class: 'container section'
      });
      $div.parentNode?.appendChild($wrapper);
      $wrapper.appendChild($div);
    }
  });
}

window.addEventListener('load', () => {
  const main = document.querySelector('main');
  if (main) {
    const heroBlock = document.querySelector('main > div:first-of-type');
    if (heroBlock) {
      decorateHero(heroBlock, main);
    }

    const columnBlock = document.querySelector('.columns:first-of-type');
    if (columnBlock) {
      decorateColumns(columnBlock, { classes: ['is-variable'] }, [
        { classes: ['is-two-fifths'] },
        { classes: ['is-three-fifths'] }
      ]);
    }

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
  }

  wrapSections('main > div');
  const val = 'VLUE';
  const cats = ['f', 's', 'g'];
  const renderer = new CommonDOMRenderer();
  renderer
    .render(
      <div>
        <b>{val}</b> World!
        <ul>
          {cats.map((cat) => {
            return <li>cat</li>
          })}
        </ul>
      </div>
    )
    .on(document.body);

  document.body.classList.add('appear');
});
