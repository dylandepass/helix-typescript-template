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

import { decorateElement, decorateFormSubmit, FormSinkBody, loadFragmentBySelector, resolveElement } from '../../dom';

export async function decorate(elementOrSelector: Element | string): Promise<void> {
  const element = resolveElement(elementOrSelector);
  if (element) {
    decorateElement(element, {
      classes: [
        'hero',
        'flex',
        'flex-col',
        'bg-black',
        'bg-opacity-30',
        'shadow-inner',
        'text-center',
        'justify-center',
        'items-center',
        'hero-text-color'
      ],
      childModifiers: [
        {
          selector: 'h1',
          modifier: {
            classes: [
              'uppercase',
              'text-mobile-hero-h1',
              'md:text-hero-h1',
              'h-32',
              'md:h-56',
              'font-extrabold',
              'text-mobile-black'
            ]
          }
        },
        {
          selector: 'h2',
          modifier: { classes: ['text-mobile-hero-h2', 'font-light', 'uppercase', 'md:text-hero-h2', 'mb-10'] }
        }
      ]
    });

    const formBlock = element.querySelector('.form');
    const sheet = formBlock?.querySelector('a')?.getAttribute('href');
    await loadFragmentBySelector('.form');
    const form = element.querySelector('#emailForm');
    if (form && sheet) {
      const formData = new FormData(form as HTMLFormElement);

      const fields = Array.from(formData.entries()).map((value) => {
        return {
          name: value[0],
          value: value[1]
        };
      });

      const body = {
        sheet: sheet,
        data: fields
      };

      decorateFormSubmit(form, body as FormSinkBody);
    }
  }
}
