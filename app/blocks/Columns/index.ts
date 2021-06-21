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

import { applyElementModifier, ElementModifier } from '../../dom';
import './style.css';

export function decorate(
  block: Element,
  rowModifier?: ElementModifier,
  columnModifiers?: ElementModifier[]
): Element[] {
  const row = block.children[0];
  row.classList.add('row');
  if (rowModifier) {
    applyElementModifier(row, rowModifier);
  }

  const columns: Element[] = [];
  const children = Array.from(row.children);
  for (const index in children) {
    const column = children[index];
    if (columnModifiers) {
      const modifier = columnModifiers[index];
      if (modifier) {
        applyElementModifier(column, modifier);
      }
    }
    column.classList.add('column');
    columns.push(column);
  }

  return columns;
}
