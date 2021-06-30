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
import { getElementAttribute, getElementContent } from '../../dom';
import './style.scss';

function createHero(renderer: CommonDOMRenderer, title: string, subtitle: string, backgroundImage: string): Node {
  return (
    <section class="hero hero-background is-halfheight" style={`background-image: url(${backgroundImage})`}>
      <div class="hero-body">
        <div class="">
          <h1 class="has-text-white">{title}</h1>
          <h3 class="has-text-white">{subtitle}</h3>
        </div>
      </div>
    </section>
  );
}

export function decorate(block: Element, parent: Element): void {
  const title = getElementContent(block, 'h1');
  const subtitle = getElementContent(block, 'h3');
  const image = getElementAttribute(block, 'img', 'src');
  const renderer = new CommonDOMRenderer();
  const heroTemplate = createHero(renderer, title || '', subtitle || '', image || '');
  renderer.render(heroTemplate).on(parent);
  parent.removeChild(block);
}
