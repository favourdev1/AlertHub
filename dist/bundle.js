/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alerthub.js":
/*!*************************!*\
  !*** ./src/alerthub.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst icon = __webpack_require__(/*! ./icon */ \"./src/icon.js\");\r\n\r\n\r\nclass AlertHub extends icon {\r\n    constructor(params = {}) {\r\n        super();\r\n        const parentElement = \"body\";\r\n        this.defaultExitButtonSize = 20;\r\n        this.defaultAnimationName = \"\";\r\n        this.maxLength = 150;\r\n        this.alertContainer = document.createElement(\"div\");\r\n        this.alertContainer.className = \"alert-hub-container \";\r\n        document.querySelector(parentElement).appendChild(this.alertContainer);\r\n        let {\r\n            position = \"top-right\",\r\n                type = \"info\",\r\n                timeout = 2,\r\n                closeButton = true,\r\n                closeButtonSize = this.defaultExitButtonSize,\r\n                animation = \"no-animation\",\r\n                icon = \"\",\r\n        } = params;\r\n\r\n        this.position = position;\r\n        this.type = type;\r\n        this.timeout = timeout;\r\n        this.closeButton = closeButton;\r\n        this.closeButtonSize = closeButtonSize;\r\n        this.animation = animation;\r\n        this.icon = icon;\r\n    }\r\n\r\n    showAlert(params) {\r\n        let {\r\n            title = \"\",\r\n                description,\r\n                position = this.position,\r\n                type = this.type,\r\n                timeout = this.timeout,\r\n                closeButton = this.closeButton,\r\n                closeButtonSize = this.closeButtonSize,\r\n                animation = this.animation,\r\n                icon = this.icon,\r\n                showIcon = true,\r\n        } = params;\r\n\r\n        this.defaultAnimationName = animation;\r\n\r\n        if (closeButtonSize < 15 || closeButtonSize > 30) {\r\n            closeButtonSize = this.ResetCloseButtonSize();\r\n        }\r\n\r\n        const secondsTimeOut = this.timeInMilliseconds(timeout);\r\n\r\n        const alertBox = this.createAlertBox(\r\n            title,\r\n            description,\r\n            type,\r\n            animation,\r\n            closeButton,\r\n            closeButtonSize,\r\n            showIcon,\r\n            position\r\n        );\r\n\r\n        this.configureAlertContainer();\r\n        this.alertContainer.appendChild(alertBox);\r\n\r\n        if (closeButton) {\r\n            this.CloseAlertOnClick(alertBox);\r\n        }\r\n\r\n        this.timeoutAfter(secondsTimeOut, alertBox);\r\n    }\r\n\r\n    addIcon(alertType) {\r\n        let iconImage;\r\n        switch (alertType) {\r\n            case \"success\":\r\n                iconImage = this.SuccessIcon();\r\n                break;\r\n            case \"error\":\r\n                iconImage = this.ErrorIcon();\r\n                break;\r\n\r\n            default:\r\n                iconImage = document.createElement(\"div\");\r\n                break;\r\n        }\r\n\r\n        return iconImage;\r\n    }\r\n\r\n    addAnimation(animationName) {\r\n        let animation = {\r\n            \"opening-animation\": \"\",\r\n            \"closing-animation\": \"\",\r\n        };\r\n\r\n        switch (animationName) {\r\n            case \"fade-in\":\r\n                animation[\"opening-animation\"] = \"fade-in\";\r\n                animation[\"closing-animation\"] = \"fade-out\";\r\n                break;\r\n            case \"slide-in\":\r\n                animation[\"opening-animation\"] = \"slide-in\";\r\n                animation[\"closing-animation\"] = \"slide-out\";\r\n                break;\r\n\r\n            case \"slide-in-right\":\r\n                animation[\"opening-animation\"] = \"slide-in-right\";\r\n                animation[\"closing-animation\"] = \"slide-out-right\";\r\n                break;\r\n\r\n            case \"slide-in-left\":\r\n                animation[\"opening-animation\"] = \"slide-in-left\";\r\n                animation[\"closing-animation\"] = \"slide-out-left\";\r\n                break;\r\n\r\n            default:\r\n                animation[\"opening-animation\"] = \"\";\r\n                animation[\"closing-animation\"] = \"\";\r\n        }\r\n\r\n        return animation;\r\n    }\r\n\r\n    createAlertBox(\r\n        title,\r\n        description,\r\n        type,\r\n        animation,\r\n        closeButton,\r\n        closeButtonSize,\r\n        showIcon,\r\n        position\r\n    ) {\r\n        const alertBox = document.createElement(\"div\");\r\n        alertBox.className = `alert-hub  ${position} ${type} ${animation}`;\r\n\r\n        if (showIcon) {\r\n            alertBox.appendChild(this.addIcon(type));\r\n        }\r\n        // console.log(this.addIcon(type));\r\n        const contentContainer = document.createElement(\"div\");\r\n        contentContainer.style.width = \"90%\";\r\n        contentContainer.style.paddingRight = \"50px\";\r\n\r\n        contentContainer.appendChild(this.titleText(title));\r\n\r\n        contentContainer.appendChild(this.descriptionText(description));\r\n        if (closeButton) {\r\n            contentContainer.appendChild(this.createCloseButtonSvg(closeButtonSize));\r\n        }\r\n        alertBox.append(contentContainer);\r\n        return alertBox;\r\n    }\r\n\r\n    titleText(content) {\r\n        const titletext = document.createElement(\"h2\");\r\n        titletext.innerHTML = content;\r\n        return titletext;\r\n    }\r\n\r\n    descriptionText(content) {\r\n        const descriptiontext = document.createElement(\"p\");\r\n        descriptiontext.innerHTML = content;\r\n\r\n        return this.setMaxDescriptionLength(this.maxLength, descriptiontext);\r\n    }\r\n\r\n    CloseAlert(alertBox) {\r\n        let animation = this.addAnimation(this.defaultAnimationName);\r\n\r\n        alertBox.classList.replace(\r\n            animation[\"opening-animation\"],\r\n            animation[\"closing-animation\"]\r\n        );\r\n\r\n        alertBox.addEventListener(\"animationend\", () => {\r\n            this.alertContainer.removeChild(alertBox);\r\n        });\r\n    }\r\n\r\n    ResetCloseButtonSize() {\r\n        return this.defaultExitButtonSize;\r\n    }\r\n\r\n    configureAlertContainer() {\r\n        this.alertContainer.className = `alert-hub-container `;\r\n    }\r\n\r\n    setMaxDescriptionLength(length, description) {\r\n        if (description.length > length) {\r\n            description = description.substring(0, length);\r\n        }\r\n        return description;\r\n    }\r\n\r\n    createCloseButtonSvg(size) {\r\n        return ` <\r\n            svg class = \"alert-hub-close-button\"\r\n            height = \"${size}\"\r\n            xmlns = \"http://www.w3.org/2000/svg\"\r\n            fill = \"none\"\r\n            viewBox = \"0 0 24 24\"\r\n            stroke - width = \"1.5\"\r\n            stroke = \"currentColor\" >\r\n                <\r\n                path stroke - linecap = \"round\"\r\n            stroke - linejoin = \"round\"\r\n            d = \"M6 18L18 6M6 6l12 12\" / >\r\n                <\r\n                /svg>\r\n            `;\r\n    }\r\n\r\n    CloseAlertOnClick(alertBox) {\r\n        const closeButtonElement = alertBox.querySelector(\r\n            `.alert-hub-close-button `\r\n        );\r\n        closeButtonElement.addEventListener(\"click\", () => {\r\n            this.CloseAlert(alertBox);\r\n        });\r\n    }\r\n\r\n    timeoutAfter(timeout, alertBox) {\r\n        if (timeout < 0) {\r\n            return;\r\n        }\r\n        setTimeout(() => {\r\n            this.CloseAlert(alertBox);\r\n        }, timeout);\r\n    }\r\n\r\n    timeInMilliseconds(timeInput) {\r\n        return timeInput * 1000;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertHub);\n\n//# sourceURL=webpack://alerthub/./src/alerthub.js?");

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((module) => {

eval("class icon {\r\n\r\n    SuccessIcon() {\r\n        // Create an SVG element\r\n        const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n        svg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\r\n        svg.setAttribute(\"fill\", \"none\");\r\n        svg.style.width = '25px'\r\n        svg.style.marginRight = '10px'\r\n        svg.setAttribute(\"viewBox\", \"0 0 24 24\");\r\n        svg.setAttribute(\"stroke-width\", \"1.5\");\r\n        svg.setAttribute(\"stroke\", \"currentColor\");\r\n        svg.setAttribute(\"class\", \"w-4 h-4\");\r\n\r\n        // Create a path element and set attributes\r\n        const path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\r\n        path.setAttribute(\"stroke-linecap\", \"round\");\r\n        path.setAttribute(\"stroke-linejoin\", \"round\");\r\n        path.setAttribute(\"d\", \"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z\");\r\n\r\n        // Append the path element to the SVG element\r\n        svg.appendChild(path);\r\n        // Return the created SVG element\r\n        return svg;\r\n    }\r\n\r\n    ErrorIcon() {\r\n        // Create an SVG element\r\n        const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n        svg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\r\n        svg.setAttribute(\"fill\", \"none\");\r\n        svg.style.width = '25px'\r\n        svg.style.marginRight = '10px'\r\n        svg.setAttribute(\"viewBox\", \"0 0 24 24\");\r\n        svg.setAttribute(\"stroke-width\", \"1.5\");\r\n        svg.setAttribute(\"stroke\", \"currentColor\");\r\n        svg.setAttribute(\"class\", \"w-4 h-4\");\r\n\r\n        // Create a path element and set attributes\r\n        const path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\r\n        path.setAttribute(\"stroke-linecap\", \"round\");\r\n        path.setAttribute(\"stroke-linejoin\", \"round\");\r\n        path.setAttribute(\"d\", \"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z\");\r\n\r\n        // Append the path element to the SVG element\r\n        svg.appendChild(path);\r\n\r\n        // Return the created SVG element\r\n        return svg;\r\n    }\r\n\r\n\r\n    InfoIcon() {\r\n        const svg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\r\n        svg.setAttribute(\"xmlns\", \"http://www.w3.org/2000/svg\");\r\n        svg.setAttribute(\"fill\", \"none\");\r\n        svg.style.width = '25px'\r\n        svg.style.marginRight = '10px'\r\n        svg.setAttribute(\"viewBox\", \"0 0 24 24\");\r\n        svg.setAttribute(\"stroke-width\", \"1.5\");\r\n        svg.setAttribute(\"stroke\", \"currentColor\");\r\n        svg.classList.add(\"w-6\", \"h-6\");\r\n\r\n        const path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\r\n        path.setAttribute(\"stroke-linecap\", \"round\");\r\n        path.setAttribute(\"stroke-linejoin\", \"round\");\r\n        path.setAttribute(\r\n            \"d\",\r\n            \"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z\"\r\n        );\r\n\r\n        svg.appendChild(path);\r\n\r\n        return svg;\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = icon;\n\n//# sourceURL=webpack://alerthub/./src/icon.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/alerthub.js");
/******/ 	
/******/ })()
;