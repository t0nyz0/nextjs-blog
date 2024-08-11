"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            if (typeof window.gtag !== \"undefined\") {\n                window.gtag(\"config\", \"G-00000000000\", {\n                    page_path: url\n                });\n            }\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Insert Google Analytics script\n        const script = document.createElement(\"script\");\n        script.src = `https://www.googletagmanager.com/gtag/js?id=G-000000000`; // Enter google ID here\n        script.async = true;\n        document.head.appendChild(script);\n        script.onload = ()=>{\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n                window.dataLayer.push(arguments);\n            }\n            window.gtag = gtag; // Assign gtag function to window object\n            gtag(\"js\", new Date());\n            gtag(\"config\", \"G-0000000000\"); // Enter google ID here\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/tony/Development/nextjs-blog/pages/_app.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNNO0FBRXhDLFNBQVNFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTSxvQkFBb0IsQ0FBQ0MsTUFBUTtZQUNqQyxJQUFJLE9BQU9DLE9BQU9DLElBQUksS0FBSyxhQUFhO2dCQUN0Q0QsT0FBT0MsSUFBSSxDQUFDLFVBQVUsaUJBQWlCO29CQUNyQ0MsV0FBV0g7Z0JBQ2I7WUFDRixDQUFDO1FBQ0g7UUFFQUYsT0FBT00sTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCTjtRQUN4QyxPQUFPLElBQU07WUFDWEQsT0FBT00sTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCUDtRQUMzQztJQUNGLEdBQUc7UUFBQ0QsT0FBT00sTUFBTTtLQUFDO0lBRWxCWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsaUNBQWlDO1FBQ2pDLE1BQU1jLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csR0FBRyxHQUFHLENBQUMsdURBQXVELENBQUMsRUFBRSx1QkFBdUI7UUFDL0ZILE9BQU9JLEtBQUssR0FBRyxJQUFJO1FBQ25CSCxTQUFTSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ047UUFFMUJBLE9BQU9PLE1BQU0sR0FBRyxJQUFNO1lBQ3BCYixPQUFPYyxTQUFTLEdBQUdkLE9BQU9jLFNBQVMsSUFBSSxFQUFFO1lBQ3pDLFNBQVNiLE9BQU87Z0JBQ2RELE9BQU9jLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQztZQUN4QjtZQUNBaEIsT0FBT0MsSUFBSSxHQUFHQSxNQUFPLHdDQUF3QztZQUM3REEsS0FBSyxNQUFNLElBQUlnQjtZQUNmaEIsS0FBSyxVQUFVLGlCQUFpQix1QkFBdUI7UUFDekQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ047UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ibG9nLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5ndGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgJ0ctMDAwMDAwMDAwMDAnLCB7ICAgLy8gRW50ZXIgZ29vZ2xlIElEIGhlcmVcbiAgICAgICAgICBwYWdlX3BhdGg6IHVybCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbnNlcnQgR29vZ2xlIEFuYWx5dGljcyBzY3JpcHRcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry0wMDAwMDAwMDBgOyAvLyBFbnRlciBnb29nbGUgSUQgaGVyZVxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgZnVuY3Rpb24gZ3RhZygpIHtcbiAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuZ3RhZyA9IGd0YWc7ICAvLyBBc3NpZ24gZ3RhZyBmdW5jdGlvbiB0byB3aW5kb3cgb2JqZWN0XG4gICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpOyBcbiAgICAgIGd0YWcoJ2NvbmZpZycsICdHLTAwMDAwMDAwMDAnKTsgLy8gRW50ZXIgZ29vZ2xlIElEIGhlcmVcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnRzIiwib24iLCJvZmYiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsImRhdGFMYXllciIsInB1c2giLCJhcmd1bWVudHMiLCJEYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();