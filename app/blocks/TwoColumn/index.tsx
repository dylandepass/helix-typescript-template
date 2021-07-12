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

import { ElementModifier, resolveElement } from '../../dom';
import { decorate as decorateColumns } from '../Columns';

export function decorate(elementOrSelector: Element | string, rowModifier?: ElementModifier): void {
  const element = resolveElement(elementOrSelector);
  if (element) {
    let rowClasses = ['responsive-row'];
    if (rowModifier?.classes) {
      rowClasses = rowClasses.concat(rowModifier?.classes || []);
    }
    decorateColumns(element, { classes: rowClasses, childModifiers: rowModifier?.childModifiers }, [
      {
        classes: ['responsive-col', 'w-1/2']
      },
      { classes: ['responsive-col', 'w-1/2', 'flex-auto', 'text-lg'] }
    ]);
  }
}
