/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/fondo-movie.jpg":
/*!******************************!*\
  !*** ./dist/fondo-movie.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b349ae2e256ba6e727fe.jpg\";\n\n//# sourceURL=webpack://my-weather-app/./dist/fondo-movie.jpg?");

/***/ }),

/***/ "./dist/fondo-movil.jpg":
/*!******************************!*\
  !*** ./dist/fondo-movil.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41cd606b70caa2d834b0.jpg\";\n\n//# sourceURL=webpack://my-weather-app/./dist/fondo-movil.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dist_fondo_movie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/fondo-movie.jpg */ \"./dist/fondo-movie.jpg\");\n/* harmony import */ var _dist_fondo_movil_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/fondo-movil.jpg */ \"./dist/fondo-movil.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_dist_fondo_movie_jpg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_dist_fondo_movil_jpg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.call-to-action {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center;\\n  background-size: cover;\\n  min-height: 88vh;\\n}\\n\\n#units-btn {\\n  right: 5px;\\n  top: 5px;\\n  margin-left: 15px;\\n  width: 30px;\\n  height: 30px;\\n  z-index: 1000;\\n}\\n\\n.h1 {\\n  /*font-family: sans-serif;*/\\n  letter-spacing: -4px;\\n  /*font-size: 6em;*/\\n  font-stretch: condensed;\\n}\\n\\nsup {\\n  font-size: 0.5em;\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .call-to-action {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center center;\\n    background-size: cover;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-data */ \"./src/render-data.js\");\n\n\nconst flash = document.getElementById('flash'); // for showing errors\n\nasync function fetchWeather(location) {\n  const api = '1627b8ae6ced3746531173abad9b4d06';\n  const unit = 'metric'; // imperial\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,\n      { mode: 'cors' },\n    );\n    const weatherData = await response.json();\n    const data = {};\n    data.temp = Math.floor(weatherData.list[0].main.temp);\n    data.feelsLike = Math.floor(weatherData.list[0].main.feels_like);\n    data.humidity = weatherData.list[0].main.humidity;\n    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain\n    data.weatherIcon = weatherData.list[0].weather[0].icon;\n    data.code = weatherData.list[0].weather[0].id;\n    data.windSpeed = weatherData.list[0].wind.speed;\n    data.city = weatherData.city.name;\n    data.country = weatherData.city.country;\n    data.sunrise = weatherData.city.sunrise;\n    data.timezone = weatherData.city.timezone;\n    return data;\n  } catch (error) {\n    flash.style.display = '';\n    flash.textContent = '👎 Sorry, there was an error when fetching data';\n  }\n  return true;\n}\n\nconst getDate = (sun, time) => {\n  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };\n  const date = new Date((sun + time) * 1000);\n\n  const localTime = date.toLocaleDateString('en-US', options);\n  return localTime;\n};\n\nconst convertToFahrenheit = () => {\n  const button = document.getElementById('units-btn');\n  const curUnit = document.getElementById('unitChar');\n  const celsValue = document.getElementById('value');\n  let farhValue = Math.floor((celsValue.firstChild.textContent * (9 / 5)) + 32);\n  button.addEventListener('click', () => {\n    [curUnit.textContent, button.textContent] = [button.textContent, curUnit.textContent];\n    [celsValue.firstChild.textContent, farhValue] = [farhValue, celsValue.firstChild.textContent];\n  });\n};\n\nasync function fetchData() {\n  const location = document.querySelector('input').value;\n  flash.style.display = 'none';\n  if (location.length > 3) {\n    try {\n      const data = await fetchWeather(location);\n      const localTime = getDate(data.sunrise, data.timezone);\n      (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.changeBackground)(data.code);\n      (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.renderData)(data, localTime);\n    } catch (error) {\n      flash.style.display = '';\n      flash.textContent = '👎 Sorry, No data about that location';\n    }\n  } else {\n    flash.style.display = '';\n    flash.textContent = '👶 Sorry, city needs to be at least 4 chars';\n  }\n  convertToFahrenheit();\n  document.querySelector('input').value = '';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://my-weather-app/./src/fetch-data.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes),\n/* harmony export */   \"autoFocus\": () => (/* binding */ autoFocus)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n};\n\nconst autoFocus = (i) => {\n  const input = document.querySelector(i);\n  setAttributes(input, { required: '', autofocus: '' });\n};\n\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ \"./src/fetch-data.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n(0,_helper__WEBPACK_IMPORTED_MODULE_1__.autoFocus)('input'); // deals w a bug that keeps from validation from html5 required\n\ndocument.getElementById('fetch').addEventListener('click', _fetch_data__WEBPACK_IMPORTED_MODULE_0__.default);\n\nwindow.addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') (0,_fetch_data__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\n\n//# sourceURL=webpack://my-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render-data.js":
/*!****************************!*\
  !*** ./src/render-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData),\n/* harmony export */   \"changeBackground\": () => (/* binding */ changeBackground)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst renderData = (data, localTime) => {\n  const newDataArea = document.querySelector('.container.mt-5');\n  newDataArea.innerHTML = '';\n  const mainRow = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row justify-content-center rounded p-1 pb-4');\n  mainRow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';\n  const col1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col-md-6 col-lg-4');\n  const col2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col col-lg-4 col-md-6 pt-2');\n  const row1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const row2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const iconBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const tempBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col position-relative mr-2');\n  const emptyBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col d-none d-md-block');\n  const data1Box = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const unitsBtn = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'position-absolute border rounded');\n  unitsBtn.setAttribute('role', 'button');\n  unitsBtn.setAttribute('title', 'Press to swith °C to °F');\n  unitsBtn.id = 'units-btn';\n  const icon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('img', 'class', 'float-left');\n  const temp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'h1 display-1 mr-4');\n  temp.id = 'value';\n  const empty = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p');\n  const gradeChar = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('sup');\n  const unit = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('span');\n  unit.id = 'unitChar';\n  const feels = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const humid = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const wind = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const city = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h4 pt-3');\n  const time = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h5');\n  const desc = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h5');\n\n  icon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;\n  temp.textContent = `${data.temp}`;\n  gradeChar.textContent = '°';\n  unit.textContent = 'C';\n  unitsBtn.textContent = 'F';\n  feels.textContent = `Feels like: ${data.feelsLike}°C`;\n  humid.textContent = `Humidity: ${data.humidity}%`;\n  wind.textContent = `Wind: ${data.windSpeed} km/h`;\n  city.textContent = `${data.city}, ${data.country}`;\n  time.textContent = localTime;\n  desc.textContent = `${data.weatherDescription} (code ${data.code})`;\n\n  iconBox.appendChild(icon);\n  tempBox.appendChild(temp);\n  temp.append(gradeChar, unit);\n  emptyBox.appendChild(empty);\n  row1.append(unitsBtn, iconBox, tempBox, emptyBox);\n  data1Box.append(feels, humid, wind);\n  row2.appendChild(data1Box);\n  col1.append(row1, row2);\n  col2.append(city, time, desc);\n  mainRow.append(col1, col2);\n  newDataArea.appendChild(mainRow);\n\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.autoFocus)('input');\n};\n\nconst changeBackground = (code) => {\n  const bg = document.querySelector('section');\n  const wGroup = code.toString()[0];\n\n  switch (wGroup) {\n    case '2':\n      bg.style.background = 'url(\"./200.jpg\") center center / cover no-repeat';\n      break;\n    case '3':\n      bg.style.background = 'url(\"./300.jpg\") center center / cover no-repeat';\n      break;\n    case '5':\n      if (code === 500) {\n        bg.style.background = 'url(\"500.jpg\") center center / cover no-repeat';\n      } else if (code === 501) {\n        bg.style.background = 'url(\"./501.jpg\") center center / cover no-repeat';\n      } else if (code === 502) {\n        bg.style.background = 'url(\"./502.jpg\") center center / cover no-repeat';\n      } else {\n        bg.style.background = 'url(\"./503.jpg\") center center / cover no-repeat';\n      }\n      break;\n    case '6':\n      bg.style.background = 'url(\"./600.jpg\") center center / cover no-repeat';\n      break;\n    case '7':\n      bg.style.background = 'url(\"./701.jpg\") center center / cover no-repeat';\n      break;\n    case '8':\n      if (code === 800) {\n        bg.style.background = 'url(\"./800.jpg\") center center / cover no-repeat';\n      } else if (code === 801) {\n        bg.style.background = 'url(\"./801.jpg\") center center / cover no-repeat';\n      } else if (code === 802) {\n        bg.style.background = 'url(\"./802.jpg\") center center / cover no-repeat';\n      } else if (code === 803) {\n        bg.style.background = 'url(\"./803.jpg\") center center / cover no-repeat';\n      } else {\n        bg.style.background = 'url(\"./804.jpg\") center center / cover no-repeat';\n      }\n      break;\n    default:\n      break;\n  }\n};\n\n\n//# sourceURL=webpack://my-weather-app/./src/render-data.js?");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;