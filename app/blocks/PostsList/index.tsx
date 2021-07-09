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

interface BlogPost {
  title: string;
  date: Date;
  path: string;
  excerpt: string;
  image: string;
}

function renderPost(renderer: CommonDOMRenderer, post: BlogPost): Node {
  return (
    <article class="">
      <div class="mb-7 py-6 px-3 bg-blue-100">
        <a href={post.path}>
          <img class="shadow-md h-52 object-cover" src={post.image}></img>
        </a>
      </div>
      <div>
        <a href={post.path} class="secondary-font text-lg">
          {post.title}
        </a>
        <div class="mb-5">
          <span class="font-light">{post.date}</span>
        </div>
        <div>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}

function renderBlogList(renderer: CommonDOMRenderer, posts: BlogPost[]): Node {
  return (
    <section class="mt-24 grid grid-cols-3 gap-12 mb-20">
      {posts.map((post: BlogPost) => {
        return renderPost(renderer, post);
      })}
    </section>
  );
}

export async function decorate(block: Element): Promise<void> {
  fetch('/posts.json')
    .then((response) => response.json())
    .then((body) => {
      console.log(body.data);

      const renderer = new CommonDOMRenderer();
      const blogList = renderBlogList(renderer, body.data);
      renderer.render(blogList).before(block);
      block.remove();
    });
}
