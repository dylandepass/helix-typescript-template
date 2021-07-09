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

/**
 * Merges the objects in the argument list, modifying and returning the first.
 * To merge into a new object, pass {} as the first parameter.
 * Only arguments (except the first) that are dictionaries are merged, so passing
 * 'undefined' as a parameter has no effect.
 * @param   {Object} res The object to merge.
 * @returns {Object} The merged object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const merge = (...objs: unknown[]): any => {
  if (!objs || !Array.isArray(objs) || objs.length < 1) {
    return {};
  }
  const target = objs.shift();
  while (objs.length > 0) {
    const obj = objs.shift();
    // Might add mode cases here, but the significant thing to note is that
    // arguments that are undefined are ignored.
    if (typeof obj === 'object') {
      for (const name in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
          target[name] = obj[name];
        }
      }
    }
  }
  return target;
};
