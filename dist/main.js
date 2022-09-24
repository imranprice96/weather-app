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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherApihandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherApihandler */ \"./src/modules/weatherApihandler.js\");\n/* harmony import */ var _modules_weatherEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherEventHandler */ \"./src/modules/weatherEventHandler.js\");\n/* harmony import */ var _modules_weatherInputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weatherInputHandler */ \"./src/modules/weatherInputHandler.js\");\n\n\n\n\nasync function init() {\n\tconst data = await _modules_weatherApihandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherData(\"Auckland\", \"Metric\");\n\t_modules_weatherInputHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayData(data);\n}\n\ninit();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/weatherApihandler.js":
/*!******************************************!*\
  !*** ./src/modules/weatherApihandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherEventHandler */ \"./src/modules/weatherEventHandler.js\");\n\n\nconst weatherApihandler = (() => {\n\tasync function getWeatherData(cityName) {\n\t\tconst url = buildLocationUrl(cityName);\n\n\t\tlet response = await fetch(url, { mode: \"cors\" });\n\t\tif (response.status !== 200) {\n\t\t\tthrow new Error(response.status);\n\t\t} else {\n\t\t\tconst data = await response.json();\n\t\t\treturn data;\n\t\t}\n\t}\n\n\tconst buildLocationUrl = (cityName = \"Auckland\") => {\n\t\treturn `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f2cac786360dcbdab66d346e21f80e14&units=Metric`;\n\t};\n\n\treturn {\n\t\tgetWeatherData,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherApihandler);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherApihandler.js?");

/***/ }),

/***/ "./src/modules/weatherEventHandler.js":
/*!********************************************!*\
  !*** ./src/modules/weatherEventHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherInputHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInputHandler */ \"./src/modules/weatherInputHandler.js\");\n/* harmony import */ var _weatherApihandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherApihandler */ \"./src/modules/weatherApihandler.js\");\n\n\n\nconst weatherEventHandler = (() => {\n\tconst btn = document.getElementById(\"search-btn\");\n\tbtn.addEventListener(\"click\", () => {\n\t\tsearchCity();\n\t});\n\tconst searchBox = document.getElementById(\"search-input\");\n\tsearchBox.addEventListener(\"keypress\", (e) => {\n\t\tif (e.key === \"Enter\") {\n\t\t\tbtn.click();\n\t\t}\n\t});\n\n\tasync function searchCity() {\n\t\ttry {\n\t\t\tconst input = await _weatherInputHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInput();\n\t\t\tconst data = await _weatherApihandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeatherData(input);\n\t\t\t_weatherInputHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayData(data);\n\t\t} catch (error) {\n\t\t\tconst input = document.getElementById(\"search-input\");\n\t\t\tif (input.value != \"\") {\n\t\t\t\tinput.setCustomValidity(\"City not found\");\n\t\t\t\tinput.reportValidity();\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tresetInput();\n\t\t\t\t\tinput.setCustomValidity(\"\");\n\t\t\t\t}, 2000);\n\t\t\t}\n\t\t}\n\t}\n\n\tconst resetInput = () => {\n\t\tdocument.getElementById(\"search-input\").value = \"\";\n\t};\n\n\treturn {};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherEventHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherEventHandler.js?");

/***/ }),

/***/ "./src/modules/weatherInputHandler.js":
/*!********************************************!*\
  !*** ./src/modules/weatherInputHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherInputHandler = (() => {\n\tconst trimCityName = (cityName) => {\n\t\treturn cityName\n\t\t\t.toString()\n\t\t\t.replace(/(\\s+$|^\\s+)/g, \"\")\n\t\t\t.replace(/(,\\s+)/g, \",\")\n\t\t\t.replace(/(\\s+,)/g, \",\")\n\t\t\t.replace(/\\s+/g, \"+\");\n\t};\n\n\tconst getInput = () => {\n\t\treturn trimCityName(document.getElementById(\"search-input\").value);\n\t};\n\n\tconst displayData = (data) => {\n\t\tconst weather = document.getElementById(\"weather-desc\");\n\t\tconst city = document.getElementById(\"city\");\n\t\tconst temp = document.getElementById(\"temp\");\n\t\tconst feel = document.getElementById(\"feels-like\");\n\t\tconst wind = document.getElementById(\"wind\");\n\t\tconst humidity = document.getElementById(\"humidity\");\n\n\t\tweather.innerHTML = data.weather[0].main;\n\t\tcity.innerHTML = ` ${data.name}, ${data.sys.country}`;\n\n\t\tconst tempRounded = Math.round(data.main.temp).toString();\n\t\ttemp.innerHTML = ` ${tempRounded}&#8451;`;\n\n\t\tconst feelRounded = Math.round(data.main.feels_like).toString();\n\t\tfeel.innerHTML = `Feels like: ${feelRounded}&#8451;`;\n\n\t\tconst windRounded = Math.round(data.wind.speed).toString();\n\t\twind.innerHTML = `Wind: ${windRounded}km/h`;\n\n\t\thumidity.innerHTML = `Humidity: ${data.main.humidity}%`;\n\t};\n\n\treturn {\n\t\tgetInput,\n\t\tdisplayData,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherInputHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherInputHandler.js?");

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