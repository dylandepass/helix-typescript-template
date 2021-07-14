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

import { decorateElement, resolveElement } from '../../dom';

export function decorate(elementOrSelector: Element | string): void {
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
          selector: 'h2',
          modifier: { classes: ['text-4xl', 'font-semibold', 'uppercase', 'md:text-6xl', 'mb-10'] }
        }
      ]
    });
  }
}
