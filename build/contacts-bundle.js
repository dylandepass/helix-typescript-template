(self.webpackChunkhelix_typescript_template=self.webpackChunkhelix_typescript_template||[]).push([[421],{889:(e,t,r)=>{"use strict";r.r(t)},24:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ClassPlugin:()=>O,CommonDOMRenderer:()=>F,DOMRenderer:()=>w,EventHandlerPlugin:()=>A,FragmentLifeCycleMarkerComponentProcessor:()=>_,InputStatePlugin:()=>L,LiveDOMRenderer:()=>x,OptionObjectValuePlugin:()=>M,StylePlugin:()=>R,attachLifeCycleHook:()=>P,domPlugins:()=>j,fragmentLifeCycleInfo:()=>m,getLifeCycleMarker:()=>g,lifeCycleBind:()=>b,lifeCycleClear:()=>v,lifeCycleInfo:()=>h,setLifeCycleMarker:()=>y});class n extends Error{constructor(e){super("Referenced value read before it was resolved."),this.ref=e,Object.setPrototypeOf(this,n.prototype)}}class s extends Error{constructor(e){super("Attempting to resolve an already-resolved reference."),this.ref=e,Object.setPrototypeOf(this,s.prototype)}}class o{constructor(){this._resolved=!1}get resolved(){return this.isResolved()}isResolved(){return this._resolved}get $(){if(!this.isResolved())throw new n(this);return this._$}resolve(e){if(this.isResolved())throw new s(this);this._$=e,this._resolved=!0}}class i{constructor(){this._renderer=new o}plug(e){this._renderer.resolve(e)}renderer(){return this._renderer.$}}function l(e){return!!e.plugins&&Array.isArray(e.plugins)}i.PriorityMax=1,i.PriorityFallback=0;class a extends i{setProp(e,t,r){return"_content"===t&&(this.renderer().setContent(e,r),!0)}priority(){return i.PriorityFallback}}class c extends i{setProp(e,t,r){return"_ref"===t&&r instanceof o&&(r.resolve(e),!0)}priority(){return i.PriorityFallback}}class u extends i{}class d extends i{constructor(...e){super(),this.processors=e}plug(e){super.plug(e),this.processors.forEach((e=>e.plug(this.renderer()))),l(e)&&e.plugins.forEach((e=>{e instanceof u&&this.processors.push(e)})),this.processors=this.processors.sort(((e,t)=>e.priority()-t.priority()))}create(e,t,...r){const n={tag:e,props:t||{},children:r};if(this.match(n)){let e={};const t=[];this.processors.forEach((r=>r.process((t=>e=Object.assign(Object.assign({},e),t)),(e=>t.push(e)),n)));const r=this.createComponent(n,e);return t.reverse().forEach((e=>e(r))),r}}}class f extends d{createComponent(e,t){return e.tag.apply(t,[e.props,this.renderer(),e.children])}match(e){return"function"==typeof e.tag}priority(){return d.PriorityFallback}}class p extends u{process(e,t){const r=this.renderer(),n=[];e({onBind:e=>n.push({bind:e}),onClear:e=>n.push({clear:e})}),t((e=>{n.forEach((t=>r.hook(e,t)))}))}priority(){return u.PriorityFallback}}function h(e,t=!1){const r=e;return e.nodeType===e.DOCUMENT_FRAGMENT_NODE?m(e,t):r.lifecycle?r.lifecycle:t?(r.lifecycle={bound:!1},r.lifecycle):void 0}function m(e,t){var r;let n=g(e);return n?h(n,t):t?(n=null===(r=e.ownerDocument)||void 0===r?void 0:r.createTextNode(""),y(e,n),h(n,!0)):void 0}function y(e,t){e.lifecycleMarker=t,e.contains(t)||e.appendChild(t)}function g(e){return e.lifecycleMarker}function v(e){const t=h(e);if(t){if(t.cleared)return;if(t.cleared=!0,t.clears){for(let e=0,r=t.clears[e];e<t.clears.length;r=t.clears[++e])r();t.clears=void 0}}const r=e.childNodes;for(let e=0,t=r.item(e);e<r.length;t=r.item(++e))v(t)}function b(e){const t=h(e);if(t){if(t.bound)return;if(t.bound=!0,t.binds)for(let e=0,r=t.binds[e];e<t.binds.length;r=t.binds[++e])r();t.binds=void 0}const r=e.childNodes;for(let e=0,t=r.item(e);e<r.length;t=r.item(++e))b(t)}function P(e,t){const r=h(t,!0);e.bind&&(r.binds||(r.binds=[])).push(e.bind),e.clear&&(r.clears||(r.clears=[])).push(e.clear)}class _ extends u{process(e,t){let r;e({setLifeCycleMarker:e=>r=e}),t((e=>{e.nodeType===e.DOCUMENT_FRAGMENT_NODE&&r&&y(e,r instanceof o?r.$:r)}))}priority(){return u.PriorityFallback+(u.PriorityMax-u.PriorityFallback)/100}}function E(e){return!!e.postRender&&"function"==typeof e.postRender}class C extends Error{constructor(e){super(`Given tag is not recognized: ${e}`)}}class w extends class{constructor(...e){this._appendPlugins=[],this._createPlugins=[],this._propPlugins=[],this._contentPlugins=[],this._postCreatePlugins=[],this._postRenderPlugins=[],this._factories=e}_buildPlugins(){return this._plugins||(this._plugins=this._factories.map((e=>e())).sort(((e,t)=>t.priority()-e.priority())),this._plugins.forEach((e=>{var t;e.plug(this),(t=e).append&&"function"==typeof t.append&&this._appendPlugins.push(e),function(e){return!!e.setContent&&"function"==typeof e.setContent}(e)&&this._contentPlugins.push(e),function(e){return!!e.setProp&&"function"==typeof e.setProp}(e)&&this._propPlugins.push(e),function(e){return!!e.create&&"function"==typeof e.create}(e)&&this._createPlugins.push(e),function(e){return!!e.postCreate&&"function"==typeof e.postCreate}(e)&&this._postCreatePlugins.push(e),E(e)&&this._postRenderPlugins.push(e),function(e){return!!e.leaf&&"function"==typeof e.leaf}(e)&&!this._leafPlugin&&(this._leafPlugin=e),function(e){return!!e.fragment&&"function"==typeof e.fragment}(e)&&!this._fragmentPlugin&&(this._fragmentPlugin=e)}))),this}get plugins(){return this._buildPlugins()&&this._plugins}get appendPlugins(){return this._buildPlugins()&&this._appendPlugins}get contentPlugins(){return this._buildPlugins()&&this._contentPlugins}get propPlugins(){return this._buildPlugins()&&this._propPlugins}get createPlugins(){return this._buildPlugins()&&this._createPlugins}get postCreatePlugins(){return this._buildPlugins()&&this._postCreatePlugins}get postRenderPlugins(){return this._buildPlugins()&&this._postRenderPlugins}get leafPlugin(){return this._buildPlugins()&&this._leafPlugin}get fragmentPlugin(){return this._buildPlugins()&&this._fragmentPlugin}plug(...e){return this.clone(...this._factories,...e)}append(e,t){this.appendPlugins.some((r=>r.append(e,t)))||this.fallbackAppend(e,t)}setProp(e,t,r){this.propPlugins.some((n=>n.setProp(e,t,r)))||this.fallbackSetProp(e,t,r)}setContent(e,t){this.contentPlugins.some((r=>r.setContent(e,t)))||this.fallbackSetContent(e,t)}get fragment(){const e=this.fragmentPlugin;return e?e.fragment():this.fallbackFragment()}leaf(){const e=this.leafPlugin;return e?e.leaf():this.fallbackLeaf()}create(e,t,...r){let n;for(const s of this.createPlugins)if(n=s.create(e,t,...r),n)break;return n||(n=this.fallbackCreate(e,t),t&&Object.entries(t).forEach((([e,t])=>this.setProp(n,e,t))),r.forEach((e=>this.append(e,n)))),this.postCreatePlugins.forEach((e=>e.postCreate(n))),n}render(e){if("function"==typeof e)return this.render(e.apply(void 0,[this]));const t=this,r=this.postRender(e);return{after(n){t.renderAfter(e,n),r()},before(n){t.renderBefore(e,n),r()},on(n){t.renderOn(e,n),r()},target:e}}postRender(e){return()=>this.postRenderPlugins.forEach((t=>t.postRender(e)))}}{constructor(e=window,...t){super(..."function"==typeof e?[e,...t]:t),this.dom=e&&"function"!=typeof e?e:window}get document(){return this.dom.document}fallbackAppend(e,t){e instanceof this.dom.Node?t.appendChild(e):Array.isArray(e)?e.forEach((e=>this.append(e,t))):t.appendChild(this.document.createTextNode(`${e}`))}fallbackSetProp(e,t,r){e instanceof this.dom.HTMLElement&&("boolean"==typeof r?r?e.setAttribute(t,""):e.removeAttribute(t):e.setAttribute(t,`${r}`))}fallbackSetContent(e,t){e instanceof this.dom.HTMLElement?e.innerHTML=`${t}`:e.textContent=`${t}`}fallbackFragment(){return this.document.createDocumentFragment()}fallbackLeaf(){return this.document.createTextNode("")}fallbackCreate(e,t){if(!(e instanceof this.dom.Node||"string"==typeof e))throw new C(e);return e instanceof this.dom.Node?e:t&&t.xmlns?this.document.createElementNS(`${t.xmlns}`,e):this.document.createElement(e)}renderOn(e,t){t.appendChild(e)}renderAfter(e,t){t.parentNode&&t.parentNode.insertBefore(e,t.nextSibling)}renderBefore(e,t){t.parentNode&&t.parentNode.insertBefore(e,t)}postRender(e){const t=this.plugins.filter(E);if(e instanceof this.dom.DocumentFragment){const t=Array.from(e.childNodes);return()=>t.forEach((e=>{this.postRender(e)()}))}return()=>t.forEach((t=>t.postRender(e)))}remove(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)}clone(...e){return new w(this.dom,...e)}}class x extends w{hook(e,t){P(t,e)}postRender(e){return e instanceof this.dom.DocumentFragment?super.postRender(e):()=>{this.document.contains(e)&&b(e),super.postRender(e)()}}plug(...e){return super.plug(...e)}clone(...e){return new x(this.dom,...e)}remove(e,t){super.remove(e),t||v(e)}}function k(e){return!!e.addClass&&"function"==typeof e.addClass}function S(e){return!!e.addClassToggle&&"function"==typeof e.addClassToggle}class O extends i{plug(e){super.plug(e),l(e)&&(this.addClassPlugins=e.plugins.filter(k),this.toggleClassPlugins=e.plugins.filter(S))}priority(){return i.PriorityFallback}setProp(e,t,r){if("class"===t){if(Array.isArray(r))return r.forEach((t=>{let r="";const n=t=>{e.classList.contains(r)&&e.classList.remove(r),e.classList.add(r=t)};this.addClassPlugins&&this.addClassPlugins.some((r=>k(r)&&r.addClass(e,t,n)))||("string"==typeof t?e.classList.add(t):this.setToggleMap(t,e))})),!0;if((null==r?void 0:r.constructor)===Object)return this.setToggleMap(r,e),!0}return!1}setToggleMap(e,t){Object.entries(e).forEach((([e,r])=>{this.toggleClassPlugins&&this.toggleClassPlugins.some((n=>S(n)&&n.addClassToggle(t,e,r,(r=>{r?t.classList.add(e):t.classList.remove(e)}))))||(r?t.classList.add(e):t.classList.remove(e))}))}}class A extends i{priority(){return i.PriorityFallback}setProp(e,t,r){if(t.startsWith("on")&&"function"==typeof r){const n=t.substr(2).toLowerCase();return e.addEventListener(n,r),!0}return!1}}function N(e){if("INPUT"===e.nodeName)return"number"===e.type?parseFloat(e.value):"checkbox"===e.type||"radio"===e.type?e.checked:e.value;if("SELECT"===e.nodeName){const t=e,r=Array.from(t.selectedOptions).map((e=>function(e){return e._value}(e)||e.value||e.text));return t.multiple?r:r[0]}return e.value}class L extends i{priority(){return i.PriorityFallback}setProp(e,t,r){if("_state"===t&&("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName||"SELECT"===e.nodeName)&&"function"==typeof r){const t=this.renderer();return t.hook(e,{bind(){if("INPUT"===e.nodeName&&"radio"===e.type&&e.name){const n=e;(n.form||t.document).querySelectorAll(`input[name="${n.name}"]`).forEach((e=>{e.form===n.form&&e.addEventListener("input",(()=>r(N(n))))}))}else e.addEventListener("input",(()=>r(N(e))));r(N(e))}}),!0}return!1}}class M extends i{priority(){return i.PriorityFallback}setProp(e,t,r){return"_value"===t&&"OPTION"===e.nodeName&&(n=r,e._value=n,!0);var n}}function T(e){return!!e.setStyle&&"function"==typeof e.setStyle}class R extends i{plug(e){super.plug(e),l(e)&&(this.stylePlugins=e.plugins.filter(T))}priority(){return i.PriorityFallback}setProp(e,t,r){return"style"===t&&(null==r?void 0:r.constructor)===Object&&(Object.entries(r).forEach((([t,r])=>{this.stylePlugins&&this.stylePlugins.some((n=>T(n)&&n.setStyle(e,t,r,(r=>this.setStyle(e,t,r)))))||this.setStyle(e,t,r)})),!0)}format(e,t){const r=e.split(".");return{key:r[0],val:t,unit:r[1]||""}}setStyle(e,t,r){if("transform"===t&&"object"==typeof r)e.style.transform=Object.entries(r).map((e=>this.format(...e))).map((({key:e,val:t,unit:r})=>`${e}(${t}${r})`)).join(" ");else if("transition"===t&&"object"==typeof r)e.style.transition=Object.entries(r).map((e=>this.format(...e))).map((({key:e,val:t,unit:r})=>`${e} ${t}${r}`)).join(", ");else{const{key:n,val:s,unit:o}=this.format(t,`${r}`);e.style[n]=`${s}${o}`}}}function j(){return[()=>new A,()=>new M,()=>new L,()=>new O,()=>new R]}class F extends x{constructor(e=window){super(e,(()=>new f),(()=>new p),(()=>new _),(()=>new c),(()=>new a),...j())}}},917:function(e,t,r){"use strict";var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),t.decorate=void 0;var s=r(466);r(889),t.decorate=function(e,t,r){var o,i,l=s.resolveElement(e),a=[];if(l)try{for(var c=n(Object.values(l.children)),u=c.next();!u.done;u=c.next()){var d=u.value;d.classList.add("flex"),t&&s.decorateElement(d,t);var f=Array.from(d.children);for(var p in f){var h=f[p],m=s.createElement("div");if(s.wrapElements(m,Array.from(h.children)),r){var y=r[p];y&&s.decorateElement(h,y)}h.classList.add("column"),a.push(h)}}}catch(e){o={error:e}}finally{try{u&&!u.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}return a}},368:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decorate=void 0;var n=r(24),s=r(466);t.decorate=function(e){var t=s.resolveElement(e);if(t){var r=new n.CommonDOMRenderer,o=function(e){return e.create("section",{class:"map"},e.create("iframe",{height:"250",class:"w-full h-96",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyDjm9RLMBkHAhcSWARNWLcrsqlRYrzIdi0&q=Eiffel+Tower,Paris+France"}))}(r);r.render(o).before(t),t.remove()}}},828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decorate=void 0;var n=r(466),s=r(917);t.decorate=function(e,t){var r=n.resolveElement(e);if(r){var o=["responsive-row"];(null==t?void 0:t.classes)&&(o=o.concat((null==t?void 0:t.classes)||[])),s.decorate(r,{classes:o,childModifiers:null==t?void 0:t.childModifiers},[{classes:["responsive-col","w-1/2"]},{classes:["responsive-col","w-1/2","flex-auto","text-lg"]}])}}},466:function(e,t){"use strict";var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,s,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}return i};function s(e,t){return void 0===t&&(t="text/javascript"),new Promise((function(r,n){var s=document.querySelector("head");if(s){var o=i("script",{src:e});o.async=!0,t&&(o.type=t),s.append(o),o.onload=function(){r()},o.onerror=function(){n()}}}))}function o(e){return new Promise((function(t,r){if(!document.querySelector('head > link[href="'+e+'"]')){var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n.onload=function(){t()},n.onerror=function(){r()},document.head.appendChild(n)}}))}function i(e,t){var s,o,i=document.createElement(e);if("object"==typeof t)try{for(var l=r(Object.entries(t)),a=l.next();!a.done;a=l.next()){var c=n(a.value,2),u=c[0],d=c[1];i.setAttribute(u,d)}}catch(e){s={error:e}}finally{try{a&&!a.done&&(o=l.return)&&o.call(l)}finally{if(s)throw s.error}}return i}function l(e){var t=e;if("string"==typeof e){var r=document.querySelector(e);if(!r)return;t=r}return t}function a(e,t){var n,s,o,i,a,h,m=t.classes,y=t.attributes,g=t.wraps,v=t.inserts,b=t.childModifiers,P=l(e);if(P){if(m&&f(P,m),y&&p(P,y),g)try{for(var _=r(g),E=_.next();!E.done;E=_.next())u(P,E.value)}catch(e){n={error:e}}finally{try{E&&!E.done&&(s=_.return)&&s.call(_)}finally{if(n)throw n.error}}if(v)try{for(var C=r(v),w=C.next();!w.done;w=C.next())d(P,w.value)}catch(e){o={error:e}}finally{try{w&&!w.done&&(i=C.return)&&i.call(C)}finally{if(o)throw o.error}}if(b)try{for(var x=r(b),k=x.next();!k.done;k=x.next())c(P,k.value)}catch(e){a={error:e}}finally{try{k&&!k.done&&(h=x.return)&&h.call(x)}finally{if(a)throw a.error}}return P}}function c(e,t){var n,s,o=t.selector,i=t.modifier,l=t.validation,c=e.querySelectorAll(o);try{for(var u=r(Array.from(c)),d=u.next();!d.done;d=u.next()){var f=d.value;f&&(i&&a(f,i),l&&(l(f)||f.remove()))}}catch(e){n={error:e}}finally{try{d&&!d.done&&(s=u.return)&&s.call(u)}finally{if(n)throw n.error}}return e}function u(e,t){var r,n=t.tag,s=t.classes,o=t.attributes,l=i(n);s&&f(l,s),o&&p(l,o),null===(r=e.parentNode)||void 0===r||r.insertBefore(l,e),l.appendChild(e)}function d(e,t){var r=t.tag,n=t.position,s=t.innerHTML,o=t.classes,l=t.attributes,a=i(r);o&&f(a,o),l&&p(a,l),s&&(a.innerHTML=s),"number"==typeof n&&e.parentElement?e.insertBefore(a,e.children[n]):e.insertAdjacentElement(n,a)}function f(e,t){var n,s;try{for(var o=r(t),i=o.next();!i.done;i=o.next()){var l=i.value;e.classList.add(l)}}catch(e){n={error:e}}finally{try{i&&!i.done&&(s=o.return)&&s.call(o)}finally{if(n)throw n.error}}}function p(e,t){var n,s;try{for(var o=r(Object.keys(t)),i=o.next();!i.done;i=o.next()){var l=i.value;e.setAttribute(l,t[l])}}catch(e){n={error:e}}finally{try{i&&!i.done&&(s=o.return)&&s.call(o)}finally{if(n)throw n.error}}}Object.defineProperty(t,"__esModule",{value:!0}),t.onElementVisible=t.decorateSections=t.wrapElements=t.addElementAttributes=t.addElementClasses=t.insertElement=t.wrapElement=t.decorateChildElement=t.decorateElement=t.resolveElement=t.createElement=t.loadCSS=t.loadScript=t.loadTemplate=void 0,t.loadTemplate=function(){var e,t=document.querySelector(".template");if(t){var r=null===(e=null==t?void 0:t.textContent)||void 0===e?void 0:e.toLowerCase();console.log("template "+r),s("/build/"+r+"-bundle.js"),o("/build/"+r+".css"),t.remove()}},t.loadScript=s,t.loadCSS=o,t.createElement=i,t.resolveElement=l,t.decorateElement=a,t.decorateChildElement=c,t.wrapElement=u,t.insertElement=d,t.addElementClasses=f,t.addElementAttributes=p,t.wrapElements=function(e,t){t.forEach((function(t){var r,n;e.appendChild(t.cloneNode(!0)),1!==e.children.length?null===(r=t.parentNode)||void 0===r||r.removeChild(t):null===(n=t.parentNode)||void 0===n||n.replaceChild(e,t)}))},t.decorateSections=function(e){document.querySelectorAll(e).forEach((function(e){e.id||f(e,["container","md:mx-auto","section","p-10"])}))},t.onElementVisible=function(e,t,s){var o=new IntersectionObserver((function(i){var l,a;if(i[0].isIntersecting){var c=Array.from(e.querySelectorAll(t));try{for(var u=r(c.entries()),d=u.next();!d.done;d=u.next()){var f=n(d.value,2),p=f[0],h=f[1];s&&s(p,h)}}catch(e){l={error:e}}finally{try{d&&!d.done&&(a=u.return)&&a.call(u)}finally{if(l)throw l.error}}o.disconnect()}}),{threshold:[0]}),i=e.querySelector(t);i&&o.observe(i)}},827:(e,t,r)=>{"use strict";var n=r(466),s=r(828),o=r(368);!function(){s.decorate(".contacts",{classes:["responsive-row","md:mt-24","gap-10","md:gap-24","mb-24"],childModifiers:[{selector:"h3",modifier:{classes:["text-sm","mb-6"]}},{selector:"div:first-of-type > h2",modifier:{classes:["text-2xl","mb-0"]}},{selector:"p",modifier:{classes:["mt-6","font-light"]}},{selector:"div:nth-of-type(2) > h2",modifier:{classes:["text-lg","mb-0","secondary-font"]}}]});var e=document.querySelector(".maps");e&&o.decorate(e),n.decorateSections("main .contacts"),document.body.classList.add("appear")}()}},e=>{"use strict";e.O(0,[712],(()=>(827,e(e.s=827)))),e.O()}]);