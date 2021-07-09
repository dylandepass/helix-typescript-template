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

import { decorate as decorateColumns } from '../Columns';

export function decorate(block: Element): void {
  decorateColumns(
    block,
    {
      classes: ['responsive-row'],
      childModifiers: [
        {
          selector: 'p:first-of-type',
          modifier: {
            classes: ['secondary-font', 'uppercase', 'leading-6', 'pb-4', 'text-center', 'md:text-left', 'lg:text-left']
          }
        },
        {
          selector: 'p:nth-of-type(2)',
          modifier: { classes: ['font-light', 'pb-8', 'text-center', 'md:text-left', 'lg:text-left'] }
        },
        {
          selector: 'img',
          modifier: {
            classes: ['mx-auto', 'w-14', 'h-14', 'm-10', 'md:m-0', 'md:w-7', 'md:h-7', 'lg:w-7', 'lg:h-7', 'lg:m-0']
          }
        }
      ]
    },
    [
      {
        classes: ['md:w-12']
      },
      {
        classes: ['md:w-1/2', 'sm:text-center']
      },
      { classes: ['md:w-12'] },
      { classes: ['md:w-1/2', 'sm:text-center'] }
    ]
  );
}
