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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherApihandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherApihandler */ \"./src/modules/weatherApihandler.js\");\n\n\nasync function init() {\n\tconst data = await _modules_weatherApihandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(\"Auckland\", \"Metric\");\n\tconsole.log(data);\n\n\tconst weather = document.getElementById(\"weather-desc\");\n\tconst city = document.getElementById(\"city\");\n\tconst temp = document.getElementById(\"temp\");\n\tconst feel = document.getElementById(\"feels-like\");\n\tconst wind = document.getElementById(\"wind\");\n\tconst humidity = document.getElementById(\"humidity\");\n\n\tweather.innerHTML = data.weather[0].main;\n\tcity.innerHTML = ` ${data.name}, ${data.sys.country}`;\n\n\tconst tempRounded = Math.round(data.main.temp).toString();\n\ttemp.innerHTML = ` ${tempRounded}&#8451;`;\n\n\tconst feelRounded = Math.round(data.main.feels_like).toString();\n\tfeel.innerHTML += ` ${feelRounded}&#8451;`;\n\n\tconst windRounded = Math.round(data.wind.speed).toString();\n\twind.innerHTML += ` ${windRounded}km/h`;\n\n\thumidity.innerHTML += `${data.main.humidity}%`;\n}\n\ninit();\n\n// radio button for units\n// 100 vh div with body background\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/weatherApihandler.js":
/*!******************************************!*\
  !*** ./src/modules/weatherApihandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherApihandler = (() => {\n  async function getWeatherData(cityName, units) {\n    const url = buildLocationUrl(cityName, units);\n\n    const response = await fetch(url, { mode: \"cors\" });\n    const data = await response.json();\n    return data;\n  }\n\n  const buildLocationUrl = (cityName, units) => {\n    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f2cac786360dcbdab66d346e21f80e14&units=${units}`;\n  };\n\n  return {\n    getWeatherData,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherApihandler);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherApihandler.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;