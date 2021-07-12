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

import { decorateElement, decorateSections } from '../../dom';
import { decorate as decoratePostsList } from '../../blocks/PostsList';

function decoratePage() {
  decorateElement('h3', {
    classes: ['text-center', 'uppercase', 'mt-24', 'mb-4']
  });

  decorateElement('h2', {
    classes: ['text-center', 'uppercase', 'text-3xl', 'mb-24', 'md:max-w-md', 'md:mx-auto']
  });

  decoratePostsList('.posts');

  decorateSections(`main > div`);
  document.body.classList.add('appear');
}

decoratePage();
