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
import { applyElementModifier } from '../../dom';
import './style.scss';

function createNav(renderer: CommonDOMRenderer, leftMenu: Element[], rightMenu: Element[]): Node {
  return (
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            {leftMenu.map((link) => {
              return applyElementModifier(link, { classes: ['navbar-item'] });
            })}
          </div>

          <div class="navbar-end">
            {rightMenu.map((link) => {
              return applyElementModifier(link, { classes: ['navbar-item'] });
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function decorate(block: Element, parent: Element): void {
  const leftMenu = block.querySelector('div:first-of-type p');
  const rightMenu = block.querySelector('div:nth-of-type(3) p');
  const renderer = new CommonDOMRenderer();
  if (leftMenu && rightMenu) {
    const navTemplate = createNav(renderer, Array.from(leftMenu.children), Array.from(rightMenu.children));
    renderer.render(navTemplate).before(block);
    block.remove();
  }
}
