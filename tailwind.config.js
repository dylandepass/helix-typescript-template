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

/* eslint-disable no-undef */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./app/**/*.html', './app/**/*.tsx', './app/**/*.ts']
  },
  theme: {
    extend: {
      fontSize: {
        'hero-h1': '10.9rem',
        'hero-h2': '4.05rem',
        'mobile-hero-h1': '6.6rem',
        'mobile-hero-h2': '2.45rem'
      },
      container: {
        screens: {
          xl: '1140px'
        }
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    }
  },
  variants: {},
  plugins: []
};
