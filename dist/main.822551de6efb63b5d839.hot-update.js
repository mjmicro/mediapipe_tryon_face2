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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.size = 0;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var boundingBox;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/model.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = 'glasses';\n                boundingBox = new three__WEBPACK_IMPORTED_MODULE_8__.Box3().setFromObject(this.glasses);\n                this.size = boundingBox.getSize(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3());\n                console.log(this.size);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height); // const vFov = (camera.fov * Math.PI) / 180;\n      // const height = 2 * Math.tan(vFov / 2) * camera.position.z;\n      // const aspect = window.innerWidth / window.innerHeight;\n      // const width = height * aspect;\n      // const pixelSize = window.innerWidth * ((1 / width) * 2.2)\n      // console.log(boxSize);\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between\n        // left eye corner and right eye corner\n\n        var eyeDist = Math.sqrt(Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).x - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).x, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).y - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).y, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[234], this.width, this.height).z - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[454], this.width, this.height).z, 2));\n        var irisW = Math.sqrt(Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[131], this.width, this.height).x - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[129], this.width, this.height).x, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[131], this.width, this.height).y - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[129], this.width, this.height).y, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[131], this.width, this.height).z - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[129], this.width, this.height).z, 2));\n        var irisW2 = Math.sqrt(Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[136], this.width, this.height).x - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[134], this.width, this.height).x, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[136], this.width, this.height).y - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[129], this.width, this.height).y, 2) + Math.pow((0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[136], this.width, this.height).z - (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[129], this.width, this.height).z, 2));\n        console.log('irisW', irisW);\n        console.log('irisW2', irisW2); // const eyeDist = Math.sqrt(\n        //   ( leftEyeUpper1.x - rightEyeUpper1.x ) ** 2 +\n        //   ( leftEyeUpper1.y - rightEyeUpper1.y ) ** 2 +\n        //   ( leftEyeUpper1.z - rightEyeUpper1.z ) ** 2\n        // );\n        // 1.4 is width of 3d model of glasses\n\n        var scale = eyeDist / this.size.x;\n        console.log(eyeDist, this.size.x, scale);\n        this.glasses.scale.set(scale, scale, scale); // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        console.log(zRot, xRot, yRot);\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName('glasses');\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          https: //meet.google.com/bts-devw-eqa\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFFQyxHQUFGLEVBQU9DLEdBQVAsRUFBZ0I7QUFDaEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLGdGQUFKLEVBQWY7QUFDQU8sSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFMLElBQWIsRUFBbUIsVUFBV00sSUFBWCxFQUFrQjtBQUNuQ0osTUFBQUEsR0FBRyxDQUFFSSxJQUFJLENBQUNDLEtBQVAsQ0FBSDtBQUNELEtBRkQsRUFFR0MsU0FGSCxFQUVjLFVBQVdDLEtBQVgsRUFBbUI7QUFDN0JOLE1BQUFBLEdBQUcsQ0FBRU0sS0FBRixDQUFIO0FBQ0gsS0FKRDtBQUtILEdBUE0sQ0FBUDtBQVFEOztBQUVNLElBQU1DLE9BQWI7QUFDRSxtQkFBWUgsS0FBWixFQUFtQkksS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxXQUFMO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBO0FBQUEsaUZBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDdUJqQixTQUFTLFdBQUtILHFEQUFMLGtDQURoQzs7QUFBQTtBQUNFLHFCQUFLcUIsT0FEUDtBQUVFLHFCQUFLQSxPQUFMLENBQWFDLElBQWIsR0FBb0IsU0FBcEI7QUFFR0MsZ0JBQUFB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Q0EsWUFBSTBDLE9BQUosRUFBYTtBQUFDRyxVQUFBQSxLQUFLLEVBQUM7QUFDbEIsY0FBSUQsVUFBSixFQUFnQjtBQUNkLGlCQUFLRSxVQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFoSkg7O0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGlhcGlwZS1mYWNlbWVzaC1lZmZlY3RzLy4vc3JjL2pzL3RocmVlX2NvbXBvbmVudHMvZ2xhc3Nlcy5qcz9kYmZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgUFVCTElDX1BBVEggfSBmcm9tICcuLi9wdWJsaWNfcGF0aCc7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcydcbmltcG9ydCB7IHNjYWxlTGFuZG1hcmsgfSBmcm9tICcuLi9mYWNlbWVzaC9sYW5kbWFya3NfaGVscGVycyc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RlbCggZmlsZSApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlcywgcmVqICkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbiAgICAgIGxvYWRlci5sb2FkKCBmaWxlLCBmdW5jdGlvbiAoIGdsdGYgKSB7XG4gICAgICAgIHJlcyggZ2x0Zi5zY2VuZSApO1xuICAgICAgfSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgIHJlaiggZXJyb3IgKTtcbiAgICAgIH0gKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjbGFzcyBHbGFzc2VzIHtcbiAgY29uc3RydWN0b3Ioc2NlbmUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmxhbmRtYXJrcyA9IG51bGw7XG4gICAgdGhpcy5zaXplPTA7XG4gICAgdGhpcy5sb2FkR2xhc3NlcygpO1xuICB9XG5cbiAgYXN5bmMgbG9hZEdsYXNzZXMoKSB7XG4gICAgdGhpcy5nbGFzc2VzID0gYXdhaXQgbG9hZE1vZGVsKCBgJHtQVUJMSUNfUEFUSH0vM2QvYmxhY2stZ2xhc3Nlcy9tb2RlbC5nbHRmYCApO1xuICAgIHRoaXMuZ2xhc3Nlcy5uYW1lID0gJ2dsYXNzZXMnO1xuXG4gICBsZXQgYm91bmRpbmdCb3ggPSBuZXcgVEhSRUUuQm94MygpLnNldEZyb21PYmplY3QodGhpcy5nbGFzc2VzKTtcbiAgIHRoaXMuc2l6ZSA9IGJvdW5kaW5nQm94LmdldFNpemUobmV3IFRIUkVFLlZlY3RvcjMoKSk7XG4gICBjb25zb2xlLmxvZyh0aGlzLnNpemUpO1xuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTGFuZG1hcmtzKGxhbmRtYXJrcykge1xuICAgIHRoaXMubGFuZG1hcmtzID0gbGFuZG1hcmtzO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlR2xhc3NlcygpIHtcbiAgICBsZXQgbWlkRXllcyA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTY4XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBsZWZ0RXllSW5uZXJDb3JuZXIgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ2M10sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgcmlnaHRFeWVJbm5lckNvcm5lciA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjQzXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBub3NlQm90dG9tID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBsZWZ0RXllVXBwZXIxID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NDZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IHJpZ2h0RXllVXBwZXIxID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syMjZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cblxuXG4vLyBjb25zdCB2Rm92ID0gKGNhbWVyYS5mb3YgKiBNYXRoLlBJKSAvIDE4MDtcbi8vIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbih2Rm92IC8gMikgKiBjYW1lcmEucG9zaXRpb24uejtcbi8vIGNvbnN0IGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3Q7XG4vLyBjb25zdCBwaXhlbFNpemUgPSB3aW5kb3cuaW5uZXJXaWR0aCAqICgoMSAvIHdpZHRoKSAqIDIuMilcblxuLy8gY29uc29sZS5sb2coYm94U2l6ZSk7XG4gICAgaWYgKHRoaXMuZ2xhc3Nlcykge1xuICAgICAgLy8gcG9zaXRpb25cbiAgICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQoXG4gICAgICAgIG1pZEV5ZXMueCxcbiAgICAgICAgbWlkRXllcy55LFxuICAgICAgICBtaWRFeWVzLnosXG4gICAgICApXG5cbiAgICAgIC8vIHNjYWxlIHRvIG1ha2UgZ2xhc3Nlc1xuICAgICAgLy8gYXMgd2lkZSBhcyBkaXN0YW5jZSBiZXR3ZWVuXG4gICAgICAvLyBsZWZ0IGV5ZSBjb3JuZXIgYW5kIHJpZ2h0IGV5ZSBjb3JuZXJcbiAgICAgIGNvbnN0IGV5ZURpc3QgPSBNYXRoLnNxcnQoXG4gICAgICAgICggc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syMzRdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueCAtICBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ1NF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS54ICkgKiogMiArXG4gICAgICAgICggIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnkgLSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ1NF0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS55ICkgKiogMiArXG4gICAgICAgICggIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnogLSAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NTRdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueiApICoqIDJcbiAgICAgICk7XG4gICAgICBjb25zdCBpcmlzVyA9IE1hdGguc3FydChcbiAgICAgICAgKCBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzEzMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS54IC0gIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTI5XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnggKSAqKiAyICtcbiAgICAgICAgKCAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxMzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueSAtIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTI5XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnkgKSAqKiAyICtcbiAgICAgICAgKCAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxMzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueiAtICBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzEyOV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS56ICkgKiogMlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGlyaXNXMiA9IE1hdGguc3FydChcbiAgICAgICAgKCBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzEzNl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS54IC0gIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTM0XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnggKSAqKiAyICtcbiAgICAgICAgKCAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxMzZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueSAtIHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTI5XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLnkgKSAqKiAyICtcbiAgICAgICAgKCAgc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxMzZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkueiAtICBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzEyOV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS56ICkgKiogMlxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKCdpcmlzVycsaXJpc1cpO1xuICAgICAgY29uc29sZS5sb2coJ2lyaXNXMicsaXJpc1cyKTtcbiAgICAgIC8vIGNvbnN0IGV5ZURpc3QgPSBNYXRoLnNxcnQoXG4gICAgICAvLyAgICggbGVmdEV5ZVVwcGVyMS54IC0gcmlnaHRFeWVVcHBlcjEueCApICoqIDIgK1xuICAgICAgLy8gICAoIGxlZnRFeWVVcHBlcjEueSAtIHJpZ2h0RXllVXBwZXIxLnkgKSAqKiAyICtcbiAgICAgIC8vICAgKCBsZWZ0RXllVXBwZXIxLnogLSByaWdodEV5ZVVwcGVyMS56ICkgKiogMlxuICAgICAgLy8gKTtcbiAgICAgIC8vIDEuNCBpcyB3aWR0aCBvZiAzZCBtb2RlbCBvZiBnbGFzc2VzXG4gICAgICBsZXQgc2NhbGUgPSAoZXllRGlzdCkvIHRoaXMuc2l6ZS54O1xuICAgICAgIGNvbnNvbGUubG9nKGV5ZURpc3QsdGhpcy5zaXplLngsc2NhbGUpXG4gICAgICB0aGlzLmdsYXNzZXMuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuXG4gICAgICAvLyB1c2UgdHdvIHZlY3RvcnMgdG8gcm90YXRlIGdsYXNzZXNcbiAgICAgIC8vIFZlcnRpY2FsIFZlY3RvciBmcm9tIG1pZEV5ZXMgdG8gbm9zZUJvdHRvbVxuICAgICAgLy8gaXMgdXNlZCBmb3IgY2FsY3VsYXRpbmcgcm90YXRpb24gYXJvdW5kIHggYW5kIHogYXhpc1xuICAgICAgLy8gSG9yaXpvbnRhbCBWZWN0b3IgZnJvbSBsZWZ0RXllQ29ybmVyIHRvIHJpZ2h0RXllQ29ybmVyXG4gICAgICAvLyB1cyB1c2UgdG8gY2FsY3VsYXRlIHJvdGF0aW9uIGFyb3VuZCB5IGF4aXNcbiAgICAgIGxldCB1cFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICBtaWRFeWVzLnggLSBub3NlQm90dG9tLngsXG4gICAgICAgIG1pZEV5ZXMueSAtIG5vc2VCb3R0b20ueSxcbiAgICAgICAgbWlkRXllcy56IC0gbm9zZUJvdHRvbS56LFxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnggLSByaWdodEV5ZUlubmVyQ29ybmVyLngsXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci55IC0gcmlnaHRFeWVJbm5lckNvcm5lci55LFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueiAtIHJpZ2h0RXllSW5uZXJDb3JuZXIueixcbiAgICAgICkubm9ybWFsaXplKCk7XG5cbiAgICAgIGxldCB6Um90ID0gKG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApKS5hbmdsZVRvKFxuICAgICAgICB1cFZlY3Rvci5jbG9uZSgpLnByb2plY3RPblBsYW5lKFxuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpXG4gICAgICAgIClcbiAgICAgICkgLSAoTWF0aC5QSSAvIDIpXG5cbiAgICAgIGxldCB4Um90ID0gKE1hdGguUEkgLyAyKSAtIChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSkuYW5nbGVUbyhcbiAgICAgICAgdXBWZWN0b3IuY2xvbmUoKS5wcm9qZWN0T25QbGFuZShcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBsZXQgeVJvdCA9ICAoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHNpZGVWZWN0b3IueCwgMCwgc2lkZVZlY3Rvci56KVxuICAgICAgKS5hbmdsZVRvKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpKSAtIChNYXRoLlBJIC8gMik7XG4gICAgICBjb25zb2xlLmxvZyh6Um90LHhSb3QseVJvdClcbiAgICAgIHRoaXMuZ2xhc3Nlcy5yb3RhdGlvbi5zZXQoeFJvdCwgeVJvdCwgelJvdCk7XG5cbiAgICB9XG4gIH1cblxuICBhZGRHbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmdsYXNzZXMpIHtcbiAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ2xhc3Nlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlR2xhc3NlcygpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmdsYXNzZXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5lZWRzVXBkYXRlKSB7XG4gICAgICBsZXQgaW5TY2VuZSA9ICEhdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoJ2dsYXNzZXMnKTtcbiAgICAgIGxldCBzaG91bGRTaG93ID0gISF0aGlzLmxhbmRtYXJrcztcbiAgICAgIGlmIChpblNjZW5lKSB7aHR0cHM6Ly9tZWV0Lmdvb2dsZS5jb20vYnRzLWRldnctZXFhXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgdGhpcy5hZGRHbGFzc2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJQVUJMSUNfUEFUSCIsIkdMVEZMb2FkZXIiLCJzY2FsZUxhbmRtYXJrIiwibG9hZE1vZGVsIiwiZmlsZSIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjZW5lIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJHbGFzc2VzIiwid2lkdGgiLCJoZWlnaHQiLCJuZWVkc1VwZGF0ZSIsImxhbmRtYXJrcyIsInNpemUiLCJsb2FkR2xhc3NlcyIsImdsYXNzZXMiLCJuYW1lIiwiYm91bmRpbmdCb3giLCJCb3gzIiwic2V0RnJvbU9iamVjdCIsImdldFNpemUiLCJWZWN0b3IzIiwiY29uc29sZSIsImxvZyIsIm1pZEV5ZXMiLCJsZWZ0RXllSW5uZXJDb3JuZXIiLCJyaWdodEV5ZUlubmVyQ29ybmVyIiwibm9zZUJvdHRvbSIsImxlZnRFeWVVcHBlcjEiLCJyaWdodEV5ZVVwcGVyMSIsInBvc2l0aW9uIiwic2V0IiwieCIsInkiLCJ6IiwiZXllRGlzdCIsIk1hdGgiLCJzcXJ0IiwiaXJpc1ciLCJpcmlzVzIiLCJzY2FsZSIsInVwVmVjdG9yIiwibm9ybWFsaXplIiwic2lkZVZlY3RvciIsInpSb3QiLCJhbmdsZVRvIiwiY2xvbmUiLCJwcm9qZWN0T25QbGFuZSIsIlBJIiwieFJvdCIsInlSb3QiLCJyb3RhdGlvbiIsImFkZCIsInJlbW92ZSIsImluU2NlbmUiLCJnZXRPYmplY3RCeU5hbWUiLCJzaG91bGRTaG93IiwiaHR0cHMiLCJhZGRHbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});