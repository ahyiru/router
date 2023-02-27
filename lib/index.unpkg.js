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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes before {\n  0% {\n    width: 0.6rem;\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n  35% {\n    width: 3rem;\n    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;\n  }\n  70% {\n    width: 0.6rem;\n    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;\n  }\n  100% {\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n}\n@keyframes after {\n  0% {\n    height: 0.6rem;\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n  35% {\n    height: 3rem;\n    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;\n  }\n  70% {\n    height: 0.6rem;\n    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;\n  }\n  100% {\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n}\n.spinner {\n  position: relative;\n  height: 100%;\n  min-height: 100px;\n  display: block;\n  overflow: hidden;\n  pointer-events: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: hsla(0, 0%, 72%, 0.24);\n}\n.spinner.absolute {\n  position: absolute;\n  min-height: auto;\n}\n.spinner.global {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner .spinning {\n  width: 3rem;\n  height: 3rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(165deg);\n  margin: 0;\n}\n.spinner .spinning::before,\n.spinner .spinning::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 0.3rem;\n  transform: translate(-50%, -50%);\n}\n.spinner .spinning::before {\n  animation: before 1.5s infinite;\n}\n.spinner .spinning::after {\n  animation: after 1.5s infinite;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Iuy_e {\n  text-decoration: none;\n  cursor: pointer;\n  color: var(--linkColor);\n  background-color: transparent;\n  font-weight: 500;\n  transition: color 0.3s;\n}\n.Iuy_e:active, .Iuy_e.D3oJg {\n  color: var(--linkActiveColor, #42a5f5);\n}\n.Iuy_e:hover {\n  color: var(--linkHoverColor, #2196f3);\n}\n.Iuy_e[disabled] {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.Iuy_e[disabled]:active, .Iuy_e[disabled].D3oJg, .Iuy_e[disabled]:hover {\n  color: var(--linkColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"link": "Iuy_e",
	"active": "D3oJg"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 609:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  "Link": function() { return /* reexport */ huxy_router_link_0; },
  "emitRoute": function() { return /* binding */ emitRoute; },
  "getRoute": function() { return /* binding */ getRoute; },
  "useRoute": function() { return /* reexport */ router_useRoute; },
  "useRouter": function() { return /* reexport */ router; }
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ var utils_isArray = (isArray);

;// CONCATENATED MODULE: ../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ var utils_isObject = (isObject);

;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = (value) => (value == null ? void 0 : value["$$typeof"]) && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ var utils_isReactEle = (isReactEle);

;// CONCATENATED MODULE: ../huxy/utils/isVueEle.js
const isVueEle = (value) => value == null ? void 0 : value.__v_isVNode;
/* harmony default export */ var utils_isVueEle = (isVueEle);

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/clone.js





const clone = (obj) => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }
  const newObj = utils_isArray(obj) ? [] : {};
  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i];
      newObj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ var utils_clone = (clone);

;// CONCATENATED MODULE: ../huxy/utils/isFunction.js

const isFunction = (value) => utils_getType(value) === "function";
/* harmony default export */ var utils_isFunction = (isFunction);

;// CONCATENATED MODULE: ../huxy/utils/isAsync.js



const isAsync = (value) => utils_getType(value) === "promise" || utils_isObject(value) && utils_isFunction(value.then);
/* harmony default export */ var utils_isAsync = (isAsync);

;// CONCATENATED MODULE: ../huxy/utils/cancelablePromise.js

const cancelablePromise = (promise, delay = 12e4, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
  if (!utils_isAsync(promise)) {
    return {};
  }
  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    cancelFn = (msg2 = "canceled") => {
      clearTimeout(timer);
      resolve({ canceled: true, errMsg: msg2 });
    };
    if (delay) {
      delay = typeof delay !== "number" ? 12e4 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }
    promise.then((result) => {
      clearTimeout(timer);
      resolve({ result, errMsg: false });
    }).catch((error) => {
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

;// CONCATENATED MODULE: ../huxy/utils/fixRoute.js
const fixRoute = (path) => path ? path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path : "";
/* harmony default export */ var utils_fixRoute = (fixRoute);

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/str2React/index.jsx

const str2React = (str, props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: str }, ...props });
/* harmony default export */ var components_str2React = (str2React);

;// CONCATENATED MODULE: ../huxy/components/loadError/index.jsx


const LoadError = (props) => {
  const { error = {}, info = "" } = props || {};
  const { message, stack, errMsg } = error;
  let str = errMsg || stack || error.toString();
  str = `${str}
${info}`.replace(/\r|\n|\r\n/g, "<br/>");
  str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  str = str.replace(/\s/g, "&nbsp;");
  const errStack = message == null ? void 0 : message.slice(0, 120).split(". ").slice(0, 2).join(". ");
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { style: { padding: "15px 20px", backgroundColor: "#fff", wordWrap: "break-word" }, children: [
    components_str2React(str, { style: { color: "red" } }),
    errStack && /* @__PURE__ */ (0,jsx_runtime.jsxs)("a", { style: { display: "inline-block", padding: "15px", color: "#00b4cf" }, href: `https://stackoverflow.com/search?q=${errStack}`, target: "_blank", children: [
      " ",
      "--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"
    ] })
  ] });
};
/* harmony default export */ var loadError = (LoadError);

;// CONCATENATED MODULE: ../huxy/utils/emitter.js
const emitter = () => {
  const hub = {};
  const on = (name, cb) => {
    if (!hub[name]) {
      hub[name] = [];
    }
    if (hub[name].indexOf(cb) === -1) {
      hub[name].push(cb);
    }
  };
  const emit = (name, data) => {
    if (hub[name]) {
      hub[name].map((cb) => cb(data));
    }
  };
  const off = (name, cb = null) => {
    if (hub[name]) {
      if (typeof cb !== "function") {
        return delete hub[name];
      }
      const index = hub[name].indexOf(cb);
      if (index > -1) {
        hub[name].splice(index, 1);
        if (!hub[name].length) {
          delete hub[name];
        }
      }
    }
  };
  return { on, emit, off };
};
/* harmony default export */ var utils_emitter = (emitter);

;// CONCATENATED MODULE: ../huxy/utils/mergeOwnProp.js


const getOwnProp = (obj) => {
  const ownProp = {};
  for (let k in obj) {
    if (!utils_hasProp(obj, k)) {
      ownProp[k] = obj[k];
    }
  }
  return ownProp;
};
const mergeOwnProp = (base, extend) => {
  if (!utils_isObject(base)) {
    return extend;
  }
  if (!utils_isObject(extend)) {
    return base;
  }
  const ownProp = { ...getOwnProp(base), ...getOwnProp(extend) };
  const newObj = { ...base, ...extend };
  Object.keys(ownProp).map((prop) => {
    Object.setPrototypeOf(newObj, { [prop]: ownProp[prop] });
  });
  return newObj;
};
/* harmony default export */ var utils_mergeOwnProp = (mergeOwnProp);

;// CONCATENATED MODULE: ../huxy/utils/createStore.js




const createStore = () => {
  const { on, emit, off } = utils_emitter();
  const store = {};
  const getState = (name) => utils_clone(store[name]);
  const setState = (state, init = false) => {
    if (typeof state === "function") {
      state = state(utils_clone(store));
    }
    if (!utils_isObject(state)) {
      throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");
    }
    const newState = utils_clone(state);
    Object.keys(newState).map((key) => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? utils_mergeOwnProp(oldItem, newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    });
  };
  const subscribe = (name, cb) => {
    on(name, cb);
    return () => off(name, cb);
  };
  const clean = (name) => {
    if (typeof name === "string") {
      store[name] = void 0;
    } else if (Array.isArray(name)) {
      name.map((n) => store[n] = void 0);
    } else {
      Object.keys(store).map((key) => store[key] = void 0);
    }
  };
  return { getState, setState, subscribe, unsubscribe: off, clean };
};
/* harmony default export */ var utils_createStore = (createStore);

;// CONCATENATED MODULE: ../huxy/use/createContainer/index.jsx

const createContainer = (store) => (name, initState) => {
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(() => {
    const prevState = store == null ? void 0 : store.getState(name);
    if (prevState !== void 0) {
      return prevState;
    }
    if (initState !== void 0) {
      store == null ? void 0 : store.setState({ [name]: initState }, true);
    }
    return initState;
  });
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((result) => store == null ? void 0 : store.setState({ [name]: typeof result === "function" ? result(store == null ? void 0 : store.getState(name)) : result }), []);
  const subscribe = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((callback) => store == null ? void 0 : store.subscribe(name, callback), []);
  const clean = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((name2 = name2) => store == null ? void 0 : store.clean(name2), []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    store == null ? void 0 : store.subscribe(name, (result) => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ var use_createContainer = (createContainer);

;// CONCATENATED MODULE: ../huxy/router/src/configs.js



const store = utils_createStore();
const useStore = use_createContainer(store);
const linkEmitter = utils_emitter();
const eventBus = utils_emitter();
const eventPushName = "push-emitter";
const eventReplaceName = "replace-emitter";
const useRouteName = "useRoute-emitter";
const suspenseConfig = {
  delay: 8e3,
  timeoutMsg: "\u8BF7\u6C42\u8D85\u65F6\uFF01",
  cancelMsg: "\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"
};
const noMatchTag = "/404";
const fakeHistory = {
  getState: () => history.state,
  go: (n) => history.go(n),
  forward: () => history.forward(),
  back: () => history.back()
};

;// CONCATENATED MODULE: ../huxy/router/src/formatMenu.js


const patchPath = (menu, id, childKey, idKey, redirectPaths = []) => {
  const selected = (data) => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item2 = data[i];
      const path = item2[idKey].split("?")[0];
      const reg = new RegExp("^" + path.replace(/:[^/]+/g, "[^/]+") + "$");
      if (reg.test(id)) {
        return item2;
      }
      if (utils_isArray(item2[childKey])) {
        const childItem = selected(item2[childKey]);
        if (childItem) {
          return childItem;
        }
      }
    }
  };
  const item = selected(menu);
  if (!item) {
    return noMatchTag;
  }
  const { redirect } = item;
  if (redirect) {
    if (redirectPaths.includes(redirect)) {
      return redirectPaths;
    }
    redirectPaths.push(redirect);
    return patchPath(menu, redirect.split("?")[0], childKey, idKey, redirectPaths);
  }
  return redirectPaths[redirectPaths.length - 1];
};
const getCurrent = (menu, id, inputParams, childKey, idKey) => {
  if (!utils_isArray(menu)) {
    return null;
  }
  const getParams = (cid) => {
    const itemArr = cid.split("/");
    const idArr = id.split("/");
    const params = {};
    itemArr.map((v, k) => v.indexOf(":") === 0 && (params[v.slice(1)] = idArr[k]));
    return params;
  };
  const getChildrenMenu = (cdata, cid) => {
    const pItem = [];
    const pid = cid.split("/:")[0];
    for (let i = 0, l = cdata.length; i < l; i++) {
      const item = cdata[i];
      if (item[idKey] === pid) {
        item.active = true;
        const { name, title, icon, params } = item;
        pItem.push({ name, title, icon, params, [idKey]: pid });
      } else if (cid.indexOf(`${item[idKey]}/`) === 0) {
        item.active = true;
        const params = getParams(item[idKey]);
        const paramsId = Object.keys(params).map((v) => params[v]).join("/");
        const { name, title, icon } = item;
        const path = paramsId ? `${pid}/${paramsId}` : item[idKey];
        pItem.push({ name, title, icon, [idKey]: path, params: { ...item.params, ...params } });
      } else if (item[idKey] === cid) {
        item.active = true;
        const params = getParams(item[idKey]);
        const { [childKey]: children, ...restItem } = item;
        pItem.push({ ...restItem, [idKey]: id, params: { ...restItem.params, ...inputParams, ...params } });
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
  const selected = (data) => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      const cid = (item[idKey] || "").split("?")[0];
      if (cid === id) {
        if (item.hideMenu) {
          activeParentMenu(data, item.parentPath || cid);
        }
        item.active = true;
        const { [childKey]: children, ...restItem } = item;
        return [{ ...restItem, params: { ...restItem.params, ...inputParams } }];
      }
      const reg = new RegExp("^" + cid.replace(/:[^/]+/g, "[^/]+") + "$");
      if (reg.test(id)) {
        return getChildrenMenu(data, cid);
      }
      if (utils_isArray(item[childKey])) {
        const childItem = selected(item[childKey]);
        if (childItem) {
          item.active = true;
          item.open = true;
          const { [childKey]: children, ...restItem } = item;
          return [restItem, ...childItem];
        }
      }
    }
  };
  const current = selected(menu) || [];
  return { result: menu, current };
};
const filterMenu = (menu, childKey, idKey) => {
  return menu.filter((item) => {
    if (item.hideMenu || item[idKey].indexOf("/:") > -1) {
      return false;
    }
    if (utils_isArray(item[childKey])) {
      item[childKey] = filterMenu(item[childKey], childKey, idKey);
    }
    return true;
  });
};
const formatMenu = (router, inputPath, inputParams, childKey = "children", idKey = "path") => {
  const redirect = patchPath(router, inputPath, childKey, idKey);
  if (redirect) {
    return { redirect };
  }
  const { result, current } = getCurrent(router, inputPath, inputParams, childKey, idKey);
  const menu = filterMenu(result, childKey, idKey);
  return {
    current,
    menu
  };
};
/* harmony default export */ var src_formatMenu = (formatMenu);

;// CONCATENATED MODULE: ../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ var utils_isUrl = (isUrl);

;// CONCATENATED MODULE: ../huxy/router/src/fixPath.js


const fixPath = (path, browser) => {
  const defaultPath = ["#/", "/"];
  const initPath = defaultPath[!!browser - 0];
  if (!path || defaultPath.includes(path)) {
    return initPath;
  }
  const newPath = path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
  return browser || newPath.indexOf("#/") > -1 ? newPath : `#${newPath}`;
};
const fixFullpath = (base, path, browser, exact = false) => {
  const fpath = fixPath(path, browser);
  if (exact) {
    return fpath;
  }
  if (browser) {
    return base && fpath === "/" ? base : `${base}${fpath}`;
  }
  return base ? `${base}/${fpath}` : fpath;
};
const resetPath = (menu, browserRouter, childKey, idKey, basepath, exact) => {
  if (!utils_isArray(menu)) {
    return menu;
  }
  const traver = (data, prefix = "") => {
    return data.filter((item) => !item.denied).map((v) => {
      if (!exact && !v.exact && !utils_isUrl(v[idKey])) {
        if (!v[idKey] || v[idKey] === "javascript:;") {
          v[idKey] = "";
        }
        const fixedPath = v[idKey].charAt(0) === "/" && prefix.charAt(prefix.length - 1) === "/" ? v[idKey].slice(1) : v[idKey].charAt(0) !== "/" && prefix.charAt(prefix.length - 1) !== "/" ? `/${v[idKey]}` : v[idKey];
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

;// CONCATENATED MODULE: ../huxy/utils/params2str.js

const params2str = (params) => {
  if (!utils_isObject(params)) {
    return "";
  }
  const arr = [];
  Object.keys(params).map((v, k) => {
    const p = k > 0 ? "&" : "?";
    arr.push(`${p}${v}=${params[v]}`);
  });
  return arr.join("");
};
/* harmony default export */ var utils_params2str = (params2str);

;// CONCATENATED MODULE: ../huxy/utils/getParams.js
const getParams = (fullPath = "") => {
  const [path, query] = fullPath.split("?");
  if (query) {
    const params = {};
    const paramsArr = query.split("&");
    paramsArr.map((param) => {
      const [key, value] = param.split("=");
      params[key] = value;
    });
    return { path, params };
  }
  return { path };
};
/* harmony default export */ var utils_getParams = (getParams);

;// CONCATENATED MODULE: ../huxy/router/src/utils.js





const resetScroll = () => {
  if (document.documentElement.scrollTop) {
    document.documentElement.scrollTop = 0;
  } else if (document.body.scrollTop) {
    document.body.scrollTop = 0;
  }
};
const setTitle = (current, globalTitle) => {
  for (let i = current.length - 1, item; item = current[i--]; ) {
    const { title, name } = item;
    if (typeof title === "string" && title.length) {
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
const getPath = (browserRouter) => {
  const { pathname, search, hash } = location;
  if (browserRouter) {
    const fpath = fixPath(pathname, browserRouter);
    const fullPath2 = decodeURIComponent(`${fpath}${search}`);
    const { params: params2 } = utils_getParams(fullPath2);
    return { path: fullPath2, params: params2 };
  }
  const hashPath = decodeURIComponent(fixPath(hash, browserRouter));
  const { params } = utils_getParams(hashPath);
  const base = utils_fixRoute(pathname);
  const fullPath = base ? `${base}/${hashPath}` : hashPath;
  return { path: fullPath, params };
};
const handleAfterRender = (afterRender, output, startTime) => {
  if (typeof afterRender === "function") {
    afterRender({ ...output, stay: /* @__PURE__ */ new Date() - startTime });
  }
};
const handleRouterChange = (opt, basepath, browserRouter, localPath) => {
  let path, params, query;
  if (typeof opt === "string") {
    path = opt;
  } else if (utils_isObject(opt)) {
    path = opt.path;
    params = opt.params;
    query = opt.query;
  } else {
    return;
  }
  if (!path || path === "." || path === "./") {
    path = localPath;
  } else if (path.indexOf("./") === 0) {
    path = `${localPath.split("?")[0]}${path.replace("./", "/")}`;
  } else if (path.indexOf("../") === 0) {
    path = `${localPath.split("?")[0].split("/").slice(0, -1).join("/")}${path.replace("../", "/")}`;
  }
  path = fixFullpath(basepath, path, browserRouter, opt == null ? void 0 : opt.exact);
  const fmParams = utils_getParams(path);
  path = fmParams.path;
  const queryParams = { ...fmParams.params, ...query };
  const queryStr = utils_params2str(queryParams);
  path = `${path}${queryStr}`;
  params = { ...params, ...queryParams };
  return { path, params };
};
const isContainer = (src, target) => {
  const arr = src.split(target);
  if (arr.length > 1) {
    return ["", "/"].includes(arr[1].slice(0, 1));
  }
  return false;
};

;// CONCATENATED MODULE: ../huxy/utils/eventBus.js

const events = utils_emitter();
const eventBus_eventBus = (name) => {
  const { on, emit, off } = events;
  return {
    on: (cb) => on(name, cb),
    emit: (data) => emit(name, data),
    off: (cb) => off(name, cb)
  };
};
/* harmony default export */ var utils_eventBus = (eventBus_eventBus);

;// CONCATENATED MODULE: ../huxy/utils/createContainer.js
const createContainer_createContainer = (store) => (name, initState) => {
  const { getState, setState, subscribe, unsubscribe, clean } = store;
  if (initState !== void 0) {
    setState({ [name]: initState }, true);
  }
  return {
    getState: () => getState(name),
    setState: (data, init) => setState({ [name]: data }, init),
    subscribe: (cb) => subscribe(name, cb),
    unsubscribe: () => unsubscribe(name),
    clean: () => clean(name)
  };
};
/* harmony default export */ var utils_createContainer = (createContainer_createContainer);

;// CONCATENATED MODULE: ../huxy/utils/store.js


const container = utils_createStore();
const store_store = utils_createContainer(container);
/* harmony default export */ var utils_store = (store_store);

;// CONCATENATED MODULE: ../huxy/router/src/store.js





const pushEvent = utils_eventBus("push-emitter");
const replaceEvent = utils_eventBus("replace-emitter");
const routeStore = utils_store("route-store");
const store_eventBus = utils_emitter();
const src_store_store = utils_createStore();
const store_useStore = use_createContainer(src_store_store);

;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ var utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/str2Html.js

const str2Html = (str) => {
  if (!utils_isBrowser()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ var utils_str2Html = (str2Html);

;// CONCATENATED MODULE: ../huxy/components/errorBoundary/index.jsx
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

class ErrorBoundary extends (external_root_React_commonjs_react_commonjs2_react_amd_react_default()).Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      error: null
    });
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    const { errorReport } = this.props;
    if (typeof errorReport === "function") {
      errorReport({ error, info: info.componentStack });
    }
  }
  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;
    if (error) {
      return fallback(error);
    }
    return children;
  }
}

;// CONCATENATED MODULE: ../huxy/components/handleError/index.jsx




const HandleError = ({ children, report }) => {
  var _a;
  const boundaryRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  if ((_a = boundaryRef.current) == null ? void 0 : _a.state) {
    boundaryRef.current.state.error = null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, { ref: boundaryRef, fallback: (error, info) => loadError({ error, info }), errorReport: report, children });
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


const Spinner = ({ global, absolute }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `spinner${global ? " global" : ""}${absolute ? " absolute" : ""}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("figure", { className: "spinning" }) });
/* harmony default export */ var huxy_components_spinner = (Spinner);

;// CONCATENATED MODULE: ../huxy/use/useCancelablePromise/index.jsx


const useCancelablePromise = () => {
  const promises = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)([]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(
    () => () => {
      promises.current.map((fn) => fn.cancelFn());
      promises.current = [];
    },
    []
  );
  const cancelablePromise = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((fn, delay = true) => {
    const wrapPromise = utils_cancelablePromise(fn, delay);
    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }
    return wrapPromise.promiseFn;
  }, []);
  return { cancelablePromise };
};
/* harmony default export */ var use_useCancelablePromise = (useCancelablePromise);

;// CONCATENATED MODULE: ../huxy/use/useAsync/index.jsx


const useAsync = (initState = {}) => {
  const { cancelablePromise } = use_useCancelablePromise();
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const resultRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const pendingRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const clearResult = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((keys = null) => {
    if (Array.isArray(keys) && keys.length) {
      keys.map((key) => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState;
    }
  }, []);
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((asyncFns, handler, reset = false) => {
    const keys = Object.keys(asyncFns);
    const eventKey = JSON.stringify(keys.sort());
    if (pendingRef.current[eventKey]) {
      return;
    }
    pendingRef.current[eventKey] = true;
    if (reset) {
      clearResult(Array.isArray(reset) ? reset : keys);
    }
    keys.map((key) => {
      if (!resultRef.current[key]) {
        resultRef.current[key] = {};
      }
      resultRef.current[key].pending = true;
    });
    setState({ ...resultRef.current });
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      cancelablePromise(asyncFns[key]).then((res) => {
        let { result, errMsg } = res;
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }
        if (typeof handler === "function") {
          result = handler(result) || result;
        }
        resultRef.current[key] = { ...result, pending: false };
        if (errMsg !== false) {
          return;
        }
        setState({ ...resultRef.current });
      }).catch((error) => {
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }
        resultRef.current[key] = { error, pending: false };
        setState({ ...resultRef.current });
        throw error;
      });
    }
  }, []);
  return [state, update, clearResult];
};
/* harmony default export */ var use_useAsync = (useAsync);

;// CONCATENATED MODULE: ../huxy/router/src/loadCompData.jsx



const objCount = (obj) => Object.keys(obj).length;
const LoadCompData = (props) => {
  const { Comp, restResolve, loadPromise, params, children } = props;
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
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Comp, { ...params, ...resolveResult, ...loadResult, children });
};
/* harmony default export */ var loadCompData = (LoadCompData);

;// CONCATENATED MODULE: ../huxy/router/src/wrapComponent.jsx







const handleLoading = (Loading) => Loading === false ? null : utils_isReactEle(Loading) ? Loading : utils_isFunction(Loading) ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Loading, {}) : /* @__PURE__ */ (0,jsx_runtime.jsx)(huxy_components_spinner, {});
const wrap = ({ Loading, ErrorBoundary, loadedComp }) => {
  const suspend = /* @__PURE__ */ (0,jsx_runtime.jsx)(external_root_React_commonjs_react_commonjs2_react_amd_react_.Suspense, { fallback: handleLoading(Loading), children: loadedComp });
  return ErrorBoundary === false ? suspend : utils_isFunction(ErrorBoundary) ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ErrorBoundary, { children: suspend }) : /* @__PURE__ */ (0,jsx_runtime.jsx)(handleError, { children: suspend });
};
const wrapComponent = ({ Comp, routerProps, children }) => {
  const { params, ...restProps } = routerProps;
  const { loading: Loading, errorBoundary: ErrorBoundary, ...restParams } = params;
  const loadedComp = /* @__PURE__ */ (0,jsx_runtime.jsx)(loadCompData, { Comp, ...restProps, params: restParams, children });
  return wrap({ Loading, ErrorBoundary, loadedComp });
};
/* harmony default export */ var src_wrapComponent = (wrapComponent);

;// CONCATENATED MODULE: ../huxy/router/src/loadComps.js





const cacheLoaded = {};
const handleChild = (Comp, routerProps, children, compKey) => {
  if (utils_isAsync(children)) {
    return children.then((res) => {
      var _a;
      return src_wrapComponent({ Comp, routerProps, children: (_a = res.default) != null ? _a : res });
    });
  }
  return src_wrapComponent({ Comp, routerProps, children });
};
const getCachedResolve = (resolve, store, params) => {
  const cachedResolve = {};
  const restResolve = {};
  if (!utils_isObject(resolve)) {
    return { cachedResolve, restResolve };
  }
  Object.keys(resolve).map((key) => {
    const cached = store.getState(key);
    if (cached == null) {
      restResolve[key] = resolve[key](params);
    } else {
      cachedResolve[key] = cached;
    }
  });
  return { cachedResolve, restResolve };
};
const handleLoader = (loadData, params) => {
  if (!utils_isObject(loadData)) {
    return {};
  }
  const asyncDatas = {};
  Object.keys(loadData).map((key) => asyncDatas[key] = loadData[key](params));
  return asyncDatas;
};
const loadComps = (props) => {
  const { current, menu, ...restProps } = props;
  const currentProps = current.map((propItem) => {
    const { component, resolve, loadData, loading, errorBoundary, icon, ...restItem } = propItem;
    return restItem;
  });
  const tempCurrent = [...current].filter((item) => item.component);
  const loader = (compLevel = 0) => {
    if (!tempCurrent.length) {
      return null;
    }
    const currentItem = tempCurrent.shift();
    const { component, resolve, loadData, icon, key, ...restItemProps } = currentItem;
    if (typeof component === "function" || utils_isAsync(component)) {
      const compKey = restItemProps.path;
      let Comp = cacheLoaded[compKey];
      const { cachedResolve, restResolve } = getCachedResolve(resolve, restProps.store, restItemProps);
      const loadPromise = handleLoader(loadData, restItemProps);
      const routerProps = { loadPromise, restResolve, params: { current: currentProps, ...restProps, ...restItemProps, ...cachedResolve } };
      const children = loader(compLevel + 1);
      if (Comp) {
        return handleChild(Comp, routerProps, children, compKey);
      }
      try {
        Comp = component();
        Comp = utils_isReactEle(Comp) ? component : Comp;
      } catch (err) {
        Comp = component;
      }
      if (utils_isAsync(Comp)) {
        return Comp.then((res) => {
          var _a;
          Comp = (_a = res.default) != null ? _a : res;
          cacheLoaded[compKey] = Comp;
          return handleChild(Comp, routerProps, children, compKey);
        });
      }
      cacheLoaded[compKey] = Comp;
      return handleChild(Comp, routerProps, children, compKey);
    }
    if (typeof component === "string") {
      return utils_str2Html(component);
    }
    return component;
  };
  return loader();
};
/* harmony default export */ var src_loadComps = (loadComps);

;// CONCATENATED MODULE: ../huxy/router/router.jsx














const useRouter = (initState) => {
  const [input, setInput] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const [output, setOutput] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)();
  const [loading, setLoading] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)();
  const cancelRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const inputPathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const prevPathRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const inputRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const cancelLoader = () => {
    if (typeof cancelRef.current === "function") {
      cancelRef.current({ cancel: suspenseConfig.cancelMsg });
      cancelRef.current = null;
    }
  };
  const updateRouter = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((state) => {
    if (typeof state === "function") {
      setInput((prev) => ({ ...prev, ...state(prev) }));
    } else if (utils_isObject(state)) {
      setInput((prev) => ({
        ...prev,
        ...state
        /* , exact: state.exact ?? true */
      }));
    }
  }, []);
  const historyEvents = (opt, event = "pushState") => {
    const { basepath, browserRouter } = inputRef.current;
    const localPath = prevPathRef.current;
    const { path, params } = handleRouterChange(opt, basepath, browserRouter, localPath);
    if (path === localPath) {
      return;
    }
    const historyCallback = () => history[event](opt == null ? void 0 : opt.state, "", path);
    changeRouter({ inputPath: path, inputParams: params }, historyCallback);
  };
  const push = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((opt) => historyEvents(opt), []);
  const replace = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((opt) => historyEvents(opt, "replaceState"), []);
  const changeRouter = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(({ inputPath = "", inputParams = {} }, historyCallback) => {
    const startTime = +/* @__PURE__ */ new Date();
    const { browserRouter, childKey, idKey, title, routers, beforeRender, afterRender, basepath, allowedNotFound, ...restInput } = inputRef.current;
    if (!inputPath) {
      const { path, params } = getPath(browserRouter);
      inputPath = path;
      inputParams = { ...inputParams, ...params };
    }
    const prevPath = prevPathRef.current;
    new Promise((resolve, reject) => {
      if (!(routers == null ? void 0 : routers.length)) {
        reject("\u8DEF\u7531\u4E3A\u7A7A\uFF01");
      }
      if (inputPath !== prevPathRef.current && typeof beforeRender === "function") {
        beforeRender({ path: inputPath, params: inputParams, prevPath }, resolve, reject);
      } else {
        resolve();
      }
    }).then((res) => {
      var _a, _b;
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
      inputPathRef.current = (_a = inputPathRef.current) != null ? _a : inputPath;
      const { redirect, current, menu } = src_formatMenu(utils_clone(routers), inputPath.split("?")[0], inputParams, childKey, idKey);
      if (redirect) {
        if (allowedNotFound && redirect === noMatchTag) {
          if (typeof allowedNotFound === "boolean") {
            return;
          }
          if (typeof allowedNotFound === "string" && isContainer(inputPathRef.current, allowedNotFound)) {
            return;
          }
          if (utils_isArray(allowedNotFound) && allowedNotFound.find((item) => isContainer(inputPathRef.current, item))) {
            return;
          }
        }
        if (utils_isArray(redirect)) {
          console.error(`\u522B\u95F9\uFF0C[${[inputPath, ...redirect].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);
          return;
        }
        const noMatch = redirect === noMatchTag;
        return noMatch ? replace({ path: redirect }) : push({ path: redirect, exact: true });
      }
      historyCallback == null ? void 0 : historyCallback();
      if ((inputPath == null ? void 0 : inputPath.split("?")[0]) !== ((_b = prevPathRef.current) == null ? void 0 : _b.split("?")[0])) {
        resetScroll();
      }
      setTitle(current, title);
      const componentProps = {
        eventBus: store_eventBus,
        store: src_store_store,
        useStore: store_useStore,
        ...restInput,
        updateRouter,
        emitRouter: routeStore.subscribe,
        router: { push, replace },
        current,
        menu,
        inputPath: inputPathRef.current,
        prevPath,
        basepath,
        title,
        history: { ...fakeHistory, goBack: (opt) => push({ ...opt, path: prevPath }) }
      };
      routeStore.setState({ ...componentProps, browserRouter });
      const components = src_loadComps(componentProps);
      prevPathRef.current = inputPath;
      inputPathRef.current = null;
      cancelLoader();
      if (utils_isAsync(components)) {
        const { promiseFn, cancelFn } = utils_cancelablePromise(components, { delay: suspenseConfig.delay, msg: { timeout: suspenseConfig.timeoutMsg } });
        cancelRef.current = cancelFn;
        setLoading(true);
        return promiseFn.then((res2) => {
          cancelRef.current = null;
          const { result, errMsg } = res2;
          const comps = errMsg === false ? result : (errMsg == null ? void 0 : errMsg.timeout) ? loadError({ error: { errMsg: `${inputPath} ${errMsg.timeout}` } }) : null;
          if (comps) {
            setLoading(false);
            handleAfterRender(afterRender, current.slice(-1)[0], startTime);
            setOutput(comps);
          }
        }).catch((error) => {
          cancelRef.current = null;
          setLoading(false);
          handleAfterRender(afterRender, current.slice(-1)[0], startTime);
          setOutput(loadError({ error }));
          throw error;
        });
      }
      handleAfterRender(afterRender, current.slice(-1)[0], startTime);
      setOutput(components);
    }).catch((error) => {
      setOutput(loadError({ error }));
      throw error;
    });
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const { childKey = "children", idKey = "path", browserRouter = false, routers = [], basepath = "", exact = false, inputPath = "", inputParams = {}, ...rest } = input;
    const base = utils_fixRoute(basepath);
    const menu = resetPath(utils_clone(routers), browserRouter, childKey, idKey, base, exact);
    inputRef.current = { ...rest, childKey, idKey, browserRouter, routers: menu, basepath: base };
    const historyEvent = browserRouter ? "popstate" : "hashchange";
    const changeEvent = () => changeRouter({});
    changeRouter({ inputPath, inputParams });
    pushEvent.on(push);
    replaceEvent.on(replace);
    window.addEventListener(historyEvent, changeEvent, false);
    return () => {
      cancelLoader();
      pushEvent.off(push);
      replaceEvent.off(replace);
      window.removeEventListener(historyEvent, changeEvent, false);
    };
  }, [input]);
  return {
    // eventBus,
    // store,
    // useStore,
    // router: {push, replace},
    updateRouter,
    output,
    loading
  };
};
/* harmony default export */ var router = (useRouter);

;// CONCATENATED MODULE: ../huxy/router/src/handleLinkClick.js



const handleLinkClick = (props) => {
  const { to, onClick, preventDefault, stopPropagation = true, exact = true, target, ...rest } = props;
  const triggerPush = () => {
    const opt = typeof to === "string" ? { exact, path: to } : { exact, ...to };
    pushEvent.emit(opt);
  };
  const handleClick = (e) => {
    var _a;
    e.preventDefault();
    if (stopPropagation) {
      e.stopPropagation();
    }
    if (rest == null ? void 0 : rest.disabled) {
      return;
    }
    if (!preventDefault) {
      if (target) {
        const { browserRouter } = routeStore.getState();
        const path = typeof to === "string" ? to : (_a = to == null ? void 0 : to.path) != null ? _a : "";
        const queryStr = utils_params2str(to == null ? void 0 : to.query);
        const noShap = browserRouter || path.indexOf("#/") > -1 || utils_isUrl(path);
        window == null ? void 0 : window.open(`${noShap ? "" : "#"}${path}${queryStr}`, target);
        return;
      }
      triggerPush();
    }
    typeof onClick === "function" && onClick();
  };
  return handleClick;
};
/* harmony default export */ var src_handleLinkClick = (handleLinkClick);

// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/router/link.less
var router_link = __webpack_require__(808);
;// CONCATENATED MODULE: ../huxy/router/link.less

      
      
      
      
      
      
      
      
      

var link_options = {};

link_options.styleTagTransform = (styleTagTransform_default());
link_options.setAttributes = (setAttributesWithoutAttributes_default());

      link_options.insert = insertBySelector_default().bind(null, "head");
    
link_options.domAPI = (styleDomAPI_default());
link_options.insertStyleElement = (insertStyleElement_default());

var link_update = injectStylesIntoStyleTag_default()(router_link/* default */.Z, link_options);




       /* harmony default export */ var huxy_router_link = (router_link/* default */.Z && router_link/* default.locals */.Z.locals ? router_link/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/router/link.jsx



const fixClassName = (className) => {
  if (!className) {
    return huxy_router_link.link;
  }
  const cls = className.trim().split(" ").filter(Boolean);
  const hasActive = cls.find((c) => c === "active");
  const activeCls = hasActive ? [huxy_router_link.active] : [];
  return [huxy_router_link.link, ...activeCls, ...cls].join(" ");
};
const Link = (props) => {
  const { to, onClick, preventDefault, stopPropagation, exact, target, className, ...rest } = props;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { onClick: src_handleLinkClick(props), className: fixClassName(className), ...rest });
};
/* harmony default export */ var huxy_router_link_0 = (Link);

;// CONCATENATED MODULE: ../huxy/router/useRoute.jsx


const useRoute = () => {
  const [info, setInfo] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(routeStore.getState());
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => routeStore.subscribe((result) => setInfo(result)), []);
  return info;
};
/* harmony default export */ var router_useRoute = (useRoute);

;// CONCATENATED MODULE: ../huxy/router/index.js




const getRoute = routeStore.getState;
const emitRoute = routeStore.subscribe;


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});