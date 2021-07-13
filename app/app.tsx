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

import { decorateElement, loadTemplate, loadFragment, loadFragmentBySelector } from './dom';
import { decorate as decorateNav } from './blocks/Nav';
import './styles/styles.css';

async function decorateTemplate() {
  const main = document.querySelector('main');
  if (main) {
    loadTemplate();

    const headerFragment = await loadFragment('/header.plain.html');
    const header = document.querySelector('header');
    if (header) {
      header.insertAdjacentHTML('afterbegin', headerFragment);
    }

    //Decorate nav
    decorateNav('header');

    const footerFragment = await loadFragment('/footer.plain.html');
    const footer = document.querySelector('footer');
    if (footer) {
      footer.insertAdjacentHTML('afterbegin', footerFragment);
    }

    //Decorate footer
    decorateElement('footer', {
      classes: ['text-center', 'pt-32', 'footer-text-color'],
      childModifiers: [
        {
          selector: 'h2',
          modifier: { classes: ['text-2xl', 'mb-10'] }
        },
        {
          selector: 'h3',
          modifier: { classes: ['text-2xl', 'font-bold', 'py-1', 'mx-auto'] }
        },
        {
          selector: 'ul:first-of-type',
          modifier: { classes: ['flex', 'gap-10', 'my-16', 'justify-center', 'text-lg', 'font-light'] }
        },
        {
          selector: 'ul:first-of-type li:first-of-type',
          validation: (element: Element) => {
            const regex = /^\S+@\S+\.\S+$/;
            const email = element.textContent;
            if (email) {
              const match = email.match(regex);
              if (match) return match.length > 0;
            }
            return false;
          }
        },
        {
          selector: 'hr',
          modifier: { classes: ['border-b', 'border-gray-800'] }
        },
        {
          selector: 'ul:nth-of-type(2)',
          modifier: { classes: ['text-sm', 'uppercase', 'p-10', 'flex', 'gap-10'] }
        }
      ]
    });

    loadFragmentBySelector('.fragment');
  }
}

if (document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    decorateTemplate();
  });
} else {
  decorateTemplate();
}
