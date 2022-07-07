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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.size = 0;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var boundingBox;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/oculos.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = 'glasses';\n                boundingBox = new three__WEBPACK_IMPORTED_MODULE_8__.Box3().setFromObject(this.glasses);\n                this.size = boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3());\n                console.log(this.size);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height); // const vFov = (camera.fov * Math.PI) / 180;\n      // const height = 2 * Math.tan(vFov / 2) * camera.position.z;\n      // const aspect = window.innerWidth / window.innerHeight;\n      // const width = height * aspect;\n      // const pixelSize = window.innerWidth * ((1 / width) * 2.2)\n      // console.log(boxSize);\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between\n        // left eye corner and right eye corner\n        // const eyeDist = Math.sqrt(\n        //   ( scaleLandmark(this.landmarks[234], this.width, this.height).x -  scaleLandmark(this.landmarks[454], this.width, this.height).x ) ** 2 +\n        //   (  scaleLandmark(this.landmarks[234], this.width, this.height).y - scaleLandmark(this.landmarks[454], this.width, this.height).y ) ** 2 +\n        //   (  scaleLandmark(this.landmarks[234], this.width, this.height).z -  scaleLandmark(this.landmarks[454], this.width, this.height).z ) ** 2\n        // );\n\n        var eyeDist = Math.sqrt(Math.pow(leftEyeUpper1.x - rightEyeUpper1.x, 2) + Math.pow(leftEyeUpper1.y - rightEyeUpper1.y, 2) + Math.pow(leftEyeUpper1.z - rightEyeUpper1.z, 2)); // 1.4 is width of 3d model of glasses\n\n        var scale = eyeDist / this.size.x;\n        console.log(eyeDist, this.size.x, scale);\n        this.glasses.scale.set(scale, scale, scale); // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName('glasses');\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          shouldShow ? this.updateGlasses() : this.removeGlasses();\n        } else {\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFFQyxHQUFGLEVBQU9DLEdBQVAsRUFBZ0I7QUFDaEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLGdGQUFKLEVBQWY7QUFDQU8sSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFMLElBQWIsRUFBbUIsVUFBV00sSUFBWCxFQUFrQjtBQUNuQ0osTUFBQUEsR0FBRyxDQUFFSSxJQUFJLENBQUNDLEtBQVAsQ0FBSDtBQUNELEtBRkQsRUFFR0MsU0FGSCxFQUVjLFVBQVdDLEtBQVgsRUFBbUI7QUFDN0JOLE1BQUFBLEdBQUcsQ0FBRU0sS0FBRixDQUFIO0FBQ0gsS0FKRDtBQUtILEdBUE0sQ0FBUDtBQVFEOztBQUVNLElBQU1DLE9BQWI7QUFDRSxtQkFBWUgsS0FBWixFQUFtQkksS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBO0FBQUEsaUZBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDdUJqQixTQUFTLFdBQUtILHFEQUFMLG1DQURoQzs7QUFBQTtBQUNFLHFCQUFLcUIsT0FEUDtBQUVFLHFCQUFLQSxPQUFMLENBQWFDLElBQWIsR0FBb0IsU0FBcEI7QUFFR0MsZ0JBQUFB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cy8uL3NyYy9qcy90aHJlZV9jb21wb25lbnRzL2dsYXNzZXMuanM/ZGJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IFBVQkxJQ19QQVRIIH0gZnJvbSAnLi4vcHVibGljX3BhdGgnO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnXG5pbXBvcnQgeyBzY2FsZUxhbmRtYXJrIH0gZnJvbSAnLi4vZmFjZW1lc2gvbGFuZG1hcmtzX2hlbHBlcnMnO1xuXG5mdW5jdGlvbiBsb2FkTW9kZWwoIGZpbGUgKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSggKCByZXMsIHJlaiApID0+IHtcbiAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgICBsb2FkZXIubG9hZCggZmlsZSwgZnVuY3Rpb24gKCBnbHRmICkge1xuICAgICAgICByZXMoIGdsdGYuc2NlbmUgKTtcbiAgICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCBlcnJvciApIHtcbiAgICAgICAgICByZWooIGVycm9yICk7XG4gICAgICB9ICk7XG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgR2xhc3NlcyB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5sYW5kbWFya3MgPSBudWxsO1xuICAgIHRoaXMuc2l6ZT0wO1xuICAgIHRoaXMubG9hZEdsYXNzZXMoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRHbGFzc2VzKCkge1xuICAgIHRoaXMuZ2xhc3NlcyA9IGF3YWl0IGxvYWRNb2RlbCggYCR7UFVCTElDX1BBVEh9LzNkL2JsYWNrLWdsYXNzZXMvb2N1bG9zLmdsdGZgICk7XG4gICAgdGhpcy5nbGFzc2VzLm5hbWUgPSAnZ2xhc3Nlcyc7XG5cbiAgIGxldCBib3VuZGluZ0JveCA9IG5ldyBUSFJFRS5Cb3gzKCkuc2V0RnJvbU9iamVjdCh0aGlzLmdsYXNzZXMpXG4gICB0aGlzLnNpemUgPSBib3VuZGluZ0JveC5nZXRTaXplKG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuY29uc29sZS5sb2codGhpcy5zaXplKTtcbiAgfVxuXG4gIHVwZGF0ZURpbWVuc2lvbnMod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUxhbmRtYXJrcyhsYW5kbWFya3MpIHtcbiAgICB0aGlzLmxhbmRtYXJrcyA9IGxhbmRtYXJrcztcbiAgICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUdsYXNzZXMoKSB7XG4gICAgbGV0IG1pZEV5ZXMgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzE2OF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgbGVmdEV5ZUlubmVyQ29ybmVyID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NjNdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IHJpZ2h0RXllSW5uZXJDb3JuZXIgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzI0M10sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgbm9zZUJvdHRvbSA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgbGVmdEV5ZVVwcGVyMSA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDQ2XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCByaWdodEV5ZVVwcGVyMSA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjI2XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG5cblxuLy8gY29uc3QgdkZvdiA9IChjYW1lcmEuZm92ICogTWF0aC5QSSkgLyAxODA7XG4vLyBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4odkZvdiAvIDIpICogY2FtZXJhLnBvc2l0aW9uLno7XG4vLyBjb25zdCBhc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbi8vIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0O1xuLy8gY29uc3QgcGl4ZWxTaXplID0gd2luZG93LmlubmVyV2lkdGggKiAoKDEgLyB3aWR0aCkgKiAyLjIpXG5cbi8vIGNvbnNvbGUubG9nKGJveFNpemUpO1xuICAgIGlmICh0aGlzLmdsYXNzZXMpIHtcbiAgICAgIC8vIHBvc2l0aW9uXG4gICAgICB0aGlzLmdsYXNzZXMucG9zaXRpb24uc2V0KFxuICAgICAgICBtaWRFeWVzLngsXG4gICAgICAgIG1pZEV5ZXMueSxcbiAgICAgICAgbWlkRXllcy56LFxuICAgICAgKVxuXG4gICAgICAvLyBzY2FsZSB0byBtYWtlIGdsYXNzZXNcbiAgICAgIC8vIGFzIHdpZGUgYXMgZGlzdGFuY2UgYmV0d2VlblxuICAgICAgLy8gbGVmdCBleWUgY29ybmVyIGFuZCByaWdodCBleWUgY29ybmVyXG4gICAgICAvLyBjb25zdCBleWVEaXN0ID0gTWF0aC5zcXJ0KFxuICAgICAgLy8gICAoIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnggLSAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NTRdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueCApICoqIDIgK1xuICAgICAgLy8gICAoICBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzIzNF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS55IC0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NTRdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueSApICoqIDIgK1xuICAgICAgLy8gICAoICBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzIzNF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS56IC0gIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDU0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnogKSAqKiAyXG4gICAgICAvLyApO1xuICAgICAgY29uc3QgZXllRGlzdCA9IE1hdGguc3FydChcbiAgICAgICAgKCBsZWZ0RXllVXBwZXIxLnggLSByaWdodEV5ZVVwcGVyMS54ICkgKiogMiArXG4gICAgICAgICggbGVmdEV5ZVVwcGVyMS55IC0gcmlnaHRFeWVVcHBlcjEueSApICoqIDIgK1xuICAgICAgICAoIGxlZnRFeWVVcHBlcjEueiAtIHJpZ2h0RXllVXBwZXIxLnogKSAqKiAyXG4gICAgICApO1xuICAgICAgLy8gMS40IGlzIHdpZHRoIG9mIDNkIG1vZGVsIG9mIGdsYXNzZXNcbiAgICAgIGxldCBzY2FsZSA9IGV5ZURpc3QgLyB0aGlzLnNpemUueDtcbiAgICAgICBjb25zb2xlLmxvZyhleWVEaXN0LHRoaXMuc2l6ZS54LHNjYWxlKVxuICAgICAgdGhpcy5nbGFzc2VzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcblxuICAgICAgLy8gdXNlIHR3byB2ZWN0b3JzIHRvIHJvdGF0ZSBnbGFzc2VzXG4gICAgICAvLyBWZXJ0aWNhbCBWZWN0b3IgZnJvbSBtaWRFeWVzIHRvIG5vc2VCb3R0b21cbiAgICAgIC8vIGlzIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHJvdGF0aW9uIGFyb3VuZCB4IGFuZCB6IGF4aXNcbiAgICAgIC8vIEhvcml6b250YWwgVmVjdG9yIGZyb20gbGVmdEV5ZUNvcm5lciB0byByaWdodEV5ZUNvcm5lclxuICAgICAgLy8gdXMgdXNlIHRvIGNhbGN1bGF0ZSByb3RhdGlvbiBhcm91bmQgeSBheGlzXG4gICAgICBsZXQgdXBWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbWlkRXllcy54IC0gbm9zZUJvdHRvbS54LFxuICAgICAgICBtaWRFeWVzLnkgLSBub3NlQm90dG9tLnksXG4gICAgICAgIG1pZEV5ZXMueiAtIG5vc2VCb3R0b20ueixcbiAgICAgICkubm9ybWFsaXplKCk7XG5cbiAgICAgIGxldCBzaWRlVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci54IC0gcmlnaHRFeWVJbm5lckNvcm5lci54LFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueSAtIHJpZ2h0RXllSW5uZXJDb3JuZXIueSxcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnogLSByaWdodEV5ZUlubmVyQ29ybmVyLnosXG4gICAgICApLm5vcm1hbGl6ZSgpO1xuXG4gICAgICBsZXQgelJvdCA9IChuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSkuYW5nbGVUbyhcbiAgICAgICAgdXBWZWN0b3IuY2xvbmUoKS5wcm9qZWN0T25QbGFuZShcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKVxuICAgICAgICApXG4gICAgICApIC0gKE1hdGguUEkgLyAyKVxuXG4gICAgICBsZXQgeFJvdCA9IChNYXRoLlBJIC8gMikgLSAobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkpLmFuZ2xlVG8oXG4gICAgICAgIHVwVmVjdG9yLmNsb25lKCkucHJvamVjdE9uUGxhbmUoXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMClcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgbGV0IHlSb3QgPSAgKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzaWRlVmVjdG9yLngsIDAsIHNpZGVWZWN0b3IueilcbiAgICAgICkuYW5nbGVUbyhuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSkgLSAoTWF0aC5QSSAvIDIpO1xuICAgICAgXG4gICAgICB0aGlzLmdsYXNzZXMucm90YXRpb24uc2V0KHhSb3QsIHlSb3QsIHpSb3QpO1xuXG4gICAgfVxuICB9XG5cbiAgYWRkR2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy5nbGFzc2VzKSB7XG4gICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUdsYXNzZXMoKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5nbGFzc2VzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5uZWVkc1VwZGF0ZSkge1xuICAgICAgbGV0IGluU2NlbmUgPSAhIXRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCdnbGFzc2VzJyk7XG4gICAgICBsZXQgc2hvdWxkU2hvdyA9ICEhdGhpcy5sYW5kbWFya3M7XG4gICAgICBpZiAoaW5TY2VuZSkge1xuICAgICAgICBzaG91bGRTaG93ID8gdGhpcy51cGRhdGVHbGFzc2VzKCkgOiB0aGlzLnJlbW92ZUdsYXNzZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgdGhpcy5hZGRHbGFzc2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJQVUJMSUNfUEFUSCIsIkdMVEZMb2FkZXIiLCJzY2FsZUxhbmRtYXJrIiwibG9hZE1vZGVsIiwiZmlsZSIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjZW5lIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJHbGFzc2VzIiwid2lkdGgiLCJoZWlnaHQiLCJuZWVkc1VwZGF0ZSIsImxhbmRtYXJrcyIsInNpemUiLCJsb2FkR2xhc3NlcyIsImdsYXNzZXMiLCJuYW1lIiwiYm91bmRpbmdCb3giLCJCb3gzIiwic2V0RnJvbU9iamVjdCIsImdldFNpemUiLCJWZWN0b3IzIiwiY29uc29sZSIsImxvZyIsIm1pZEV5ZXMiLCJsZWZ0RXllSW5uZXJDb3JuZXIiLCJyaWdodEV5ZUlubmVyQ29ybmVyIiwibm9zZUJvdHRvbSIsImxlZnRFeWVVcHBlcjEiLCJyaWdodEV5ZVVwcGVyMSIsInBvc2l0aW9uIiwic2V0IiwieCIsInkiLCJ6IiwiZXllRGlzdCIsIk1hdGgiLCJzcXJ0Iiwic2NhbGUiLCJ1cFZlY3RvciIsIm5vcm1hbGl6ZSIsInNpZGVWZWN0b3IiLCJ6Um90IiwiYW5nbGVUbyIsImNsb25lIiwicHJvamVjdE9uUGxhbmUiLCJQSSIsInhSb3QiLCJ5Um90Iiwicm90YXRpb24iLCJhZGQiLCJyZW1vdmUiLCJpblNjZW5lIiwiZ2V0T2JqZWN0QnlOYW1lIiwic2hvdWxkU2hvdyIsInVwZGF0ZUdsYXNzZXMiLCJyZW1vdmVHbGFzc2VzIiwiYWRkR2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});