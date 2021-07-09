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

function createMap(renderer: CommonDOMRenderer): Node {
  return (
    <section class="map">
      <iframe
        height="250"
        class="w-full h-96"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDjm9RLMBkHAhcSWARNWLcrsqlRYrzIdi0&q=Eiffel+Tower,Paris+France"
      ></iframe>
    </section>
  );
}

export function decorate(block: Element): void {
  const renderer = new CommonDOMRenderer();
  const map = createMap(renderer);
  renderer.render(map).before(block);
  block.remove();
}
