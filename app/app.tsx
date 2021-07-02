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

import { loadCSS, loadScript } from './dom';
import './styles/styles.scss';

function decorateTemplate() {
  const main = document.querySelector('main');
  if (main) {
    const templateElement = document.querySelector('.template');
    if (templateElement) {
      const template = templateElement?.textContent;
      console.log(`template ${template}`);
      loadScript(`/build/${template}-bundle.js`);
      loadCSS(`${template}.css`);
      templateElement.remove();
    }
  }
}

if (document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    decorateTemplate();
  });
} else {
  decorateTemplate();
}
