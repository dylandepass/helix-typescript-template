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
        classes: ['responsive-row', 'gap-10', 'is-6', 'text-center'],
        childModifiers: [
          {
            selector: 'img',
            modifier: { classes: ['mb-12', 'mx-auto', 'w-10/12'], attributes: { width: '228', height: '177' } }
          },
          {
            selector: 'div h3',
            modifier: { classes: ['secondary-font', 'font-light', 'text-base', 'uppercase', 'mb-8'] }
          }
        ]
      },
      [
        {
          classes: ['responsive-col', 'p-6', 'card-1-background-color', 'card-1-text-color', 'opacity-0']
        },
        {
          classes: ['responsive-col', 'p-6', 'card-2-background-color', 'card-2-text-color', 'opacity-0']
        },
        {
          classes: ['responsive-col', 'p-6', 'card-1-background-color', 'card-1-text-color', 'opacity-0']
        }
      ]
    );
  }
}
