"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemediapipe_facemesh_effects"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #000;\\n  color: #fff;\\n}\\n/* column wise on mobile */\\n.video-container {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 1024px;\\n  margin: 0 auto;\\n  position: relative;\\n}\\n\\n.video-container > div {\\n  flex: 1;\\n  margin-bottom: 20px;\\n  margin-left: 20px;\\n  margin-right: 20px;\\n}\\n\\n.video-container h2 {\\n  font-family: serif;\\n}\\n\\n.video-container.loading > .loader {\\n  display: flex;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background: rgba(255, 255, 255, 0.5);\\n  z-index: 999;\\n}\\n\\n.video-container > .loader {\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem;\\n  color: #000;\\n}\\n\\n/* side by side on desktop  */\\n@media screen and (min-width: 900px) {\\n  .video-container {\\n    flex-direction: row;\\n  }\\n}\\n\\n.input_video {\\n  width: 100%;\\n  height: auto;\\n}\\n.input_video {\\n  transform: scale(-1, 1);\\n  }\\n  \\n.output_canvas {\\n  width: 100%;\\n  height: auto;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA,0BAA0B;AAC1B;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;;AAEA,6BAA6B;AAC7B;EACE;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,uBAAuB;EACvB;;AAEF;EACE,WAAW;EACX,YAAY;AACd\",\"sourcesContent\":[\"body {\\n  background: #000;\\n  color: #fff;\\n}\\n/* column wise on mobile */\\n.video-container {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 1024px;\\n  margin: 0 auto;\\n  position: relative;\\n}\\n\\n.video-container > div {\\n  flex: 1;\\n  margin-bottom: 20px;\\n  margin-left: 20px;\\n  margin-right: 20px;\\n}\\n\\n.video-container h2 {\\n  font-family: serif;\\n}\\n\\n.video-container.loading > .loader {\\n  display: flex;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background: rgba(255, 255, 255, 0.5);\\n  z-index: 999;\\n}\\n\\n.video-container > .loader {\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem;\\n  color: #000;\\n}\\n\\n/* side by side on desktop  */\\n@media screen and (min-width: 900px) {\\n  .video-container {\\n    flex-direction: row;\\n  }\\n}\\n\\n.input_video {\\n  width: 100%;\\n  height: auto;\\n}\\n.input_video {\\n  transform: scale(-1, 1);\\n  }\\n  \\n.output_canvas {\\n  width: 100%;\\n  height: auto;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMuY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxxQkFBcUIsZ0JBQWdCLEdBQUcsaURBQWlELGtCQUFrQiwyQkFBMkIsc0JBQXNCLG1CQUFtQix1QkFBdUIsR0FBRyw0QkFBNEIsWUFBWSx3QkFBd0Isc0JBQXNCLHVCQUF1QixHQUFHLHlCQUF5Qix1QkFBdUIsR0FBRyx3Q0FBd0Msa0JBQWtCLHVCQUF1QixXQUFXLGNBQWMsWUFBWSxhQUFhLHlDQUF5QyxpQkFBaUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLGdCQUFnQixHQUFHLDBFQUEwRSxzQkFBc0IsMEJBQTBCLEtBQUssR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQiw0QkFBNEIsS0FBSyxzQkFBc0IsZ0JBQWdCLGlCQUFpQixHQUFHLE9BQU8saUZBQWlGLFlBQVksV0FBVyxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSwrQkFBK0IscUJBQXFCLGdCQUFnQixHQUFHLGlEQUFpRCxrQkFBa0IsMkJBQTJCLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsNEJBQTRCLFlBQVksd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcsd0NBQXdDLGtCQUFrQix1QkFBdUIsV0FBVyxjQUFjLFlBQVksYUFBYSx5Q0FBeUMsaUJBQWlCLEdBQUcsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixnQkFBZ0IsR0FBRywwRUFBMEUsc0JBQXNCLDBCQUEwQixLQUFLLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0IsNEJBQTRCLEtBQUssc0JBQXNCLGdCQUFnQixpQkFBaUIsR0FBRyxtQkFBbUI7QUFDdmxGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpYXBpcGUtZmFjZW1lc2gtZWZmZWN0cy8uL3NyYy9zdHlsZXMuY3NzP2U5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLyogY29sdW1uIHdpc2Ugb24gbW9iaWxlICovXFxuLnZpZGVvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi52aWRlby1jb250YWluZXIgPiBkaXYge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnZpZGVvLWNvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxufVxcblxcbi52aWRlby1jb250YWluZXIubG9hZGluZyA+IC5sb2FkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnZpZGVvLWNvbnRhaW5lciA+IC5sb2FkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBzaWRlIGJ5IHNpZGUgb24gZGVza3RvcCAgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLnZpZGVvLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi5pbnB1dF92aWRlbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmlucHV0X3ZpZGVvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgfVxcbiAgXFxuLm91dHB1dF9jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCOztBQUVGO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLyogY29sdW1uIHdpc2Ugb24gbW9iaWxlICovXFxuLnZpZGVvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi52aWRlby1jb250YWluZXIgPiBkaXYge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnZpZGVvLWNvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxufVxcblxcbi52aWRlby1jb250YWluZXIubG9hZGluZyA+IC5sb2FkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLnZpZGVvLWNvbnRhaW5lciA+IC5sb2FkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKiBzaWRlIGJ5IHNpZGUgb24gZGVza3RvcCAgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLnZpZGVvLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi5pbnB1dF92aWRlbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmlucHV0X3ZpZGVvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgfVxcbiAgXFxuLm91dHB1dF9jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/styles.css\n");

/***/ })

});