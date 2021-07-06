(self["webpackChunkhelix_typescript_template"] = self["webpackChunkhelix_typescript_template"] || []).push([["app"],{

/***/ "./app/styles/styles.css":
/*!*******************************!*\
  !*** ./app/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/errors/ref-already-resolved.error.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/errors/ref-already-resolved.error.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefAlreadyResolvedError": () => (/* binding */ RefAlreadyResolvedError)
/* harmony export */ });
/*global RefLike*/
class RefAlreadyResolvedError extends Error {
    /*istanbul ignore next*/
    constructor(ref) {
        super('Attempting to resolve an already-resolved reference.');
        this.ref = ref;
        Object.setPrototypeOf(this, RefAlreadyResolvedError.prototype);
    }
}
//# sourceMappingURL=ref-already-resolved.error.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/errors/unresolved-ref.error.js":
/*!********************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/errors/unresolved-ref.error.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnresolvedRefError": () => (/* binding */ UnresolvedRefError)
/* harmony export */ });
/*global RefLike*/
class UnresolvedRefError extends Error {
    /*istanbul ignore next*/
    constructor(ref) {
        super('Referenced value read before it was resolved.');
        this.ref = ref;
        Object.setPrototypeOf(this, UnresolvedRefError.prototype);
    }
}
//# sourceMappingURL=unresolved-ref.error.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/plugins/content-prop.plugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/plugins/content-prop.plugin.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentPropPlugin": () => (/* binding */ ContentPropPlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");

class ContentPropPlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    setProp(node, prop, target) {
        if (prop === '_content') {
            this.renderer().setContent(node, target);
            return true;
        }
        return false;
    }
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
}
//# sourceMappingURL=content-prop.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/plugins/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/plugins/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefPlugin": () => (/* reexport safe */ _ref_plugin__WEBPACK_IMPORTED_MODULE_0__.RefPlugin),
/* harmony export */   "ContentPropPlugin": () => (/* reexport safe */ _content_prop_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentPropPlugin),
/* harmony export */   "commonPlugins": () => (/* binding */ commonPlugins)
/* harmony export */ });
/* harmony import */ var _content_prop_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-prop.plugin */ "./node_modules/render-jsx/dist/es6/common/plugins/content-prop.plugin.js");
/* harmony import */ var _ref_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ref.plugin */ "./node_modules/render-jsx/dist/es6/common/plugins/ref.plugin.js");




function commonPlugins() {
    return [
        () => new _ref_plugin__WEBPACK_IMPORTED_MODULE_0__.RefPlugin(),
        () => new _content_prop_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentPropPlugin(),
    ];
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/plugins/ref.plugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/plugins/ref.plugin.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefPlugin": () => (/* binding */ RefPlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ref */ "./node_modules/render-jsx/dist/es6/common/ref.js");


class RefPlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    setProp(node, prop, target) {
        if (prop === '_ref' && target instanceof _ref__WEBPACK_IMPORTED_MODULE_1__.Ref) {
            target.resolve(node);
            return true;
        }
        return false;
    }
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
}
//# sourceMappingURL=ref.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/common/ref.js":
/*!********************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/common/ref.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ref": () => (/* binding */ Ref),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/render-jsx/dist/es6/common/errors/unresolved-ref.error.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/render-jsx/dist/es6/common/errors/ref-already-resolved.error.js");
/*global RefLike*/

class Ref {
    constructor() {
        this._resolved = false;
    }
    get resolved() {
        return this.isResolved();
    }
    isResolved() {
        return this._resolved;
    }
    get $() {
        if (!this.isResolved()) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_0__.UnresolvedRefError(this);
        }
        return this._$;
    }
    resolve(t) {
        if (this.isResolved()) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__.RefAlreadyResolvedError(this);
        }
        this._$ = t;
        this._resolved = true;
    }
}
function ref() {
    return new Ref();
}
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/component/plugins/component.plugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/component/plugins/component.plugin.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPlugin": () => (/* binding */ ComponentPlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../processor */ "./node_modules/render-jsx/dist/es6/component/processor.js");


class ComponentPlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    constructor(...processors) {
        super();
        this.processors = processors;
    }
    plug(renderer) {
        super.plug(renderer);
        this.processors.forEach(p => p.plug(this.renderer()));
        /*istanbul ignore else*/
        if ((0,_renderer__WEBPACK_IMPORTED_MODULE_0__.isRendererWithPlugins)(renderer)) {
            renderer.plugins.forEach(p => {
                if (p instanceof _processor__WEBPACK_IMPORTED_MODULE_1__.ComponentProcessor) {
                    this.processors.push(p);
                }
            });
        }
        this.processors = this.processors.sort((a, b) => a.priority() - b.priority());
    }
    create(tag, props, ...children) {
        const data = { tag, props: props || {}, children };
        if (this.match(data)) {
            let provision = {};
            const post = [];
            this.processors.forEach(p => p.process(_provision => provision = Object.assign(Object.assign({}, provision), _provision), _post => post.push(_post), data));
            const $ = this.createComponent(data, provision);
            post.reverse().forEach(p => p($));
            return $;
        }
        else {
            return undefined;
        }
    }
}
//# sourceMappingURL=component.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/component/plugins/func-comp.plugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/component/plugins/func-comp.plugin.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionalComponentPlugin": () => (/* binding */ FunctionalComponentPlugin)
/* harmony export */ });
/* harmony import */ var _component_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.plugin */ "./node_modules/render-jsx/dist/es6/component/plugins/component.plugin.js");

class FunctionalComponentPlugin extends _component_plugin__WEBPACK_IMPORTED_MODULE_0__.ComponentPlugin {
    createComponent(component, provision) {
        return component.tag.apply(provision, [component.props, this.renderer(), component.children]);
    }
    match(component) {
        return typeof component.tag === 'function';
    }
    priority() {
        return _component_plugin__WEBPACK_IMPORTED_MODULE_0__.ComponentPlugin.PriorityFallback;
    }
}
//# sourceMappingURL=func-comp.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/component/plugins/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/component/plugins/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentPlugin": () => (/* reexport safe */ _component_plugin__WEBPACK_IMPORTED_MODULE_0__.ComponentPlugin),
/* harmony export */   "FunctionalComponentPlugin": () => (/* reexport safe */ _func_comp_plugin__WEBPACK_IMPORTED_MODULE_1__.FunctionalComponentPlugin),
/* harmony export */   "LiveComponentProcessor": () => (/* reexport safe */ _live_component_processor__WEBPACK_IMPORTED_MODULE_2__.LiveComponentProcessor),
/* harmony export */   "componentPlugins": () => (/* binding */ componentPlugins)
/* harmony export */ });
/* harmony import */ var _func_comp_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./func-comp.plugin */ "./node_modules/render-jsx/dist/es6/component/plugins/func-comp.plugin.js");
/* harmony import */ var _live_component_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-component.processor */ "./node_modules/render-jsx/dist/es6/component/plugins/live-component.processor.js");
/* harmony import */ var _component_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.plugin */ "./node_modules/render-jsx/dist/es6/component/plugins/component.plugin.js");





function componentPlugins() {
    return [
        () => new _func_comp_plugin__WEBPACK_IMPORTED_MODULE_1__.FunctionalComponentPlugin(),
        () => new _live_component_processor__WEBPACK_IMPORTED_MODULE_2__.LiveComponentProcessor(),
    ];
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/component/plugins/live-component.processor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/component/plugins/live-component.processor.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveComponentProcessor": () => (/* binding */ LiveComponentProcessor)
/* harmony export */ });
/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../processor */ "./node_modules/render-jsx/dist/es6/component/processor.js");

class LiveComponentProcessor extends _processor__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor {
    process(provide, post) {
        const renderer = this.renderer();
        const hooks = [];
        provide({
            onBind: (fn) => hooks.push({ bind: fn }),
            onClear: (fn) => hooks.push({ clear: fn }),
        });
        post(node => {
            hooks.forEach(hook => renderer.hook(node, hook));
        });
    }
    priority() {
        return _processor__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor.PriorityFallback;
    }
}
//# sourceMappingURL=live-component.processor.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/component/processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/component/processor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentProcessor": () => (/* binding */ ComponentProcessor)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");

class ComponentProcessor extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
}
//# sourceMappingURL=processor.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/component/fragment-lcmarker.processor.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/component/fragment-lcmarker.processor.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FragmentLifeCycleMarkerComponentProcessor": () => (/* binding */ FragmentLifeCycleMarkerComponentProcessor)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./node_modules/render-jsx/dist/es6/common/ref.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ "./node_modules/render-jsx/dist/es6/component/processor.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/render-jsx/dist/es6/dom/util/life-cycle.js");



class FragmentLifeCycleMarkerComponentProcessor extends _component__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor {
    process(provide, post) {
        let marker = undefined;
        provide({
            setLifeCycleMarker: (node) => marker = node
        });
        post(node => {
            if (node.nodeType === node.DOCUMENT_FRAGMENT_NODE && marker) {
                if (marker instanceof _common__WEBPACK_IMPORTED_MODULE_1__.Ref) {
                    (0,_util__WEBPACK_IMPORTED_MODULE_2__.setLifeCycleMarker)(node, marker.$);
                }
                else {
                    (0,_util__WEBPACK_IMPORTED_MODULE_2__.setLifeCycleMarker)(node, marker);
                }
            }
        });
    }
    priority() {
        return _component__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor.PriorityFallback +
            (_component__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor.PriorityMax - _component__WEBPACK_IMPORTED_MODULE_0__.ComponentProcessor.PriorityFallback) / 100;
    }
}
//# sourceMappingURL=fragment-lcmarker.processor.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/component/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/component/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FragmentLifeCycleMarkerComponentProcessor": () => (/* reexport safe */ _fragment_lcmarker_processor__WEBPACK_IMPORTED_MODULE_0__.FragmentLifeCycleMarkerComponentProcessor)
/* harmony export */ });
/* harmony import */ var _fragment_lcmarker_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-lcmarker.processor */ "./node_modules/render-jsx/dist/es6/dom/component/fragment-lcmarker.processor.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/errors/unrecognized-tag.error.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/errors/unrecognized-tag.error.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnrecognizedTagError": () => (/* binding */ UnrecognizedTagError)
/* harmony export */ });
class UnrecognizedTagError extends Error {
    /*istanbul ignore next*/
    constructor(tag) {
        super(`Given tag is not recognized: ${tag}`);
    }
}
//# sourceMappingURL=unrecognized-tag.error.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMRenderer": () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer),
/* harmony export */   "attachLifeCycleHook": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.attachLifeCycleHook),
/* harmony export */   "fragmentLifeCycleInfo": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.fragmentLifeCycleInfo),
/* harmony export */   "getLifeCycleMarker": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.getLifeCycleMarker),
/* harmony export */   "lifeCycleBind": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.lifeCycleBind),
/* harmony export */   "lifeCycleClear": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.lifeCycleClear),
/* harmony export */   "lifeCycleInfo": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.lifeCycleInfo),
/* harmony export */   "setLifeCycleMarker": () => (/* reexport safe */ _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.setLifeCycleMarker),
/* harmony export */   "LiveDOMRenderer": () => (/* reexport safe */ _live_renderer__WEBPACK_IMPORTED_MODULE_2__.LiveDOMRenderer),
/* harmony export */   "ClassPlugin": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.ClassPlugin),
/* harmony export */   "EventHandlerPlugin": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.EventHandlerPlugin),
/* harmony export */   "InputStatePlugin": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.InputStatePlugin),
/* harmony export */   "OptionObjectValuePlugin": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.OptionObjectValuePlugin),
/* harmony export */   "StylePlugin": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.StylePlugin),
/* harmony export */   "domPlugins": () => (/* reexport safe */ _plugins__WEBPACK_IMPORTED_MODULE_3__.domPlugins),
/* harmony export */   "FragmentLifeCycleMarkerComponentProcessor": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_4__.FragmentLifeCycleMarkerComponentProcessor),
/* harmony export */   "CommonDOMRenderer": () => (/* binding */ CommonDOMRenderer)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/render-jsx/dist/es6/common/plugins/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component */ "./node_modules/render-jsx/dist/es6/component/plugins/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component */ "./node_modules/render-jsx/dist/es6/dom/component/fragment-lcmarker.processor.js");
/* harmony import */ var _live_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-renderer */ "./node_modules/render-jsx/dist/es6/dom/live-renderer.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins */ "./node_modules/render-jsx/dist/es6/dom/plugins/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/render-jsx/dist/es6/dom/renderer.js");
/* harmony import */ var _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/life-cycle */ "./node_modules/render-jsx/dist/es6/dom/util/life-cycle.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./node_modules/render-jsx/dist/es6/dom/component/index.js");










class CommonDOMRenderer extends _live_renderer__WEBPACK_IMPORTED_MODULE_2__.LiveDOMRenderer {
    constructor(dom = window) {
        super(dom, ...(0,_component__WEBPACK_IMPORTED_MODULE_5__.componentPlugins)(), () => new _component__WEBPACK_IMPORTED_MODULE_6__.FragmentLifeCycleMarkerComponentProcessor(), ...(0,_common__WEBPACK_IMPORTED_MODULE_7__.commonPlugins)(), ...(0,_plugins__WEBPACK_IMPORTED_MODULE_3__.domPlugins)());
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/live-renderer.js":
/*!***************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/live-renderer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveDOMRenderer": () => (/* binding */ LiveDOMRenderer)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/render-jsx/dist/es6/dom/renderer.js");
/* harmony import */ var _util_life_cycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/life-cycle */ "./node_modules/render-jsx/dist/es6/dom/util/life-cycle.js");


class LiveDOMRenderer extends _renderer__WEBPACK_IMPORTED_MODULE_0__.DOMRenderer {
    hook(node, hook) {
        (0,_util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.attachLifeCycleHook)(hook, node);
    }
    postRender(target) {
        if (target instanceof this.dom.DocumentFragment) {
            return super.postRender(target);
        }
        else {
            return () => {
                if (this.document.contains(target)) {
                    (0,_util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.lifeCycleBind)(target);
                }
                super.postRender(target)();
            };
        }
    }
    plug(...plugins) {
        return super.plug(...plugins);
    }
    clone(...plugins) {
        return new LiveDOMRenderer(this.dom, ...plugins);
    }
    remove(node, temporary) {
        super.remove(node);
        if (!temporary) {
            (0,_util_life_cycle__WEBPACK_IMPORTED_MODULE_1__.lifeCycleClear)(node);
        }
    }
}
//# sourceMappingURL=live-renderer.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/class.plugin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/class.plugin.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassPlugin": () => (/* binding */ ClassPlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");

function isAddClassPlugin(p) {
    return !!p.addClass && typeof p.addClass === 'function';
}
function isToggleClassPlugin(p) {
    return !!p.addClassToggle && typeof p.addClassToggle === 'function';
}
class ClassPlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    plug(renderer) {
        super.plug(renderer);
        if ((0,_renderer__WEBPACK_IMPORTED_MODULE_0__.isRendererWithPlugins)(renderer)) {
            this.addClassPlugins = renderer.plugins.filter(isAddClassPlugin);
            this.toggleClassPlugins = renderer.plugins.filter(isToggleClassPlugin);
        }
    }
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
    setProp(node, prop, target) {
        if (prop === 'class') {
            if (Array.isArray(target)) {
                target.forEach(cl => {
                    let prev = '';
                    const sw = (_cl) => {
                        if (node.classList.contains(prev)) {
                            node.classList.remove(prev);
                        }
                        node.classList.add(prev = _cl);
                    };
                    if (this.addClassPlugins &&
                        this.addClassPlugins.some(p => isAddClassPlugin(p) && p.addClass(node, cl, sw))) {
                        return;
                    }
                    else if (typeof cl === 'string') {
                        node.classList.add(cl);
                    }
                    else {
                        this.setToggleMap(cl, node);
                    }
                });
                return true;
            }
            else if ((target === null || target === void 0 ? void 0 : target.constructor) === Object) {
                this.setToggleMap(target, node);
                return true;
            }
        }
        return false;
    }
    setToggleMap(map, node) {
        Object.entries(map).forEach(([cl, clt]) => {
            if (this.toggleClassPlugins &&
                this.toggleClassPlugins.some(p => isToggleClassPlugin(p) && p.addClassToggle(node, cl, clt, v => {
                    if (v) {
                        node.classList.add(cl);
                    }
                    else {
                        node.classList.remove(cl);
                    }
                }))) {
                return;
            }
            else if (!!clt) {
                node.classList.add(cl);
            }
            else {
                node.classList.remove(cl);
            }
        });
    }
}
//# sourceMappingURL=class.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/event-handler.plugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/event-handler.plugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlerPlugin": () => (/* binding */ EventHandlerPlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");

class EventHandlerPlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
    setProp(node, prop, target) {
        if (prop.startsWith('on') && typeof target === 'function') {
            const event = prop.substr(2).toLowerCase();
            node.addEventListener(event, target);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=event-handler.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlerPlugin": () => (/* reexport safe */ _event_handler_plugin__WEBPACK_IMPORTED_MODULE_0__.EventHandlerPlugin),
/* harmony export */   "OptionObjectValuePlugin": () => (/* reexport safe */ _object_value_plugin__WEBPACK_IMPORTED_MODULE_1__.OptionObjectValuePlugin),
/* harmony export */   "InputStatePlugin": () => (/* reexport safe */ _input_state_plugin__WEBPACK_IMPORTED_MODULE_2__.InputStatePlugin),
/* harmony export */   "ClassPlugin": () => (/* reexport safe */ _class_plugin__WEBPACK_IMPORTED_MODULE_3__.ClassPlugin),
/* harmony export */   "StylePlugin": () => (/* reexport safe */ _style_plugin__WEBPACK_IMPORTED_MODULE_4__.StylePlugin),
/* harmony export */   "domPlugins": () => (/* binding */ domPlugins)
/* harmony export */ });
/* harmony import */ var _class_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.plugin */ "./node_modules/render-jsx/dist/es6/dom/plugins/class.plugin.js");
/* harmony import */ var _event_handler_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-handler.plugin */ "./node_modules/render-jsx/dist/es6/dom/plugins/event-handler.plugin.js");
/* harmony import */ var _input_state_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-state.plugin */ "./node_modules/render-jsx/dist/es6/dom/plugins/input-state.plugin.js");
/* harmony import */ var _object_value_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-value.plugin */ "./node_modules/render-jsx/dist/es6/dom/plugins/object-value.plugin.js");
/* harmony import */ var _style_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.plugin */ "./node_modules/render-jsx/dist/es6/dom/plugins/style.plugin.js");










function domPlugins() {
    return [
        () => new _event_handler_plugin__WEBPACK_IMPORTED_MODULE_0__.EventHandlerPlugin(),
        () => new _object_value_plugin__WEBPACK_IMPORTED_MODULE_1__.OptionObjectValuePlugin(),
        () => new _input_state_plugin__WEBPACK_IMPORTED_MODULE_2__.InputStatePlugin(),
        () => new _class_plugin__WEBPACK_IMPORTED_MODULE_3__.ClassPlugin(),
        () => new _style_plugin__WEBPACK_IMPORTED_MODULE_4__.StylePlugin(),
    ];
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/input-state.plugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/input-state.plugin.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputStatePlugin": () => (/* binding */ InputStatePlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./node_modules/render-jsx/dist/es6/dom/util/input-value.js");


class InputStatePlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
    setProp(node, prop, target) {
        if (prop === '_state'
            && (node.nodeName === 'INPUT'
                || node.nodeName === 'TEXTAREA'
                || node.nodeName === 'SELECT')
            && typeof target === 'function') {
            const renderer = this.renderer();
            renderer.hook(node, {
                bind() {
                    if (node.nodeName === 'INPUT' &&
                        node.type === 'radio' &&
                        node.name) {
                        const i = node;
                        (i.form || renderer.document)
                            .querySelectorAll(`input[name="${i.name}"]`)
                            .forEach(input => {
                            if (input.form === i.form) {
                                input.addEventListener('input', () => target((0,_util__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(i)));
                            }
                        });
                    }
                    else {
                        node.addEventListener('input', () => target((0,_util__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(node)));
                    }
                    target((0,_util__WEBPACK_IMPORTED_MODULE_1__.getInputValue)(node));
                }
            });
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=input-state.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/object-value.plugin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/object-value.plugin.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionObjectValuePlugin": () => (/* binding */ OptionObjectValuePlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./node_modules/render-jsx/dist/es6/dom/util/input-value.js");


class OptionObjectValuePlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
    setProp(node, prop, target) {
        if (prop === '_value' && node.nodeName === 'OPTION') {
            (0,_util__WEBPACK_IMPORTED_MODULE_1__.setOptionObjectValue)(node, target);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=object-value.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/plugins/style.plugin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/plugins/style.plugin.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylePlugin": () => (/* binding */ StylePlugin)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js");

function isSetStylePlugin(p) {
    return !!p.setStyle && typeof p.setStyle === 'function';
}
class StylePlugin extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    plug(renderer) {
        super.plug(renderer);
        if ((0,_renderer__WEBPACK_IMPORTED_MODULE_0__.isRendererWithPlugins)(renderer)) {
            this.stylePlugins = renderer.plugins.filter(isSetStylePlugin);
        }
    }
    priority() {
        return _renderer__WEBPACK_IMPORTED_MODULE_0__.Plugin.PriorityFallback;
    }
    setProp(node, prop, target) {
        if (prop === 'style' && (target === null || target === void 0 ? void 0 : target.constructor) === Object) {
            Object.entries(target).forEach(([style, value]) => {
                if (this.stylePlugins &&
                    this.stylePlugins.some(p => isSetStylePlugin(p) &&
                        p.setStyle(node, style, value, s => this.setStyle(node, style, s)))) {
                    return;
                }
                else {
                    this.setStyle(node, style, value);
                }
            });
            return true;
        }
        return false;
    }
    format(key, value) {
        const split = key.split('.');
        return {
            key: split[0],
            val: value,
            unit: split[1] || '',
        };
    }
    setStyle(node, style, value) {
        if (style === 'transform' && typeof value === 'object') {
            node.style.transform = Object.entries(value)
                .map(e => this.format(...e))
                .map(({ key, val, unit }) => `${key}(${val}${unit})`).join(' ');
        }
        else if (style === 'transition' && typeof value === 'object') {
            node.style.transition = Object.entries(value)
                .map(e => this.format(...e))
                .map(({ key, val, unit }) => `${key} ${val}${unit}`).join(', ');
        }
        else {
            const { key, val, unit } = this.format(style, `${value}`);
            node.style[key] = `${val}${unit}`;
        }
    }
}
//# sourceMappingURL=style.plugin.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/renderer.js":
/*!**********************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/renderer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMRenderer": () => (/* binding */ DOMRenderer)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./node_modules/render-jsx/dist/es6/renderer/renderer.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer */ "./node_modules/render-jsx/dist/es6/renderer/plugin/post-render.plugin.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/render-jsx/dist/es6/dom/errors/unrecognized-tag.error.js");


class DOMRenderer extends _renderer__WEBPACK_IMPORTED_MODULE_0__.Renderer {
    constructor(dom = window, ...plugins) {
        super(...(typeof dom === 'function' ? [dom, ...plugins] : plugins));
        if (!dom || typeof dom === 'function') {
            this.dom = window;
        }
        else {
            this.dom = dom;
        }
    }
    get document() { return this.dom.document; }
    fallbackAppend(target, host) {
        if (target instanceof this.dom.Node) {
            host.appendChild(target);
        }
        else if (Array.isArray(target)) {
            target.forEach(child => this.append(child, host));
        }
        else {
            host.appendChild(this.document.createTextNode(`${target}`));
        }
    }
    fallbackSetProp(node, prop, target) {
        if (node instanceof this.dom.HTMLElement) {
            if (typeof target === 'boolean') {
                if (target) {
                    node.setAttribute(prop, '');
                }
                else {
                    node.removeAttribute(prop);
                }
            }
            else {
                node.setAttribute(prop, `${target}`);
            }
        }
    }
    fallbackSetContent(node, target) {
        if (node instanceof this.dom.HTMLElement) {
            node.innerHTML = `${target}`;
        }
        else {
            node.textContent = `${target}`;
        }
    }
    fallbackFragment() {
        return this.document.createDocumentFragment();
    }
    fallbackLeaf() {
        return this.document.createTextNode('');
    }
    fallbackCreate(tag, props) {
        if (!(tag instanceof this.dom.Node || typeof tag === 'string')) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_1__.UnrecognizedTagError(tag);
        }
        if (tag instanceof this.dom.Node) {
            return tag;
        }
        else if (props && props.xmlns) {
            return this.document.createElementNS(`${props.xmlns}`, tag);
        }
        else {
            return this.document.createElement(tag);
        }
    }
    renderOn(target, host) {
        host.appendChild(target);
    }
    renderAfter(target, ref) {
        if (ref.parentNode) {
            ref.parentNode.insertBefore(target, ref.nextSibling);
        }
    }
    renderBefore(target, ref) {
        if (ref.parentNode) {
            ref.parentNode.insertBefore(target, ref);
        }
    }
    postRender(target) {
        const post = this.plugins.filter(_renderer__WEBPACK_IMPORTED_MODULE_2__.isPostRenderPlugin);
        if (target instanceof this.dom.DocumentFragment) {
            const children = Array.from(target.childNodes);
            return () => children.forEach(child => { this.postRender(child)(); });
        }
        else {
            return () => post.forEach(p => p.postRender(target));
        }
    }
    remove(node) {
        var _a;
        (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(node);
    }
    clone(...plugins) {
        return new DOMRenderer(this.dom, ...plugins);
    }
}
//# sourceMappingURL=renderer.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/util/input-value.js":
/*!******************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/util/input-value.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOptionObjectValue": () => (/* binding */ setOptionObjectValue),
/* harmony export */   "getOptionObjectValue": () => (/* binding */ getOptionObjectValue),
/* harmony export */   "getInputValue": () => (/* binding */ getInputValue),
/* harmony export */   "setInputValue": () => (/* binding */ setInputValue)
/* harmony export */ });
function setOptionObjectValue($, value) {
    $._value = value;
}
function getOptionObjectValue($) {
    return $._value;
}
function getInputValue($) {
    if ($.nodeName === 'INPUT') {
        if ($.type === 'number') {
            return parseFloat($.value);
        }
        else if ($.type === 'checkbox' || $.type === 'radio') {
            return $.checked;
        }
        else {
            return $.value;
        }
    }
    else if ($.nodeName === 'SELECT') {
        const s = $;
        const selected = Array.from(s.selectedOptions).map(option => getOptionObjectValue(option)
            || option.value
            || option.text);
        return s.multiple ? selected : selected[0];
    }
    else {
        return $.value;
    }
}
function setInputValue($, value) {
    if ($.nodeName === 'INPUT') {
        if ($.type === 'checkbox' || $.type === 'radio') {
            $.checked = !!value;
        }
        else {
            $.value = value;
        }
    }
    else if ($.nodeName === 'SELECT') {
        const s = $;
        const selected = Array.isArray(value) ? value : [value];
        Array.from(s.options).forEach(option => {
            option.selected = ((getOptionObjectValue(option) && selected.includes(getOptionObjectValue(option)))
                || (option.value && selected.includes(option.value))
                || (!option.value && selected.includes(option.text)));
        });
    }
    else {
        $.value = value;
    }
}
//# sourceMappingURL=input-value.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/dom/util/life-cycle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/dom/util/life-cycle.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lifeCycleInfo": () => (/* binding */ lifeCycleInfo),
/* harmony export */   "fragmentLifeCycleInfo": () => (/* binding */ fragmentLifeCycleInfo),
/* harmony export */   "setLifeCycleMarker": () => (/* binding */ setLifeCycleMarker),
/* harmony export */   "getLifeCycleMarker": () => (/* binding */ getLifeCycleMarker),
/* harmony export */   "lifeCycleClear": () => (/* binding */ lifeCycleClear),
/* harmony export */   "lifeCycleBind": () => (/* binding */ lifeCycleBind),
/* harmony export */   "attachLifeCycleHook": () => (/* binding */ attachLifeCycleHook)
/* harmony export */ });
function lifeCycleInfo(node, createIfNonExistent = false) {
    const _node = node;
    if (node.nodeType === node.DOCUMENT_FRAGMENT_NODE) {
        return fragmentLifeCycleInfo(node, createIfNonExistent);
    }
    else {
        if (_node.lifecycle) {
            return _node.lifecycle;
        }
        else if (createIfNonExistent) {
            _node.lifecycle = { bound: false };
            return _node.lifecycle;
        }
    }
}
function fragmentLifeCycleInfo(fragment, createIfNonExistent) {
    var _a;
    let marker = getLifeCycleMarker(fragment);
    /*istanbul ignore if*/
    if (marker) {
        return lifeCycleInfo(marker, createIfNonExistent);
    }
    else if (createIfNonExistent) {
        marker = (_a = fragment.ownerDocument) === null || _a === void 0 ? void 0 : _a.createTextNode('');
        setLifeCycleMarker(fragment, marker);
        return lifeCycleInfo(marker, true);
    }
}
function setLifeCycleMarker(fragment, marker) {
    fragment.lifecycleMarker = marker;
    if (!fragment.contains(marker)) {
        fragment.appendChild(marker);
    }
}
function getLifeCycleMarker(fragment) {
    return fragment.lifecycleMarker;
}
function lifeCycleClear(node) {
    const lifecycle = lifeCycleInfo(node);
    if (lifecycle) {
        /*istanbul ignore next*/
        if (lifecycle.cleared) {
            return;
        }
        lifecycle.cleared = true;
        if (lifecycle.clears) {
            for (let i = 0, clear = lifecycle.clears[i]; i < lifecycle.clears.length; clear = lifecycle.clears[++i]) {
                clear();
            }
            lifecycle.clears = undefined;
        }
    }
    const children = node.childNodes;
    for (let i = 0, child = children.item(i); i < children.length; child = children.item(++i)) {
        lifeCycleClear(child);
    }
}
function lifeCycleBind(node) {
    const lifecycle = lifeCycleInfo(node);
    if (lifecycle) {
        /*istanbul ignore next*/
        if (lifecycle.bound) {
            return;
        }
        lifecycle.bound = true;
        if (lifecycle.binds) {
            for (let i = 0, bind = lifecycle.binds[i]; i < lifecycle.binds.length; bind = lifecycle.binds[++i]) {
                bind();
            }
        }
        lifecycle.binds = undefined;
    }
    const children = node.childNodes;
    for (let i = 0, child = children.item(i); i < children.length; child = children.item(++i)) {
        lifeCycleBind(child);
    }
}
function attachLifeCycleHook(hook, node) {
    const lifecycle = lifeCycleInfo(node, true);
    if (hook.bind) {
        (lifecycle.binds || (lifecycle.binds = [])).push(hook.bind);
    }
    if (hook.clear) {
        (lifecycle.clears || (lifecycle.clears = [])).push(hook.clear);
    }
}
//# sourceMappingURL=life-cycle.js.map

/***/ }),

/***/ "./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js":
/*!********************************************************************!*\
  !*** ./node_modules/render-jsx/dist/es6/renderer/plugin/plugin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plugin": () => (/* binding */ Plugin),
/* harmony export */   "isRendererWithPlugins": () => (/* binding */ isRendererWithPlugins)
/* harmony export */ });
/* harmony import */ var _common_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/ref */ "./node_modules/render-jsx/dist/es6/common/ref.js");

class Plugin {
    constructor() {
        this._renderer = (0,_common_ref__WEBPACK_IMPORTED_MODULE_0__.ref)();
    }
    plug(renderer) {
        this._renderer.resolve(renderer);
    }
    renderer() {
        return this._renderer.$;
    }
}
Plugin.PriorityMax = 1;
Plugin.PriorityFallback = 0;
function isRendererWithPlugins(renderer) {
    return !!renderer.plugins && Array.isArray(renderer.plugins);
}
//# sourceMappingURL=plugin.js.map

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var dom_1 = __webpack_require__(/*! ./dom */ "./app/dom.ts");
var Nav_1 = __webpack_require__(/*! ./blocks/Nav */ "./app/blocks/Nav/index.tsx");
__webpack_require__(/*! ./styles/styles.css */ "./app/styles/styles.css");
function decorateTemplate() {
    var main = document.querySelector('main');
    if (main) {
        dom_1.loadTemplate();
        //Decorate nav
        var headerBlock = document.querySelector('header');
        if (headerBlock && headerBlock.parentElement) {
            Nav_1.decorate(headerBlock, headerBlock.parentElement);
        }
        var footerBlock = document.querySelector('footer');
        if (footerBlock) {
            dom_1.applyElementModifier(footerBlock, {
                classes: ['text-center', 'pt-32', 'footer-text-color'],
                childModifiers: [
                    {
                        selector: 'h2',
                        modifier: { classes: ['text-2xl'] }
                    },
                    {
                        selector: 'h3',
                        modifier: { classes: ['text-2xl', 'font-bold', 'py-10', 'max-w-sm', 'mx-auto'] }
                    },
                    {
                        selector: 'ul:first-of-type',
                        modifier: { classes: ['flex', 'gap-10', 'mb-20', 'justify-center', 'text-lg', 'font-light'] }
                    },
                    {
                        selector: 'ul:first-of-type li:first-of-type',
                        validation: function (element) {
                            var regex = /^\S+@\S+\.\S+$/;
                            var email = element.textContent;
                            if (email) {
                                var match = email.match(regex);
                                if (match)
                                    return match.length > 0;
                            }
                            return false;
                        }
                    },
                    {
                        selector: 'hr',
                        modifier: { classes: ['border-b', 'border-gray-800'] }
                    },
                    {
                        selector: 'ul:nth-of-type(2)',
                        modifier: { classes: ['text-sm', 'uppercase', 'p-10', 'flex', 'gap-10'] }
                    }
                ]
            });
        }
    }
}
if (document.readyState == 'loading') {
    window.addEventListener('DOMContentLoaded', function () {
        decorateTemplate();
    });
}
else {
    decorateTemplate();
}


/***/ }),

/***/ "./app/blocks/Nav/index.tsx":
/*!**********************************!*\
  !*** ./app/blocks/Nav/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decorate = void 0;
var dom_1 = __webpack_require__(/*! render-jsx/dom */ "./node_modules/render-jsx/dist/es6/dom/index.js");
var dom_2 = __webpack_require__(/*! ../../dom */ "./app/dom.ts");
function createNav(renderer, title, leftMenu, rightMenu) {
    return (renderer.create("header", { class: "flex" },
        renderer.create("nav", { class: "w-full md:mx-auto fixed py-7 header-text-color header-background-color z-40" },
            renderer.create("div", { class: "lg:container md:mx-auto" },
                renderer.create("div", { class: "text-center flex column justify-left lg:justify-center gap-16 items-center ml-6 lg:ml-0" },
                    renderer.create("div", { class: " hidden lg:block" }, leftMenu === null || leftMenu === void 0 ? void 0 : leftMenu.map(function (link) {
                        return dom_2.applyElementModifier(link, { classes: ['text-sm', 'uppercase', 'p-5'] });
                    })),
                    renderer.create("h1", { class: "text-2xl" }, title),
                    renderer.create("div", { class: "hidden lg:block" }, rightMenu === null || rightMenu === void 0 ? void 0 : rightMenu.map(function (link) {
                        return dom_2.applyElementModifier(link, { classes: ['text-sm', 'uppercase', 'p-5'] });
                    }))))),
        renderer.create("button", { class: "inline-block z-50 ml-auto mr-5 lg:hidden lg:hidden py-7" },
            renderer.create("img", { src: "/icons/hamburger.svg" }))));
}
function decorate(block, parent) {
    var _a;
    var leftMenu = block.querySelector('div:first-of-type p');
    var rightMenu = block.querySelector('div:nth-of-type(3) p');
    var title = (_a = block.querySelector('div:nth-of-type(2) p')) === null || _a === void 0 ? void 0 : _a.textContent;
    var renderer = new dom_1.CommonDOMRenderer();
    if (title && leftMenu && rightMenu) {
        var navTemplate = createNav(renderer, title, Array.from(leftMenu.children), Array.from(rightMenu.children));
        renderer.render(navTemplate).before(block);
        block.remove();
    }
}
exports.decorate = decorate;


/***/ }),

/***/ "./app/dom.ts":
/*!********************!*\
  !*** ./app/dom.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapSections = exports.loadCSS = exports.loadScript = exports.getElementAttribute = exports.getElementContent = exports.wrap = exports.wrapElements = exports.wrapNodes = exports.addElementAttributes = exports.addElementClasses = exports.applyChildElementModifier = exports.applyElementModifier = exports.createElement = exports.loadTemplate = void 0;
function loadTemplate() {
    var templateElement = document.querySelector('.template');
    if (templateElement) {
        var template = templateElement === null || templateElement === void 0 ? void 0 : templateElement.textContent;
        console.log("template " + template);
        loadScript("/build/" + template + "-bundle.js");
        loadCSS("/build/" + template + ".css");
        templateElement.remove();
    }
}
exports.loadTemplate = loadTemplate;
function createElement(name, attrs) {
    var e_1, _a;
    console.log('create');
    var el = document.createElement(name);
    if (typeof attrs === 'object') {
        try {
            for (var _b = __values(Object.entries(attrs)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                el.setAttribute(key, value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return el;
}
exports.createElement = createElement;
function applyElementModifier(element, modifier) {
    var e_2, _a;
    var classes = modifier.classes, attributes = modifier.attributes, childModifiers = modifier.childModifiers;
    if (classes) {
        addElementClasses(element, classes);
    }
    if (attributes) {
        addElementAttributes(element, attributes);
    }
    if (childModifiers) {
        try {
            for (var childModifiers_1 = __values(childModifiers), childModifiers_1_1 = childModifiers_1.next(); !childModifiers_1_1.done; childModifiers_1_1 = childModifiers_1.next()) {
                var childModifier = childModifiers_1_1.value;
                applyChildElementModifier(element, childModifier);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (childModifiers_1_1 && !childModifiers_1_1.done && (_a = childModifiers_1.return)) _a.call(childModifiers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return element;
}
exports.applyElementModifier = applyElementModifier;
function applyChildElementModifier(element, childModifier) {
    var e_3, _a;
    var selector = childModifier.selector, modifier = childModifier.modifier, validation = childModifier.validation;
    var childElements = element.querySelectorAll(selector);
    try {
        for (var _b = __values(Array.from(childElements)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var childElement = _c.value;
            if (childElement) {
                if (modifier)
                    applyElementModifier(childElement, modifier);
                if (validation) {
                    if (!validation(childElement)) {
                        childElement.remove();
                    }
                }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return element;
}
exports.applyChildElementModifier = applyChildElementModifier;
function addElementClasses(element, classes) {
    var e_4, _a;
    try {
        for (var classes_1 = __values(classes), classes_1_1 = classes_1.next(); !classes_1_1.done; classes_1_1 = classes_1.next()) {
            var className = classes_1_1.value;
            element.classList.add(className);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (classes_1_1 && !classes_1_1.done && (_a = classes_1.return)) _a.call(classes_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
exports.addElementClasses = addElementClasses;
function addElementAttributes(element, attributes) {
    var e_5, _a;
    try {
        for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            element.setAttribute(key, attributes[key]);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
}
exports.addElementAttributes = addElementAttributes;
function wrapNodes(newParent, nodes) {
    nodes.forEach(function (el) {
        var _a, _b;
        newParent.appendChild(el.cloneNode(true));
        if (newParent.children.length !== 1) {
            (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(el);
        }
        else {
            (_b = el.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(newParent, el);
        }
    });
}
exports.wrapNodes = wrapNodes;
function wrapElements(newParent, elements) {
    elements.forEach(function (el) {
        var _a, _b;
        newParent.appendChild(el.cloneNode(true));
        if (newParent.children.length !== 1) {
            (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(el);
        }
        else {
            (_b = el.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(newParent, el);
        }
    });
}
exports.wrapElements = wrapElements;
function wrap(classname, selectors, root) {
    var e_6, _a;
    if (!Array.isArray(selectors)) {
        selectors = [selectors];
    }
    var div = createElement('div', { class: classname });
    try {
        for (var selectors_1 = __values(selectors), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
            var selector = selectors_1_1.value;
            var elements = (root || document).querySelectorAll(selector);
            wrapNodes(div, elements);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return)) _a.call(selectors_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
exports.wrap = wrap;
function getElementContent(element, selector) {
    var _a;
    return (_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML;
}
exports.getElementContent = getElementContent;
function getElementAttribute(element, selector, attribute) {
    var _a, _b;
    return (_b = (_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.attributes.getNamedItem(attribute)) === null || _b === void 0 ? void 0 : _b.value;
}
exports.getElementAttribute = getElementAttribute;
function loadScript(url, type) {
    if (type === void 0) { type = 'text/javascript'; }
    return new Promise(function (resolve, reject) {
        var head = document.querySelector('head');
        if (head) {
            var script = createElement('script', { src: url });
            script.async = true;
            if (type) {
                script.type = type;
            }
            head.append(script);
            script.onload = function () {
                resolve();
            };
            script.onerror = function () {
                reject();
            };
        }
    });
}
exports.loadScript = loadScript;
function loadCSS(href) {
    return new Promise(function (resolve, reject) {
        if (!document.querySelector("head > link[href=\"" + href + "\"]")) {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', href);
            link.onload = function () {
                resolve();
            };
            link.onerror = function () {
                reject();
            };
            document.head.appendChild(link);
        }
    });
}
exports.loadCSS = loadCSS;
function wrapSections(selector) {
    document.querySelectorAll(selector).forEach(function (element) {
        if (!element.id) {
            addElementClasses(element, ['container', 'md:mx-auto', 'section', 'p-10']);
        }
    });
}
exports.wrapSections = wrapSections;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./app/app.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-bundle.js.map