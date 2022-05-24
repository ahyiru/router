(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("router", ["react"], factory);
	else if(typeof exports === 'object')
		exports["router"] = factory(require("react"));
	else
		root["router"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes before {\n  0% {\n    width: 0.6rem;\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n  35% {\n    width: 3rem;\n    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;\n  }\n  70% {\n    width: 0.6rem;\n    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;\n  }\n  100% {\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n}\n@keyframes after {\n  0% {\n    height: 0.6rem;\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n  35% {\n    height: 3rem;\n    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;\n  }\n  70% {\n    height: 0.6rem;\n    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;\n  }\n  100% {\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n}\n.spinner {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  pointer-events: auto;\n  min-height: 100px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: hsla(0, 0%, 72%, 0.24);\n}\n.spinner.global {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner .spinning {\n  width: 3rem;\n  height: 3rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(165deg);\n  margin: 0;\n}\n.spinner .spinning::before,\n.spinner .spinning::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 0.3rem;\n  transform: translate(-50%, -50%);\n}\n.spinner .spinning::before {\n  animation: before 1.5s infinite;\n}\n.spinner .spinning::after {\n  animation: after 1.5s infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 609:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 601:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 62:
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 793:
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 173:
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 892:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 36:
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 464:
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Link": function() { return /* reexport */ router_link; },
  "useRoute": function() { return /* reexport */ router_useRoute; },
  "useRouter": function() { return /* reexport */ router; }
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js


const isArray = value => utils_getType(value) === 'array';

/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../huxy/utils/isObject.js


const isObject = value => utils_getType(value) === 'object';

/* harmony default export */ var utils_isObject = (isObject);
;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';

/* harmony default export */ var utils_isReactEle = (isReactEle);
;// CONCATENATED MODULE: ../huxy/utils/isVueEle.js
const isVueEle = value => value == null ? void 0 : value.__v_isVNode;

/* harmony default export */ var utils_isVueEle = (isVueEle);
;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ var utils_hasProp = (hasProp);
;// CONCATENATED MODULE: ../huxy/utils/clone.js






const clone = obj => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }

  const newobj = utils_isArray(obj) ? [] : {};

  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i]; // newobj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;

      newobj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newobj, {
        [i]: obj[i]
      });
    }
  }

  return newobj;
};

/* harmony default export */ var utils_clone = (clone);
;// CONCATENATED MODULE: ../huxy/utils/isFunction.js


const isFunction = value => utils_getType(value) === 'function';

/* harmony default export */ var utils_isFunction = (isFunction);
;// CONCATENATED MODULE: ../huxy/utils/isAsync.js




const isAsync = value => utils_getType(value) === 'promise' || utils_isObject(value) && utils_isFunction(value.then);

/* harmony default export */ var utils_isAsync = (isAsync);
;// CONCATENATED MODULE: ../huxy/utils/cancelablePromise.js


const cancelablePromise = function (promise) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120000;
  let msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '请求超时！';

  if (!utils_isAsync(promise)) {
    return {};
  }

  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    // let errMsg=false;
    cancelFn = function () {
      let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canceled';
      // errMsg=msg;
      clearTimeout(timer);
      resolve({
        canceled: true,
        errMsg: msg
      });
    };

    if (delay) {
      delay = typeof delay !== 'number' ? 120000 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }

    promise.then(result => {
      clearTimeout(timer);
      resolve({
        result,
        errMsg: false
      });
    }).catch(error => {
      clearTimeout(timer);
      reject(error);
    });
  });
  return {
    promiseFn,
    cancelFn
  };
};

/* harmony default export */ var utils_cancelablePromise = (cancelablePromise);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/str2React/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const str2React = (str, props) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread({
  dangerouslySetInnerHTML: {
    __html: str
  }
}, props));

/* harmony default export */ var components_str2React = (str2React);
;// CONCATENATED MODULE: ../huxy/components/loadError/index.jsx




const LoadError = props => {
  const {
    error = {},
    info = ''
  } = props || {};
  const {
    message,
    stack,
    errMsg
  } = error;
  let str = errMsg || stack || error.toString();
  str = `${str}\n${info}`.replace(/\r|\n|\r\n/g, '<br/>');
  str = str.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  str = str.replace(/\s/g, '&nbsp;');
  const errStack = message == null ? void 0 : message.slice(0, 120).split('. ').slice(0, 2).join('. ');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      padding: '15px 20px',
      backgroundColor: '#fff',
      wordWrap: 'break-word'
    },
    children: [components_str2React(str, {
      style: {
        color: 'red'
      }
    }), errStack && /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      style: {
        display: 'inline-block',
        padding: '15px',
        color: '#00b4cf'
      },
      href: `https://stackoverflow.com/search?q=${errStack}`,
      target: "_blank",
      children: " --> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"
    })]
  });
};

/* harmony default export */ var loadError = (LoadError);
;// CONCATENATED MODULE: ../huxy/router/src/formatMenu.js



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function formatMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function formatMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? formatMenu_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : formatMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // import traverItem from '@huxy/utils/traverItem';
// import clone from '@huxy/utils/clone';

const patchPath = function (menu, id, childKey, idKey) {
  let redirectPaths = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  const selected = data => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      const path = item[idKey].split('?')[0];
      const reg = new RegExp('^' + path.replace(/:[^/]+/g, '[^/]+') + '$');

      if (reg.test(id)) {
        return item;
      }

      if (utils_isArray(item[childKey])) {
        const childItem = selected(item[childKey]);

        if (childItem) {
          return childItem;
        }
      }
    }
  };

  const item = selected(menu);

  if (!item) {
    // const notFound=browserRouter?'/404':'#/404';
    // return notFound;
    return '/404';
  }

  const {
    redirect
  } = item;

  if (redirect) {
    if (redirectPaths.includes(redirect)) {
      return redirectPaths;
    } // linkEmitter.emit(eventReplace,{path:redirect});
    // history.replaceState({route:name},null,redirect);


    redirectPaths.push(redirect);
    return patchPath(menu, redirect.split('?')[0], childKey, idKey, redirectPaths); // return redirect;
  } // return id;


  return redirectPaths[redirectPaths.length - 1];
};

const getCurrent = (menu, id, inputParams, childKey, idKey) => {
  if (!utils_isArray(menu)) {
    return null;
  }

  const getParams = cid => {
    const itemArr = cid.split('/');
    const idArr = id.split('/');
    const params = {};
    itemArr.map((v, k) => v.indexOf(':') === 0 && (params[v.slice(1)] = idArr[k]));
    return params;
  };

  const getChildrenMenu = (cdata, cid) => {
    const pItem = [];
    const pid = cid.split('/:')[0];

    for (let i = 0, l = cdata.length; i < l; i++) {
      const item = cdata[i];

      if (item[idKey] === pid) {
        item.active = true;
        const {
          name,
          title,
          icon,
          params
        } = item;
        pItem.push({
          name,
          title,
          icon,
          params,
          [idKey]: pid
        });
      } else if (cid.indexOf(`${item[idKey]}/`) === 0) {
        item.active = true;
        const params = getParams(item[idKey]);
        const paramsId = Object.keys(params).map(v => params[v]).join('/');
        const {
          name,
          title,
          icon
        } = item;
        const path = paramsId ? `${pid}/${paramsId}` : item[idKey];
        pItem.push({
          name,
          title,
          icon,
          [idKey]: path,
          params: formatMenu_objectSpread(formatMenu_objectSpread({}, item.params), params)
        });
      } else if (item[idKey] === cid) {
        item.active = true;
        const params = getParams(item[idKey]);

        const {
          [childKey]: children
        } = item,
              restItem = _objectWithoutProperties(item, [childKey].map(_toPropertyKey));

        pItem.push(formatMenu_objectSpread(formatMenu_objectSpread({}, restItem), {}, {
          [idKey]: id,
          params: formatMenu_objectSpread(formatMenu_objectSpread(formatMenu_objectSpread({}, restItem.params), inputParams), params)
        }));
      }
    }

    return pItem;
  };

  const activeParentMenu = (cdata, cid) => {
    for (let i = 0, l = cdata.length; i < l; i++) {
      const item = cdata[i];

      if (cid.indexOf(`${item[idKey]}/`) === 0) {
        item.active = true;
        return;
      }
    }
  };

  const selected = data => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      const cid = (item[idKey] || '').split('?')[0];

      if (cid === id) {
        if (item.hideMenu) {
          activeParentMenu(data, item.parentPath || cid);
        }

        item.active = true;

        const {
          [childKey]: children
        } = item,
              restItem = _objectWithoutProperties(item, [childKey].map(_toPropertyKey));

        return [formatMenu_objectSpread(formatMenu_objectSpread({}, restItem), {}, {
          params: formatMenu_objectSpread(formatMenu_objectSpread({}, restItem.params), inputParams)
        })];
      }

      const reg = new RegExp('^' + cid.replace(/:[^/]+/g, '[^/]+') + '$');

      if (reg.test(id)) {
        return getChildrenMenu(data, cid);
      }

      if (utils_isArray(item[childKey])) {
        const childItem = selected(item[childKey]);

        if (childItem) {
          item.active = true;
          item.open = true;

          const {
            [childKey]: children
          } = item,
                restItem = _objectWithoutProperties(item, [childKey].map(_toPropertyKey));

          return [restItem, ...childItem];
        }
      }
    }
  };

  const current = selected(menu) || [];
  return {
    result: menu,
    current
  };
};

const filterMenu = (menu, childKey, idKey) => {
  return menu.filter(v => {
    if (v.hideMenu || v[idKey].indexOf('/:') > -1) {
      return false;
    }

    if (utils_isArray(v[childKey])) {
      v[childKey] = filterMenu(v[childKey], childKey, idKey);
    }

    return true;
  });
};
/* const resetMenu=menu=>traverItem(item=>{
  item.open=undefined;
  item.active=undefined;
  return item;
})(menu); */


const formatMenu = function (router, inputPath, inputParams) {
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'path';
  const redirect = patchPath(router, inputPath, childKey, idKey);

  if (redirect) {
    return {
      redirect
    };
  }

  const {
    result,
    current
  } = getCurrent(router, inputPath, inputParams, childKey, idKey);
  const menu = filterMenu(result, childKey, idKey);
  return {
    current,
    menu
  };
};

/* harmony default export */ var src_formatMenu = (formatMenu);
;// CONCATENATED MODULE: ../huxy/utils/emitter.js
const emitter = () => {
  const hub = {};

  const on = (name, cb) => {
    var _hub$name;

    hub[name] = (_hub$name = hub[name]) != null ? _hub$name : [];

    if (hub[name].indexOf(cb) === -1) {
      hub[name].push(cb);
    }
  };

  const emit = (name, data) => {
    if (hub[name]) {
      hub[name].map(cb => cb(data));
    }
  };

  const off = function (name) {
    let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (hub[name]) {
      if (typeof cb !== 'function') {
        return hub[name] = [];
      }

      const index = hub[name].indexOf(cb);

      if (index > -1) {
        hub[name].splice(index, 1);
      }
    }
  };

  return {
    on,
    emit,
    off
  };
};

/* harmony default export */ var utils_emitter = (emitter);
;// CONCATENATED MODULE: ../huxy/router/src/configs.js


const linkEmitter = utils_emitter();
const eventBus = utils_emitter();
const eventPushName = 'push-emitter';
const eventReplaceName = 'replace-emitter';
const useRouteName = 'useRoute-emitter';
const suspenseConfig = {
  delay: 8000,
  timeoutMsg: '请求超时！',
  cancelMsg: '请求已取消！'
};
const fakeHistory = {
  getState: () => history.state,
  go: n => history.go(n),
  forward: () => history.forward(),
  back: () => history.back()
};
;// CONCATENATED MODULE: ../huxy/utils/createStore.js




const createStore = () => {
  const {
    on,
    emit,
    off
  } = utils_emitter();
  const store = {};

  const getState = key => utils_clone(store[key]);

  const setState = state => {
    if (typeof state === 'function') {
      state = state(utils_clone(store));
    }

    if (!utils_isObject(state)) {
      throw TypeError('必须传入object对象！');
    }

    const newState = utils_clone(state);
    Object.keys(newState).map(key => {
      emit(key, newState[key]);
      store[key] = newState[key];
    });
    return off;
  };

  const subscribe = (key, cb) => {
    on(key, cb);
    /* const value=getState(key);
    if(value!==undefined){
      cb(value);
    } */

    return off;
  };

  const clean = name => {
    if (typeof name === 'string') {
      store[name] = undefined;
    } else if (Array.isArray(name)) {
      name.map(n => store[n] = undefined);
    } else {
      Object.keys(store).map(key => store[key] = undefined);
    }
  };

  return {
    getState,
    setState,
    subscribe,
    clean
  };
};

/* harmony default export */ var utils_createStore = (createStore);
;// CONCATENATED MODULE: ../huxy/use/useStore/createContainer.jsx


const createContainer = store => (name, initState) => {
  var _store$getState;

  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)((_store$getState = store == null ? void 0 : store.getState(name)) != null ? _store$getState : initState);
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(result => store == null ? void 0 : store.setState({
    [name]: typeof result === 'function' ? result(store == null ? void 0 : store.getState(name)) : result
  }), []);
  const subscribe = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(callback => store == null ? void 0 : store.subscribe(name, callback), []);
  const clean = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : name;
    return store == null ? void 0 : store.clean(name);
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    store == null ? void 0 : store.subscribe(name, result => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};

/* harmony default export */ var useStore_createContainer = (createContainer);
;// CONCATENATED MODULE: ../huxy/use/useStore/index.jsx


const store = utils_createStore();
const useStore = useStore_createContainer(store);
/* harmony default export */ var use_useStore = ((/* unused pure expression or super */ null && (useStore)));
;// CONCATENATED MODULE: ../huxy/utils/params2str.js


const params2str = params => {
  if (!utils_isObject(params)) {
    return ''; // throw TypeError('参数必须为object！');
  }

  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? '&' : '?';
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join('');
};

/* harmony default export */ var utils_params2str = (params2str);
;// CONCATENATED MODULE: ../huxy/utils/getParams.js
const getParams = function () {
  let fullPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const [path, query] = fullPath.split('?');

  if (query) {
    const params = {};
    const paramsArr = query.split('&');
    paramsArr.map(param => {
      const [key, value] = param.split('=');
      params[key] = value;
    });
    return {
      path,
      params
    };
  }

  return {
    path
  };
};

/* harmony default export */ var utils_getParams = (getParams);
;// CONCATENATED MODULE: ../huxy/utils/fixRoute.js
const fixRoute = path => path ? path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path : '';
/* harmony default export */ var utils_fixRoute = (fixRoute);
;// CONCATENATED MODULE: ../huxy/router/src/fixPath.js

const fixPath = (path, browser) => {
  const defaultPath = ['#/', '/'];
  const initPath = defaultPath[!!browser - 0];

  if (!path || defaultPath.includes(path)) {
    return initPath;
  }

  const newPath = path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  return browser || newPath.indexOf('#/') > -1 ? newPath : `#${newPath}`;
};
const fixFullpath = function (base, path, browser) {
  let exact = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const fpath = fixPath(path, browser);

  if (exact) {
    return fpath;
  }

  if (browser) {
    return base && fpath === '/' ? base : `${base}${fpath}`;
  }

  return base ? `${base}/${fpath}` : fpath;
};
const resetPath = (menu, browserRouter, childKey, idKey, basepath, exact) => {
  if (!utils_isArray(menu)) {
    return menu;
  }

  const traver = function (data) {
    let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return data.filter(item => !item.denied).map(v => {
      if (!exact && !v.exact) {
        if (!v[idKey] || v[idKey] === 'javascript:;') {
          v[idKey] = '';
        }

        const fixedPath = v[idKey].charAt(0) === '/' && prefix.charAt(prefix.length - 1) === '/' ? v[idKey].slice(1) : v[idKey].charAt(0) !== '/' && prefix.charAt(prefix.length - 1) !== '/' ? `/${v[idKey]}` : v[idKey];
        v[idKey] = prefix ? prefix + fixedPath : fixFullpath(basepath, fixedPath, browserRouter);
      }

      if (v.redirect) {
        v.redirect = fixFullpath(basepath, v.redirect, browserRouter);
      }

      if (utils_isArray(v[childKey])) {
        v[childKey] = traver(v[childKey], v[idKey]);

        if (!v.redirect && v[childKey].length) {
          v.redirect = v[childKey][0][idKey];
        }
      }

      return v;
    });
  };

  return traver(menu);
};
;// CONCATENATED MODULE: ../huxy/router/src/utils.js


function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const resetScroll = () => {
  if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0;
  } else if (document.body.scrollTop) {
    document.body.scrollTop = 0;
  }
};
const setTitle = (current, globalTitle) => {
  for (let i = current.length - 1, item; item = current[i--];) {
    const {
      title,
      name
    } = item;

    if (typeof title === 'string' && title.length) {
      return document.title = title;
    }

    if ((title == null || title === true) && name) {
      return document.title = globalTitle ? `${name}-${globalTitle}` : name;
    }

    if (globalTitle) {
      return document.title = globalTitle;
    }
  }
};
const getPath = browserRouter => {
  const {
    pathname,
    search,
    hash
  } = location;

  if (browserRouter) {
    const fpath = fixPath(pathname, browserRouter);
    const fullPath = decodeURIComponent(`${fpath}${search}`);
    const {
      params
    } = utils_getParams(fullPath);
    return {
      path: fullPath,
      params
    };
  }

  const hashPath = decodeURIComponent(fixPath(hash, browserRouter));
  const {
    params
  } = utils_getParams(hashPath);
  const base = utils_fixRoute(pathname);
  const fullPath = base ? `${base}/${hashPath}` : hashPath;
  return {
    path: fullPath,
    params
  };
};
/* const handleBeforeRender=(beforeRender,route)=>{
  if(typeof beforeRender==='function'){
    return beforeRender(route);
  }
  return {};
}; */

const handleAfterRender = (afterRender, output) => {
  if (typeof afterRender === 'function') {
    afterRender(output);
  }
};
const handleRouterChange = (opt, basepath, browserRouter, localPath) => {
  let path, params, query;

  if (typeof opt === 'string') {
    path = opt;
  } else if (utils_isObject(opt)) {
    path = opt.path;
    params = opt.params;
    query = opt.query;
  } else {
    return;
  }

  if (!path || path === '.' || path === './') {
    path = localPath;
  } else if (path.indexOf('./') === 0) {
    path = `${localPath.split('?')[0]}${path.replace('./', '/')}`;
  }

  path = fixFullpath(basepath, path, browserRouter, opt == null ? void 0 : opt.exact);
  const fmParams = utils_getParams(path);
  path = fmParams.path;

  const queryParams = utils_objectSpread(utils_objectSpread({}, fmParams.params), query);

  const queryStr = utils_params2str(queryParams);
  path = `${path}${queryStr}`;
  params = utils_objectSpread(utils_objectSpread({}, params), queryParams);
  return {
    path,
    params
  };
};
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ var utils_isBrowser = (isBrowser);
;// CONCATENATED MODULE: ../huxy/utils/str2Html.js


const str2Html = str => {
  if (!utils_isBrowser()) {
    return;
  }

  const templ = document.createElement('div');
  templ.innerHTML = str;
  const ele = templ.childNodes; // templ.children[0]

  return ele;
};

/* harmony default export */ var utils_str2Html = (str2Html);
;// CONCATENATED MODULE: ../huxy/router/src/loadComps.js


const _excluded = ["wrapComponent", "current", "menu"],
      _excluded2 = ["component", "resolve", "loadData", "loading", "errorBoundary"],
      _excluded3 = ["component", "resolve", "loadData", "loading", "errorBoundary", "icon", "key"];

function loadComps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function loadComps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? loadComps_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : loadComps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const cacheLoader = {};

const getCachedResolve = (resolve, store, params) => {
  const cachedResolve = {};
  const restResolve = {};

  if (!utils_isObject(resolve)) {
    return {
      cachedResolve,
      restResolve
    }; // throw TypeError('类型错误，resolve应为object对象！');
  }

  Object.keys(resolve).map(key => {
    const cached = store.getState(key);

    if (cached == null) {
      restResolve[key] = resolve[key](params);
    } else {
      cachedResolve[key] = cached;
    }
  });
  return {
    cachedResolve,
    restResolve
  };
};

const handleLoader = (loadData, params) => {
  if (!utils_isObject(loadData)) {
    return {};
  }

  const asyncDatas = {};
  Object.keys(loadData).map(key => asyncDatas[key] = loadData[key](params));
  return asyncDatas;
};

const handleChild = (wrapComponent, Comp, routerProps, children) => {
  if (utils_isAsync(children)) {
    return children.then(res => {
      var _res$default;

      return wrapComponent({
        Comp,
        routerProps,
        children: (_res$default = res.default) != null ? _res$default : res
      });
    });
  }

  return wrapComponent({
    Comp,
    routerProps,
    children
  });
};

const loadComps = props => {
  const {
    wrapComponent,
    current,
    menu
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  const currentProps = current.map(propItem => {
    const {
      component,
      resolve,
      loadData,
      loading,
      errorBoundary
    } = propItem,
          restItem = _objectWithoutProperties(propItem, _excluded2);

    return restItem;
  });
  const [...tempCurrent] = current;

  const loader = function () {
    let compLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!tempCurrent.length) {
      return null;
    }

    const currentItem = tempCurrent.shift();

    const {
      component,
      resolve,
      loadData,
      loading,
      errorBoundary,
      icon,
      key
    } = currentItem,
          restItemProps = _objectWithoutProperties(currentItem, _excluded3);

    if (component == null) {
      return loader(compLevel + 1);
    }

    if (typeof component === 'function' || utils_isAsync(component)) {
      // get cached component
      const compKey = JSON.stringify(restItemProps);
      let Comp = cacheLoader[compKey]; // get cached data

      const {
        cachedResolve,
        restResolve
      } = getCachedResolve(resolve, restProps.store, restItemProps); // get loaded

      const loadPromise = handleLoader(loadData, restItemProps); // set routerProps

      const routerProps = {
        /* compKey, */
        loadPromise,
        restResolve,
        params: loadComps_objectSpread(loadComps_objectSpread(loadComps_objectSpread({
          current: currentProps
        }, restProps), restItemProps), {}, {
          loading,
          errorBoundary
        }, cachedResolve)
      }; // injectMenu&&(routerProps.params.menu=menu);

      const children = loader(compLevel + 1);

      if (Comp) {
        return handleChild(wrapComponent, Comp, routerProps, children);
      }

      try {
        Comp = component();
        Comp = utils_isReactEle(Comp) ? component : Comp;
      } catch (err) {
        Comp = component;
      }

      if (utils_isAsync(Comp)) {
        return Comp.then(res => {
          var _res$default2;

          Comp = (_res$default2 = res.default) != null ? _res$default2 : res;
          cacheLoader[compKey] = Comp;
          return handleChild(wrapComponent, Comp, routerProps, children);
        });
      }

      cacheLoader[compKey] = Comp;
      return handleChild(wrapComponent, Comp, routerProps, children);
    }

    if (typeof component === 'string') {
      return utils_str2Html(component);
    }

    return component;
  };

  return loader();
};

/* harmony default export */ var src_loadComps = (loadComps);
;// CONCATENATED MODULE: ../huxy/components/errorBoundary/index.jsx

class ErrorBoundary extends (external_root_React_commonjs_react_commonjs2_react_amd_react_default()).Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  /* componentDidCatch(error,info){
    // this.setState({error,info:info.componentStack});
    const {errorReport}=this.props;
    if(typeof errorReport==='function'){
      errorReport({error,info});
    }
  } */


  render() {
    const {
      error
    } = this.state;
    const {
      fallback,
      children
    } = this.props;

    if (error) {
      return fallback(error);
    }

    return children;
  }

}
;// CONCATENATED MODULE: ../huxy/components/handleError/index.jsx





const HandleError = _ref => {
  var _boundaryRef$current;

  let {
    children
  } = _ref;
  const boundaryRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();

  if ((_boundaryRef$current = boundaryRef.current) != null && _boundaryRef$current.state) {
    boundaryRef.current.state.error = null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary, {
    ref: boundaryRef,
    fallback: (error, info) => loadError({
      error,
      info
    }),
    children: children
  });
};

/* harmony default export */ var handleError = (HandleError);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(62);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(36);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/components/spinner/index.less
var spinner = __webpack_require__(897);
;// CONCATENATED MODULE: ../huxy/components/spinner/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(spinner/* default */.Z, options);




       /* harmony default export */ var components_spinner = (spinner/* default */.Z && spinner/* default.locals */.Z.locals ? spinner/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/spinner/index.jsx



const Spinner = _ref => {
  let {
    global
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: `spinner${global ? ' global' : ''}`,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("figure", {
      className: "spinning"
    })
  });
};

/* harmony default export */ var huxy_components_spinner = (Spinner);
;// CONCATENATED MODULE: ../huxy/use/useCancelablePromise/index.jsx



const useCancelablePromise = () => {
  const promises = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)([]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => {
    promises.current.map(fn => fn.cancelFn());
    promises.current = [];
  }, []);
  const cancelablePromise = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function (fn) {
    let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const wrapPromise = utils_cancelablePromise(fn, delay);

    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }

    return wrapPromise.promiseFn;
  }, []);
  return {
    cancelablePromise
  };
};

/* harmony default export */ var use_useCancelablePromise = (useCancelablePromise);
;// CONCATENATED MODULE: ../huxy/use/useAsync/index.jsx


function useAsync_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function useAsync_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useAsync_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useAsync_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const useAsync = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    cancelablePromise
  } = use_useCancelablePromise();
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const resultRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const pendingRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const clearResult = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (Array.isArray(keys) && keys.length) {
      keys.map(key => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState; // pendingRef.current={};
    } // setState(resultRef.current);

  }, []);
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function (asyncFns, handler) {
    let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const keys = Object.keys(asyncFns);
    const eventKey = JSON.stringify(keys.sort());

    if (pendingRef.current[eventKey]) {
      return;
    }

    pendingRef.current[eventKey] = true;

    if (reset) {
      clearResult(Array.isArray(reset) ? reset : keys);
    }

    keys.map(key => {
      if (!resultRef.current[key]) {
        resultRef.current[key] = {};
      }

      resultRef.current[key].pending = true;
    });
    setState(useAsync_objectSpread({}, resultRef.current));

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      cancelablePromise(asyncFns[key]).then(res => {
        let {
          result,
          errMsg
        } = res;

        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }

        if (typeof handler === 'function') {
          result = handler(result) || result;
        }

        resultRef.current[key] = useAsync_objectSpread(useAsync_objectSpread({}, result), {}, {
          pending: false
        });

        if (errMsg !== false) {
          return;
        }

        setState(useAsync_objectSpread({}, resultRef.current));
      }).catch(error => {
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }

        resultRef.current[key] = {
          error,
          pending: false
        };
        setState(useAsync_objectSpread({}, resultRef.current));
        throw error;
      });
    }
  }, []);
  return [state, update, clearResult];
};

/* harmony default export */ var use_useAsync = (useAsync);
;// CONCATENATED MODULE: ../huxy/router/loadCompData.jsx


function loadCompData_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function loadCompData_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? loadCompData_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : loadCompData_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const objCount = obj => Object.keys(obj).length;

const LoadCompData = props => {
  const {
    Comp,
    restResolve,
    loadPromise,
    params,
    children
  } = props;
  const [resolveResult, setResolveResult] = use_useAsync();
  const [loadResult, setLoadResult] = use_useAsync();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (objCount(restResolve)) {
      setResolveResult(restResolve);
    }

    if (objCount(loadPromise)) {
      setLoadResult(loadPromise);
    }
  }, [restResolve, loadPromise]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const resultCount = objCount(resolveResult);

    if (resultCount && resultCount === objCount(restResolve)) {
      params.store.setState(resolveResult);
    }
  }, [resolveResult]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Comp, loadCompData_objectSpread(loadCompData_objectSpread(loadCompData_objectSpread({}, params), {}, {
    children: children
  }, resolveResult), loadResult));
};

/* harmony default export */ var loadCompData = (LoadCompData);
;// CONCATENATED MODULE: ../huxy/router/wrapComponent.jsx


const wrapComponent_excluded = ["params"],
      wrapComponent_excluded2 = ["loading", "errorBoundary"];

function wrapComponent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function wrapComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? wrapComponent_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : wrapComponent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









const handleLoading = Loading => Loading === false ? null : utils_isReactEle(Loading) ? Loading : utils_isFunction(Loading) ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loading, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(huxy_components_spinner, {});

const wrap = _ref => {
  let {
    Loading,
    ErrorBoundary,
    loadedComp
  } = _ref;

  const suspend = /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs_react_commonjs2_react_amd_react_.Suspense, {
    fallback: handleLoading(Loading),
    children: loadedComp
  });

  return ErrorBoundary === false ? suspend : utils_isFunction(ErrorBoundary) ? /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary, {
    children: suspend
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(handleError, {
    children: suspend
  });
};

const wrapComponent = _ref2 => {
  let {
    routerProps,
    Comp,
    children
  } = _ref2;

  const {
    params
  } = routerProps,
        restProps = _objectWithoutProperties(routerProps, wrapComponent_excluded);

  const {
    loading: Loading,
    errorBoundary: ErrorBoundary
  } = params,
        restParams = _objectWithoutProperties(params, wrapComponent_excluded2);

  const loadedComp = /*#__PURE__*/(0,jsx_runtime.jsx)(loadCompData, wrapComponent_objectSpread(wrapComponent_objectSpread({
    Comp: Comp,
    children: children
  }, restProps), {}, {
    params: restParams
  }));

  return wrap({
    Loading,
    ErrorBoundary,
    loadedComp
  });
};

/* harmony default export */ var router_wrapComponent = (wrapComponent);
;// CONCATENATED MODULE: ../huxy/router/router.jsx


const router_excluded = ["browserRouter", "childKey", "idKey", "title", "routers", "beforeRender", "afterRender", "basepath"],
      router_excluded2 = ["childKey", "idKey", "browserRouter", "routers", "basepath", "exact", "inputPath", "inputParams"];

function router_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function router_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? router_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : router_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












 // import setMeta from '@huxy/utils/setMeta';

const useRouter = initState => {
  const [input, setInput] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const [output, setOutput] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)();
  const [loading, setLoading] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)();
  const cancelRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const inputPathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const prevPathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const inputRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();

  const cancelLoader = () => {
    if (typeof cancelRef.current === 'function') {
      cancelRef.current({
        cancel: suspenseConfig.cancelMsg
      });
      cancelRef.current = null;
    }
  };

  const updateRouter = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(state => {
    if (typeof state === 'function') {
      setInput(prev => router_objectSpread(router_objectSpread({}, prev), state(prev)));
    } else if (utils_isObject(state)) {
      setInput(prev => router_objectSpread(router_objectSpread({}, prev), state));
    }
  }, []);
  const historyEvents = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function (opt) {
    let event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pushState';
    const {
      basepath,
      browserRouter
    } = inputRef.current; // const localPath=getPath(browserRouter).path;

    const localPath = prevPathRef.current;
    const {
      path,
      params
    } = handleRouterChange(opt, basepath, browserRouter, localPath);

    if (path === localPath) {
      return;
    }

    history[event](opt == null ? void 0 : opt.state, '', path);
    changeRouter({
      inputPath: path,
      inputParams: params
    });
  }, []);

  const push = opt => historyEvents(opt);

  const replace = opt => historyEvents(opt, 'replaceState');

  const changeRouter = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(_ref => {
    let {
      inputPath = '',
      inputParams = {}
    } = _ref;

    const _inputRef$current = inputRef.current,
          {
      browserRouter,
      childKey,
      idKey,
      title,
      routers,
      beforeRender,
      afterRender,
      basepath
    } = _inputRef$current,
          restInput = _objectWithoutProperties(_inputRef$current, router_excluded); // get router


    if (!inputPath) {
      const {
        path,
        params
      } = getPath(browserRouter);
      inputPath = path;
      inputParams = router_objectSpread(router_objectSpread({}, inputParams), params);
    } // beforeRender


    new Promise((resolve, reject) => {
      if (typeof beforeRender === 'function') {
        beforeRender({
          path: inputPath,
          params: inputParams,
          prevPath: prevPathRef.current
        }, resolve, reject);
      } else {
        resolve();
      }
    }).then(res => {
      var _inputPathRef$current, _inputPath, _prevPathRef$current;

      // handledPath
      if (res === false) {
        return;
      }

      const handledPath = res == null ? void 0 : res.path;

      if (handledPath) {
        if (fixFullpath(basepath, handledPath, browserRouter) !== inputPath) {
          replace(res);
          return;
        }
      }

      inputPathRef.current = (_inputPathRef$current = inputPathRef.current) != null ? _inputPathRef$current : inputPath; // handle routers && redirect

      const {
        redirect,
        current,
        menu
      } = src_formatMenu(utils_clone(routers), inputPath.split('?')[0], inputParams, childKey, idKey);

      if (redirect) {
        if (utils_isArray(redirect)) {
          console.error(`别闹，[${[inputPath, ...redirect].join(' -> ')}] 重定向死循环！！！`);
          return;
        }

        replace({
          path: redirect,
          exact: redirect !== '/404'
        });
        return;
      } // reset scroll


      if (((_inputPath = inputPath) == null ? void 0 : _inputPath.split('?')[0]) !== ((_prevPathRef$current = prevPathRef.current) == null ? void 0 : _prevPathRef$current.split('?')[0])) {
        resetScroll();
      } // handle title


      setTitle(current, title); // handle meta
      // metaData?.length&&(setMeta(metaData));
      // component props

      const componentProps = router_objectSpread(router_objectSpread({
        eventBus: eventBus,
        store: store,
        useStore: useStore
      }, restInput), {}, {
        updateRouter,
        router: {
          push,
          replace
        },
        current,
        menu,
        inputPath: inputPathRef.current,
        prevPath: prevPathRef.current,
        basepath,
        title,
        history: fakeHistory
      }); // inject some data


      store.setState({
        [useRouteName]: componentProps
      }); // load components

      const components = src_loadComps(router_objectSpread(router_objectSpread({}, componentProps), {}, {
        wrapComponent: router_wrapComponent
      })); // reset initPath

      prevPathRef.current = inputPath; //inputPathRef.current

      inputPathRef.current = null; // cancelLoader

      cancelLoader(); // lazy load components

      if (utils_isAsync(components)) {
        const {
          promiseFn,
          cancelFn
        } = utils_cancelablePromise(components, {
          delay: suspenseConfig.delay,
          msg: {
            timeout: suspenseConfig.timeoutMsg
          }
        });
        cancelRef.current = cancelFn;
        setLoading(true);
        return promiseFn.then(res => {
          cancelRef.current = null;
          const {
            result,
            errMsg
          } = res;
          const comps = errMsg === false ? result : errMsg != null && errMsg.timeout ? loadError({
            error: {
              errMsg: `${inputPath} ${errMsg.timeout}`
            }
          }) : null;

          if (comps) {
            setLoading(false);
            setOutput(comps);
            handleAfterRender(afterRender, current.slice(-1)[0]);
          }
          /* else{
           console.error(`${inputPath} ${errMsg.cancel}`);
          } */

        }).catch(error => {
          cancelRef.current = null;
          setLoading(false);
          setOutput(loadError({
            error
          }));
          handleAfterRender(afterRender, current.slice(-1)[0]);
          throw error;
        });
      }

      handleAfterRender(afterRender, current.slice(-1)[0]);
      setOutput(components);
    }).catch(error => {
      setOutput(loadError({
        error
      }));
      throw error;
    });
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const {
      childKey = 'children',
      idKey = 'path',
      browserRouter = false,
      routers = [],
      basepath = '',
      exact = false,
      inputPath = '',
      inputParams = {}
    } = input,
          rest = _objectWithoutProperties(input, router_excluded2);

    const base = utils_fixRoute(basepath);
    const menu = resetPath(utils_clone(routers), browserRouter, childKey, idKey, base, exact);
    inputRef.current = router_objectSpread(router_objectSpread({}, rest), {}, {
      childKey,
      idKey,
      browserRouter,
      routers: menu,
      basepath: base
    });
    const historyEvent = browserRouter ? 'popstate' : 'hashchange';

    const changeEvent = () => changeRouter({});

    changeRouter({
      inputPath,
      inputParams
    });
    linkEmitter.on(eventPushName, push);
    linkEmitter.on(eventReplaceName, replace);
    window.addEventListener(historyEvent, changeEvent, false);
    return () => {
      cancelLoader();
      linkEmitter.off(eventPushName, push);
      linkEmitter.off(eventReplaceName, replace);
      window.removeEventListener(historyEvent, changeEvent, false);
    };
  }, [input]);
  return {
    eventBus: eventBus,
    store: store,
    useStore: useStore,
    updateRouter,
    router: {
      push,
      replace
    },
    output,
    loading
  };
};

/* harmony default export */ var router = (useRouter);
;// CONCATENATED MODULE: ../huxy/router/src/handleLinkClick.js


const handleLinkClick_excluded = ["to", "onClick", "preventDefault", "stopPropagation", "exact", "target"];

function handleLinkClick_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function handleLinkClick_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? handleLinkClick_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : handleLinkClick_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const handleLinkClick = props => {
  const {
    to,
    onClick,
    preventDefault,
    stopPropagation = true,
    exact = true,
    target
  } = props,
        rest = _objectWithoutProperties(props, handleLinkClick_excluded);

  const triggerPush = () => {
    const opt = typeof to === 'string' ? {
      exact,
      path: to
    } : handleLinkClick_objectSpread({
      exact
    }, to);
    linkEmitter.emit(eventPushName, opt);
  };

  const handleClick = e => {
    e.preventDefault();

    if (stopPropagation) {
      e.stopPropagation();
    }

    if (rest != null && rest.disabled) {
      return;
    }

    if (!preventDefault) {
      if (target) {
        var _to$path, _window;

        const path = typeof to === 'string' ? to : (_to$path = to == null ? void 0 : to.path) != null ? _to$path : '';
        const queryStr = utils_params2str(to == null ? void 0 : to.query);
        (_window = window) == null ? void 0 : _window.open(`${path}${queryStr}`, target);
        return;
      }

      triggerPush();
    }

    typeof onClick === 'function' && onClick();
  };

  return handleClick;
};

/* harmony default export */ var src_handleLinkClick = (handleLinkClick);
;// CONCATENATED MODULE: ../huxy/router/link.jsx


const link_excluded = ["to", "onClick", "preventDefault", "stopPropagation", "exact", "target"];

function link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? link_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const Link = props => {
  const {
    to,
    onClick,
    preventDefault,
    stopPropagation,
    exact,
    target
  } = props,
        rest = _objectWithoutProperties(props, link_excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", link_objectSpread({
    onClick: src_handleLinkClick(props)
  }, rest));
};

/* harmony default export */ var router_link = (Link);
;// CONCATENATED MODULE: ../huxy/router/useRoute.js


const useRoute = () => store.getState(useRouteName);

/* harmony default export */ var router_useRoute = (useRoute);
;// CONCATENATED MODULE: ../huxy/router/index.js




}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});