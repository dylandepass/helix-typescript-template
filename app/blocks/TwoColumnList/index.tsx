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

import { resolveElement } from '../../dom';
import { decorate as decorateColumns } from '../Columns';

export function decorate(elementOrSelector: Element | string): void {
  const element = resolveElement(elementOrSelector);
  if (element) {
    decorateColumns(
      element,
      {
        classes: [
          'responsive-row',
          'py-8',
          'sm:py-4',
          'border-b',
          'resume-separator-color',
          'w-3/4',
          'mx-auto',
          'mb-16'
        ]
      },
      [
        {
          classes: ['responsive-col', 'w-1/2', 'pb-10', 'sm:pb-2'],
          childModifiers: [
            { selector: 'h2', modifier: { classes: ['secondary-font'] } },
            { selector: 'h3', modifier: { classes: ['font-extralight'] } }
          ]
        },
        { classes: ['responsive-col', 'w-1/2', 'flex-auto', 'text-lg', 'font-light'] }
      ]
    );
  }
}
