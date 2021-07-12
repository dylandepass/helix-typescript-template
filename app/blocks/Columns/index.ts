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

import { decorateElement, createElement, ElementModifier, wrapElements, resolveElement } from '../../dom';
import './style.css';

/**
 * Decorates an element with Flex box to layout in columns
 * @param {Element | string} elementOrSelector      An element or a selector string
 * @param {ElementModifier} rowModifier             A modifier applied to every row
 * @param {ElementModifier[]} columnModifiers       A modifier applied to every column
 * @returns
 */
export function decorate(
  elementOrSelector: Element | string,
  rowModifier?: ElementModifier,
  columnModifiers?: ElementModifier[]
): Element[] {
  const element = resolveElement(elementOrSelector);
  const rows: Element[] = [];
  if (element) {
    for (const row of Object.values(element.children)) {
      row.classList.add('flex');
      if (rowModifier) {
        decorateElement(row, rowModifier);
      }

      const children = Array.from(row.children);
      for (const index in children) {
        const column = children[index];
        const contentWrapper = createElement('div');
        wrapElements(contentWrapper, Array.from(column.children));
        if (columnModifiers) {
          const modifier = columnModifiers[index];
          if (modifier) {
            decorateElement(column, modifier);
          }
        }
        column.classList.add('column');
        rows.push(column);
      }
    }
  }

  return rows;
}
