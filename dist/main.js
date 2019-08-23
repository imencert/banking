/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header */ \"./src/layout/header.js\");\n/* harmony import */ var _pages_account_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/account/account */ \"./src/pages/account/account.js\");\n/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer */ \"./src/layout/footer.js\");\n\n\n\n\n_layout_header__WEBPACK_IMPORTED_MODULE_1__[\"header\"].init();\n_pages_account_account__WEBPACK_IMPORTED_MODULE_2__[\"account\"].init();\n_layout_footer__WEBPACK_IMPORTED_MODULE_3__[\"footer\"].init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layout/footer.js":
/*!******************************!*\
  !*** ./src/layout/footer.js ***!
  \******************************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footer\", function() { return footer; });\nvar footer = function () {\n  return {\n    init: function init() {\n      console.log(\"footer\");\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/layout/footer.js?");

/***/ }),

/***/ "./src/layout/header.js":
/*!******************************!*\
  !*** ./src/layout/header.js ***!
  \******************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\nvar header = function () {\n  return {\n    init: function init() {\n      console.log(\"header\");\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/layout/header.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/*! exports provided: element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\nvar element = function () {\n  return {\n    init: function init(el, id, content, parent) {\n      var element = document.createElement(el);\n\n      if (id) {\n        element.id = id;\n      }\n\n      element.innerHTML = content;\n      document.getElementById(parent).appendChild(element);\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nvar list = function () {\n  return {\n    init: function init(container, data) {\n      var ul = document.createElement('ul');\n      document.getElementById(container).appendChild(ul);\n      data.forEach(function (object) {\n        var li = document.createElement('li');\n        ul.appendChild(li);\n        li.innerHTML += object.id;\n      });\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/request.js":
/*!********************************!*\
  !*** ./src/modules/request.js ***!
  \********************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony import */ var _pages_account_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/account/account */ \"./src/pages/account/account.js\");\n\n\nvar request = function () {\n  return {\n    fetch: function (_fetch) {\n      function fetch(_x) {\n        return _fetch.apply(this, arguments);\n      }\n\n      fetch.toString = function () {\n        return _fetch.toString();\n      };\n\n      return fetch;\n    }(function (url) {\n      fetch(url, {\n        mode: 'cors'\n      }).then(function (response) {\n        if (response.status >= 200 && response.status < 300) {\n          return Promise.resolve(response);\n        } else {\n          return Promise.reject(new Error(response.statusText));\n        }\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        //if(url === 'https://my-json-server.typicode.com/imencert/data/db') {\n        _pages_account_account__WEBPACK_IMPORTED_MODULE_0__[\"account\"].getData(data); //}\n      })[\"catch\"](function () {\n        return null;\n      });\n    })\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/request.js?");

/***/ }),

/***/ "./src/pages/account/account.js":
/*!**************************************!*\
  !*** ./src/pages/account/account.js ***!
  \**************************************/
/*! exports provided: account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"account\", function() { return account; });\n/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/request */ \"./src/modules/request.js\");\n/* harmony import */ var _sections_accountDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/accountDetails */ \"./src/pages/account/sections/accountDetails.js\");\n/* harmony import */ var _sections_accountTransitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/accountTransitions */ \"./src/pages/account/sections/accountTransitions.js\");\n\n\n\n\nvar account = function () {\n  return {\n    init: function init() {\n      this.requestData();\n    },\n    requestData: function requestData() {\n      _modules_request__WEBPACK_IMPORTED_MODULE_0__[\"request\"].fetch('https://my-json-server.typicode.com/imencert/data/db');\n    },\n    getData: function getData(data) {\n      console.log('data', data);\n      this.renderPage(data);\n    },\n    renderPage: function renderPage(data) {\n      _sections_accountDetails__WEBPACK_IMPORTED_MODULE_1__[\"accountDetails\"].init(data.details);\n      _sections_accountTransitions__WEBPACK_IMPORTED_MODULE_2__[\"accountTransitions\"].init(data.transitions);\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/pages/account/account.js?");

/***/ }),

/***/ "./src/pages/account/sections/accountDetails.js":
/*!******************************************************!*\
  !*** ./src/pages/account/sections/accountDetails.js ***!
  \******************************************************/
/*! exports provided: accountDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accountDetails\", function() { return accountDetails; });\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/element */ \"./src/modules/element.js\");\n\n\nvar accountDetails = function () {\n  return {\n    init: function init(data) {\n      this.initElements(data);\n    },\n    initElements: function initElements(data) {\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('div', 'account-details', null, 'root');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('h2', null, 'My Account', 'account-details');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('p', null, data.account_number, 'account-details');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('p', null, data.sort_code, 'account-details');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('p', null, data.IBAN, 'account-details');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('h3', null, data.balance, 'account-details');\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/pages/account/sections/accountDetails.js?");

/***/ }),

/***/ "./src/pages/account/sections/accountTransitions.js":
/*!**********************************************************!*\
  !*** ./src/pages/account/sections/accountTransitions.js ***!
  \**********************************************************/
/*! exports provided: accountTransitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accountTransitions\", function() { return accountTransitions; });\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/list */ \"./src/modules/list.js\");\n\n\n\nvar accountTransitions = function (data) {\n  return {\n    init: function init(data) {\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('div', 'account-transitions', null, 'root');\n      _modules_element__WEBPACK_IMPORTED_MODULE_0__[\"element\"].init('h2', null, 'My Transitions', 'account-transitions');\n      _modules_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"].init('account-transitions', data); //use table\n    }\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/pages/account/sections/accountTransitions.js?");

/***/ })

/******/ });