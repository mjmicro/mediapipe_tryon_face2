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

/***/ "./src/js/three_components/glasses.js":
/*!********************************************!*\
  !*** ./src/js/three_components/glasses.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.size = 0;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var boundingBox;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/oculos.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = \"glasses\"; // calculate width(size) of glasses\n\n                boundingBox = new three__WEBPACK_IMPORTED_MODULE_8__.Box3().setFromObject(this.glasses);\n                this.size = boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3());\n                console.log(this.size);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height);\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between \n        // face left corner and right side\n\n        var eyeDist = Math.sqrt(Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).x - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).x, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).y - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).y, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).z - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).z, 2)); // 1.4 is width of 3d model of default glasses\n\n        var scale = eyeDist / this.size.x;\n        console.log(eyeDist, this.size.x, scale);\n        this.glasses.scale.set(scale, scale, scale); // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        console.log(zRot, xRot, yRot);\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName(\"glasses\");\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          shouldShow ? this.updateGlasses() : this.removeGlasses();\n        } else {\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQixRQUFNQyxNQUFNLEdBQUcsSUFBSVAsZ0ZBQUosRUFBZjtBQUNBTyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FDRUwsSUFERixFQUVFLFVBQVVNLElBQVYsRUFBZ0I7QUFDZEosTUFBQUEsR0FBRyxDQUFDSSxJQUFJLENBQUNDLEtBQU4sQ0FBSDtBQUNELEtBSkgsRUFLRUMsU0FMRixFQU1FLFVBQVVDLEtBQVYsRUFBaUI7QUFDZk4sTUFBQUEsR0FBRyxDQUFDTSxLQUFELENBQUg7QUFDRCxLQVJIO0FBVUQsR0FaTSxDQUFQO0FBYUQ7O0FBRU0sSUFBTUMsT0FBYjtBQUNFLG1CQUFZSCxLQUFaLEVBQW1CSSxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLFdBQUw7QUFDRDs7QUFUSDtBQUFBO0FBQUE7QUFBQSxpRkFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1QmpCLFNBQVMsV0FDekJILHFEQUR5QixtQ0FEaEM7O0FBQUE7QUFDRSxxQkFBS3FCLE9BRFA7QUFJRSxxQkFBS0EsT0FBTCxDQUFhQyxJQUFiLEdBQW9CLFNBQXBCLENBSkYsQ0FNRTs7QUFD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QTtBQUFBLFdBK0hFLHlCQUFnQjtBQUNkLFdBQUtWLEtBQUwsQ0FBVzhDLE1BQVgsQ0FBa0IsS0FBS3BDLE9BQXZCO0FBQ0Q7QUFqSUg7QUFBQTtBQUFBLFdBbUlFLGtCQUFTO0FBQ1AsVUFBSSxLQUFLSixXQUFULEVBQXNCO0FBQ3BCLFlBQUl5QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUsvQyxLQUFMLENBQVdnRCxlQUFYLENBQTJCLFNBQTNCLENBQWhCO0FBQ0EsWUFBSUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLMUMsU0FBeEI7O0FBQ0EsWUFBSXdDLE9BQUosRUFBYTtBQUNYRSxVQUFBQSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFILEdBQTBCLEtBQUtDLGFBQUwsRUFBcEM7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJRixVQUFKLEVBQWdCO0FBQ2QsaUJBQUtHLFVBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQS9JSDs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWFwaXBlLWZhY2VtZXNoLWVmZmVjdHMvLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzP2RiZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBQVUJMSUNfUEFUSCB9IGZyb20gXCIuLi9wdWJsaWNfcGF0aFwiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzXCI7XG5pbXBvcnQgeyBzY2FsZUxhbmRtYXJrIH0gZnJvbSBcIi4uL2ZhY2VtZXNoL2xhbmRtYXJrc19oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIGxvYWRNb2RlbChmaWxlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKFxuICAgICAgZmlsZSxcbiAgICAgIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgICAgIHJlcyhnbHRmLnNjZW5lKTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqKGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIEdsYXNzZXMge1xuICBjb25zdHJ1Y3RvcihzY2VuZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMubGFuZG1hcmtzID0gbnVsbDtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMubG9hZEdsYXNzZXMoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRHbGFzc2VzKCkge1xuICAgIHRoaXMuZ2xhc3NlcyA9IGF3YWl0IGxvYWRNb2RlbChcbiAgICAgIGAke1BVQkxJQ19QQVRIfS8zZC9ibGFjay1nbGFzc2VzL29jdWxvcy5nbHRmYFxuICAgICk7XG4gICAgdGhpcy5nbGFzc2VzLm5hbWUgPSBcImdsYXNzZXNcIjtcblxuICAgIC8vIGNhbGN1bGF0ZSB3aWR0aChzaXplKSBvZiBnbGFzc2VzXG4gICAgbGV0IGJvdW5kaW5nQm94ID0gbmV3IFRIUkVFLkJveDMoKS5zZXRGcm9tT2JqZWN0KHRoaXMuZ2xhc3Nlcyk7XG4gICAgdGhpcy5zaXplID0gYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNpemUpO1xuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTGFuZG1hcmtzKGxhbmRtYXJrcykge1xuICAgIHRoaXMubGFuZG1hcmtzID0gbGFuZG1hcmtzO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlR2xhc3NlcygpIHtcbiAgICBsZXQgbWlkRXllcyA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTY4XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBsZWZ0RXllSW5uZXJDb3JuZXIgPSBzY2FsZUxhbmRtYXJrKFxuICAgICAgdGhpcy5sYW5kbWFya3NbNDYzXSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gICAgbGV0IHJpZ2h0RXllSW5uZXJDb3JuZXIgPSBzY2FsZUxhbmRtYXJrKFxuICAgICAgdGhpcy5sYW5kbWFya3NbMjQzXSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gICAgbGV0IG5vc2VCb3R0b20gPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzJdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IGxlZnRFeWVVcHBlcjEgPSBzY2FsZUxhbmRtYXJrKFxuICAgICAgdGhpcy5sYW5kbWFya3NbNDQ2XSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gICAgbGV0IHJpZ2h0RXllVXBwZXIxID0gc2NhbGVMYW5kbWFyayhcbiAgICAgIHRoaXMubGFuZG1hcmtzWzIyNl0sXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuZ2xhc3Nlcykge1xuICAgICAgLy8gcG9zaXRpb25cbiAgICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQobWlkRXllcy54LCBtaWRFeWVzLnksIG1pZEV5ZXMueik7XG5cbiAgICAgIC8vIHNjYWxlIHRvIG1ha2UgZ2xhc3Nlc1xuICAgICAgLy8gYXMgd2lkZSBhcyBkaXN0YW5jZSBiZXR3ZWVuIFxuICAgICAgLy8gZmFjZSBsZWZ0IGNvcm5lciBhbmQgcmlnaHQgc2lkZVxuICAgICAgY29uc3QgZXllRGlzdCA9IE1hdGguc3FydChcbiAgICAgICAgKHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnggLVxuICAgICAgICAgIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDU0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLngpICoqXG4gICAgICAgICAgMiArXG4gICAgICAgICAgKHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnkgLVxuICAgICAgICAgICAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NTRdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueSkgKipcbiAgICAgICAgICAgIDIgK1xuICAgICAgICAgIChzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzIzNF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS56IC1cbiAgICAgICAgICAgIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDU0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnopICoqXG4gICAgICAgICAgICAyXG4gICAgICApO1xuXG4gICAgICAvLyAxLjQgaXMgd2lkdGggb2YgM2QgbW9kZWwgb2YgZGVmYXVsdCBnbGFzc2VzXG4gICAgICBsZXQgc2NhbGUgPSBleWVEaXN0IC8gdGhpcy5zaXplLng7XG4gICAgICBjb25zb2xlLmxvZyhleWVEaXN0LCB0aGlzLnNpemUueCwgc2NhbGUpO1xuICAgICAgdGhpcy5nbGFzc2VzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcblxuICAgICAgLy8gdXNlIHR3byB2ZWN0b3JzIHRvIHJvdGF0ZSBnbGFzc2VzXG4gICAgICAvLyBWZXJ0aWNhbCBWZWN0b3IgZnJvbSBtaWRFeWVzIHRvIG5vc2VCb3R0b21cbiAgICAgIC8vIGlzIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHJvdGF0aW9uIGFyb3VuZCB4IGFuZCB6IGF4aXNcbiAgICAgIC8vIEhvcml6b250YWwgVmVjdG9yIGZyb20gbGVmdEV5ZUNvcm5lciB0byByaWdodEV5ZUNvcm5lclxuICAgICAgLy8gdXMgdXNlIHRvIGNhbGN1bGF0ZSByb3RhdGlvbiBhcm91bmQgeSBheGlzXG4gICAgICBsZXQgdXBWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbWlkRXllcy54IC0gbm9zZUJvdHRvbS54LFxuICAgICAgICBtaWRFeWVzLnkgLSBub3NlQm90dG9tLnksXG4gICAgICAgIG1pZEV5ZXMueiAtIG5vc2VCb3R0b20uelxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnggLSByaWdodEV5ZUlubmVyQ29ybmVyLngsXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci55IC0gcmlnaHRFeWVJbm5lckNvcm5lci55LFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueiAtIHJpZ2h0RXllSW5uZXJDb3JuZXIuelxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHpSb3QgPVxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKS5hbmdsZVRvKFxuICAgICAgICAgIHVwVmVjdG9yLmNsb25lKCkucHJvamVjdE9uUGxhbmUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkpXG4gICAgICAgICkgLVxuICAgICAgICBNYXRoLlBJIC8gMjtcblxuICAgICAgbGV0IHhSb3QgPVxuICAgICAgICBNYXRoLlBJIC8gMiAtXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLmFuZ2xlVG8oXG4gICAgICAgICAgdXBWZWN0b3IuY2xvbmUoKS5wcm9qZWN0T25QbGFuZShuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSlcbiAgICAgICAgKTtcblxuICAgICAgbGV0IHlSb3QgPVxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzaWRlVmVjdG9yLngsIDAsIHNpZGVWZWN0b3IueikuYW5nbGVUbyhcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKVxuICAgICAgICApIC1cbiAgICAgICAgTWF0aC5QSSAvIDI7XG4gICAgICBjb25zb2xlLmxvZyh6Um90LCB4Um90LCB5Um90KTtcbiAgICAgIHRoaXMuZ2xhc3Nlcy5yb3RhdGlvbi5zZXQoeFJvdCwgeVJvdCwgelJvdCk7XG4gICAgfVxuICB9XG5cbiAgYWRkR2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy5nbGFzc2VzKSB7XG4gICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUdsYXNzZXMoKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5nbGFzc2VzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5uZWVkc1VwZGF0ZSkge1xuICAgICAgbGV0IGluU2NlbmUgPSAhIXRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKFwiZ2xhc3Nlc1wiKTtcbiAgICAgIGxldCBzaG91bGRTaG93ID0gISF0aGlzLmxhbmRtYXJrcztcbiAgICAgIGlmIChpblNjZW5lKSB7XG4gICAgICAgIHNob3VsZFNob3cgPyB0aGlzLnVwZGF0ZUdsYXNzZXMoKSA6IHRoaXMucmVtb3ZlR2xhc3NlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICB0aGlzLmFkZEdsYXNzZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiUFVCTElDX1BBVEgiLCJHTFRGTG9hZGVyIiwic2NhbGVMYW5kbWFyayIsImxvYWRNb2RlbCIsImZpbGUiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJzY2VuZSIsInVuZGVmaW5lZCIsImVycm9yIiwiR2xhc3NlcyIsIndpZHRoIiwiaGVpZ2h0IiwibmVlZHNVcGRhdGUiLCJsYW5kbWFya3MiLCJzaXplIiwibG9hZEdsYXNzZXMiLCJnbGFzc2VzIiwibmFtZSIsImJvdW5kaW5nQm94IiwiQm94MyIsInNldEZyb21PYmplY3QiLCJnZXRTaXplIiwiVmVjdG9yMyIsImNvbnNvbGUiLCJsb2ciLCJtaWRFeWVzIiwibGVmdEV5ZUlubmVyQ29ybmVyIiwicmlnaHRFeWVJbm5lckNvcm5lciIsIm5vc2VCb3R0b20iLCJsZWZ0RXllVXBwZXIxIiwicmlnaHRFeWVVcHBlcjEiLCJwb3NpdGlvbiIsInNldCIsIngiLCJ5IiwieiIsImV5ZURpc3QiLCJNYXRoIiwic3FydCIsInNjYWxlIiwidXBWZWN0b3IiLCJub3JtYWxpemUiLCJzaWRlVmVjdG9yIiwielJvdCIsImFuZ2xlVG8iLCJjbG9uZSIsInByb2plY3RPblBsYW5lIiwiUEkiLCJ4Um90IiwieVJvdCIsInJvdGF0aW9uIiwiYWRkIiwicmVtb3ZlIiwiaW5TY2VuZSIsImdldE9iamVjdEJ5TmFtZSIsInNob3VsZFNob3ciLCJ1cGRhdGVHbGFzc2VzIiwicmVtb3ZlR2xhc3NlcyIsImFkZEdsYXNzZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});