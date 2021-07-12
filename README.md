# helix-typescript-template

An opinionated quick start template for bootstrapping a helix site with Typescript, Webpack and Tailwind CSS.

[Example](https://dev--helix-typescript-template--dylandepass.hlx.page)

## Setup

```sh
yarn
```

Development Mode (Hot reload, not minimized)

```sh
yarn start
```

Production Build (Minimized)

```sh
yarn build
```

## 🎯 Goals

- Avoid writing DOM manipulation code for simple decoration
- Minimal CSS and frictionless theming/remixing support
- Declarative code > imperative code
- Limited dependencies and small bundle sizes

## 🤜🏼 Motivations

### 🚫 Minimize writing DOM manipulation code for simple decoration

Helix converts cloud documents into HTML elements with minimal decoration. More often then not some amount of manipulation is required to come to a desired result. This typically includes adding attributes, classes, performing validation and wrapping the content in other tags. To do this one must write DOM manipulation code in javascript which can be verbose and hard to reason about when doing simple things. This template contains utility functions to achieve the same result in less lines of code that is _hopefully_ easier to follow.

These utility functions are likely not as useful for sites with in depth DOM manipulation requirements, but for static sites that just need to be styled, it works quite well.

#### 🗜 Example

The `decorateElement` utility function can accept both an element or a query selector. The element modifier parameter is an object that allow you to define any wraps, inserts, validations, classes or attributes that should be used to decorate the element.

Consider the example below where we have a block that we'd like to decorate

```html
<div class="contact">
  <h1>Get In Touch!</h1>
  <h3>+1 555 485 8435</h1>
  <h3>template@example.com</h1>
</div>
```

We want to add some classes, attributes insert an icon and also wrap in a `section` tag.

```html
<section>
  <div class="contact dark-theme" aria-label="Contact Info">
    <h1 class="font-light">Get In Touch!</h1>
    <h3><i class="fas fa-phone"></i>+1 555 485 8435</h1>
    <h3>template@example.com</h1>
  </div>
</section>
```

Doing this with the DOM API's could be done with

```js
const block = document.querySelector('.block');
if (block) {
  block.classList.add('dark-theme');
  block.setAttribute('aria-label', 'Contact Info');

  const section = document.createElement('section');
  wrapElements(section, block);

  const h1 = block.querySelector('h1');
  if (h1) {
    h1.classList.add('font-light');
  }

  const phoneBlock = block.querySelector('h3:first-of-type');
  if (phoneBlock) {
    const phoneIcon = createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-phone');
    phoneBlock.insertAdjacentElement('afterbegin', icon);
  }
}
```

Using the `decorateElement` utility class this turns into

```ts
decorateElement('.block', {
  wraps: [{ tag: 'section' }],
  classes: ['dark-theme'],
  attributes: { 'aria-label': 'Contact Info' },
  childModifiers: [
    {
      selector: 'h1',
      modifier: {
        classes: ['font-light']
      }
    },
    {
      selector: 'h3:first-of-type',
      modifier: {
        inserts: [{ tag: 'i', classes: ['fas', 'fa-phone'], position: 'afterbegin' }]
      }
    }
  ]
});
```

There are 40% less code lines in this simple example and almost half the amount of characters typed vs writing with the DOM API. While it's 100% subjective as to the merits of a utility method like this, from my personal experience I found it easier to read and more enjoyable to write, especially when mixed with [Tailwind](https://tailwindcss.com).

### 💄 Minimal custom CSS and frictionless theming/remixing support

Semantic CSS is not without it's challenges, it can be hard to maintain, you are constantly switching context between html and css and coming up with meaningful class names is always a challenge. Updating CSS can also bring with it some FUD about breaking other components if your CSS is not structured or organized correctly.

In this template we say goodbye to all semantic CSS when it comes to the structure of a page and only use it for simple stylings like colors and font styling. All customizable stylings exist in a single [theme.css](/theme.css) file. Our structural CSS comes courtesy of [Tailwind](https://tailwindcss.com), a utility first CSS framework that has exploded in popularity over the last couple years for it's ease of use and the speed at which you can style HTML.

A great [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) is available for tailwind that will speed up development time while getting started with the framework.

### 🧑🏻‍💻 Declarative code > imperative code

There will be places where DOM manipulation in a way where the provided utility functions fall short. For this we want to still avoid using imperative DOM manipulation code and instead use declarative code in the form of JSX. In the end JSX is transpiled into DOM calls but it has many advantages over the DOM API including being less verbose then javascript, easier to write, easier to create re-usable components and the ability to embed one component in another.

The [Nav](https://github.com/dylandepass/helix-typescript-template/blob/dev/app/blocks/Nav/index.tsx) component is a good example of one where JSX is a better choice over the utility functions for styling.

### 📦 Limited dependencies and small bundle sizes

With the addition of a transpilation step run by webpack we are able to minimize our production javascript and css code. Since we using ES6 modules with Webpack we can also implement code splitting to only require the code we need when loading each page.

The build folder contains the following

- [runtime-bundle.js](/build/runtime-bundle.js) bundle (1 kb) which contains code to load our chunks.
- [shared-bundle.js](/build/shared-bundle.js) bundle (148 bytes) which contains code that is shared across all pages (currently just [render-jsx](https://www.npmjs.com/package/render-jsx))
- [app.css](/build/app.css) file (18kb) which contains our shared css, mostly Tailwind classes
- A css and js file for every page.
