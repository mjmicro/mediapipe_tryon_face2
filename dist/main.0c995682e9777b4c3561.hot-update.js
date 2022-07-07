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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/model.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = 'glasses';\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height);\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between\n        // left eye corner and right eye corner\n\n        var eyeDist = Math.sqrt(Math.pow(leftEyeUpper1.x - rightEyeUpper1.x, 2) + Math.pow(leftEyeUpper1.y - rightEyeUpper1.y, 2) + Math.pow(leftEyeUpper1.z - rightEyeUpper1.z, 2)); // 1.4 is width of 3d model of glasses\n\n        var scale = eyeDist / 1.4;\n        console.log(sc);\n        this.glasses.scale.set(scale, scale, scale); // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName('glasses');\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          shouldShow ? this.updateGlasses() : this.removeGlasses();\n        } else {\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFFQyxHQUFGLEVBQU9DLEdBQVAsRUFBZ0I7QUFDaEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLGdGQUFKLEVBQWY7QUFDQU8sSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFMLElBQWIsRUFBbUIsVUFBV00sSUFBWCxFQUFrQjtBQUNuQ0osTUFBQUEsR0FBRyxDQUFFSSxJQUFJLENBQUNDLEtBQVAsQ0FBSDtBQUNELEtBRkQsRUFFR0MsU0FGSCxFQUVjLFVBQVdDLEtBQVgsRUFBbUI7QUFDN0JOLE1BQUFBLEdBQUcsQ0FBRU0sS0FBRixDQUFIO0FBQ0gsS0FKRDtBQUtILEdBUE0sQ0FBUDtBQVFEOztBQUVNLElBQU1DLE9BQWI7QUFDRSxtQkFBWUgsS0FBWixFQUFtQkksS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsV0FBTDtBQUNEOztBQVJIO0FBQUE7QUFBQTtBQUFBLGlGQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1QmhCLFNBQVMsV0FBS0gscURBQUwsa0NBRGhDOztBQUFBO0FBQ0UscUJBQUtvQixPQURQO0FBRUUscUJBQUtBLE9BQUwsQ0FBYUMsSUFBYixHQUFvQixTQUFwQjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVZGOztB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QixPQUFULEVBQWtCO0FBQ2hCLGFBQUtULEtBQUwsQ0FBV3lDLEdBQVgsQ0FBZSxLQUFLaEMsT0FBcEI7QUFDRDtBQUNGO0FBakdIO0FBQUE7QUFBQSxXQW1HRSx5QkFBZ0I7QUFDZCxXQUFLVCxLQUFMLENBQVcwQyxNQUFYLENBQWtCLEtBQUtqQyxPQUF2QjtBQUNEO0FBckdIO0FBQUE7QUFBQSxXQXVHRSxrQkFBUztBQUNQLFVBQUksS0FBS0gsV0FBVCxFQUFzQjtBQUNwQixZQUFJcUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLM0MsS0FBTCxDQUFXNEMsZUFBWCxDQUEyQixTQUEzQixDQUFoQjtBQUNBLFlBQUlDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBS3RDLFNBQXhCOztBQUNBLFlBQUlvQyxPQUFKLEVBQWE7QUFDWEUsVUFBQUEsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBSCxHQUEwQixLQUFLQyxhQUFMLEVBQXBDO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUYsVUFBSixFQUFnQjtBQUNkLGlCQUFLRyxVQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFuSEg7O0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGlhcGlwZS1mYWNlbWVzaC1lZmZlY3RzLy4vc3JjL2pzL3RocmVlX2NvbXBvbmVudHMvZ2xhc3Nlcy5qcz9kYmZhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IHsgUFVCTElDX1BBVEggfSBmcm9tICcuLi9wdWJsaWNfcGF0aCc7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcydcbmltcG9ydCB7IHNjYWxlTGFuZG1hcmsgfSBmcm9tICcuLi9mYWNlbWVzaC9sYW5kbWFya3NfaGVscGVycyc7XG5cbmZ1bmN0aW9uIGxvYWRNb2RlbCggZmlsZSApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlcywgcmVqICkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbiAgICAgIGxvYWRlci5sb2FkKCBmaWxlLCBmdW5jdGlvbiAoIGdsdGYgKSB7XG4gICAgICAgIHJlcyggZ2x0Zi5zY2VuZSApO1xuICAgICAgfSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoIGVycm9yICkge1xuICAgICAgICAgIHJlaiggZXJyb3IgKTtcbiAgICAgIH0gKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjbGFzcyBHbGFzc2VzIHtcbiAgY29uc3RydWN0b3Ioc2NlbmUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmxhbmRtYXJrcyA9IG51bGw7XG4gICAgdGhpcy5sb2FkR2xhc3NlcygpO1xuICB9XG5cbiAgYXN5bmMgbG9hZEdsYXNzZXMoKSB7XG4gICAgdGhpcy5nbGFzc2VzID0gYXdhaXQgbG9hZE1vZGVsKCBgJHtQVUJMSUNfUEFUSH0vM2QvYmxhY2stZ2xhc3Nlcy9tb2RlbC5nbHRmYCApO1xuICAgIHRoaXMuZ2xhc3Nlcy5uYW1lID0gJ2dsYXNzZXMnO1xuICB9XG5cbiAgdXBkYXRlRGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTGFuZG1hcmtzKGxhbmRtYXJrcykge1xuICAgIHRoaXMubGFuZG1hcmtzID0gbGFuZG1hcmtzO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlR2xhc3NlcygpIHtcbiAgICBsZXQgbWlkRXllcyA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMTY4XSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBsZWZ0RXllSW5uZXJDb3JuZXIgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ2M10sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgcmlnaHRFeWVJbm5lckNvcm5lciA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbMjQzXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBub3NlQm90dG9tID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCBsZWZ0RXllVXBwZXIxID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1s0NDZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IHJpZ2h0RXllVXBwZXIxID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syMjZdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5nbGFzc2VzKSB7XG4gICAgICAvLyBwb3NpdGlvblxuICAgICAgdGhpcy5nbGFzc2VzLnBvc2l0aW9uLnNldChcbiAgICAgICAgbWlkRXllcy54LFxuICAgICAgICBtaWRFeWVzLnksXG4gICAgICAgIG1pZEV5ZXMueixcbiAgICAgIClcblxuICAgICAgLy8gc2NhbGUgdG8gbWFrZSBnbGFzc2VzXG4gICAgICAvLyBhcyB3aWRlIGFzIGRpc3RhbmNlIGJldHdlZW5cbiAgICAgIC8vIGxlZnQgZXllIGNvcm5lciBhbmQgcmlnaHQgZXllIGNvcm5lclxuICAgICAgY29uc3QgZXllRGlzdCA9IE1hdGguc3FydChcbiAgICAgICAgKCBsZWZ0RXllVXBwZXIxLnggLSByaWdodEV5ZVVwcGVyMS54ICkgKiogMiArXG4gICAgICAgICggbGVmdEV5ZVVwcGVyMS55IC0gcmlnaHRFeWVVcHBlcjEueSApICoqIDIgK1xuICAgICAgICAoIGxlZnRFeWVVcHBlcjEueiAtIHJpZ2h0RXllVXBwZXIxLnogKSAqKiAyXG4gICAgICApO1xuICAgICAgLy8gMS40IGlzIHdpZHRoIG9mIDNkIG1vZGVsIG9mIGdsYXNzZXNcbiAgICAgIGNvbnN0IHNjYWxlID0gZXllRGlzdCAvIDEuNDtcbiAgICAgIGNvbnNvbGUubG9nKHNjKVxuICAgICAgdGhpcy5nbGFzc2VzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcblxuICAgICAgLy8gdXNlIHR3byB2ZWN0b3JzIHRvIHJvdGF0ZSBnbGFzc2VzXG4gICAgICAvLyBWZXJ0aWNhbCBWZWN0b3IgZnJvbSBtaWRFeWVzIHRvIG5vc2VCb3R0b21cbiAgICAgIC8vIGlzIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHJvdGF0aW9uIGFyb3VuZCB4IGFuZCB6IGF4aXNcbiAgICAgIC8vIEhvcml6b250YWwgVmVjdG9yIGZyb20gbGVmdEV5ZUNvcm5lciB0byByaWdodEV5ZUNvcm5lclxuICAgICAgLy8gdXMgdXNlIHRvIGNhbGN1bGF0ZSByb3RhdGlvbiBhcm91bmQgeSBheGlzXG4gICAgICBsZXQgdXBWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbWlkRXllcy54IC0gbm9zZUJvdHRvbS54LFxuICAgICAgICBtaWRFeWVzLnkgLSBub3NlQm90dG9tLnksXG4gICAgICAgIG1pZEV5ZXMueiAtIG5vc2VCb3R0b20ueixcbiAgICAgICkubm9ybWFsaXplKCk7XG5cbiAgICAgIGxldCBzaWRlVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci54IC0gcmlnaHRFeWVJbm5lckNvcm5lci54LFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueSAtIHJpZ2h0RXllSW5uZXJDb3JuZXIueSxcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnogLSByaWdodEV5ZUlubmVyQ29ybmVyLnosXG4gICAgICApLm5vcm1hbGl6ZSgpO1xuXG4gICAgICBsZXQgelJvdCA9IChuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSkuYW5nbGVUbyhcbiAgICAgICAgdXBWZWN0b3IuY2xvbmUoKS5wcm9qZWN0T25QbGFuZShcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKVxuICAgICAgICApXG4gICAgICApIC0gKE1hdGguUEkgLyAyKVxuXG4gICAgICBsZXQgeFJvdCA9IChNYXRoLlBJIC8gMikgLSAobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkpLmFuZ2xlVG8oXG4gICAgICAgIHVwVmVjdG9yLmNsb25lKCkucHJvamVjdE9uUGxhbmUoXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMClcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgbGV0IHlSb3QgPSAgKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzaWRlVmVjdG9yLngsIDAsIHNpZGVWZWN0b3IueilcbiAgICAgICkuYW5nbGVUbyhuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSkgLSAoTWF0aC5QSSAvIDIpO1xuICAgICAgXG4gICAgICB0aGlzLmdsYXNzZXMucm90YXRpb24uc2V0KHhSb3QsIHlSb3QsIHpSb3QpO1xuXG4gICAgfVxuICB9XG5cbiAgYWRkR2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy5nbGFzc2VzKSB7XG4gICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdsYXNzZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUdsYXNzZXMoKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5nbGFzc2VzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5uZWVkc1VwZGF0ZSkge1xuICAgICAgbGV0IGluU2NlbmUgPSAhIXRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCdnbGFzc2VzJyk7XG4gICAgICBsZXQgc2hvdWxkU2hvdyA9ICEhdGhpcy5sYW5kbWFya3M7XG4gICAgICBpZiAoaW5TY2VuZSkge1xuICAgICAgICBzaG91bGRTaG93ID8gdGhpcy51cGRhdGVHbGFzc2VzKCkgOiB0aGlzLnJlbW92ZUdsYXNzZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgdGhpcy5hZGRHbGFzc2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJQVUJMSUNfUEFUSCIsIkdMVEZMb2FkZXIiLCJzY2FsZUxhbmRtYXJrIiwibG9hZE1vZGVsIiwiZmlsZSIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjZW5lIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJHbGFzc2VzIiwid2lkdGgiLCJoZWlnaHQiLCJuZWVkc1VwZGF0ZSIsImxhbmRtYXJrcyIsImxvYWRHbGFzc2VzIiwiZ2xhc3NlcyIsIm5hbWUiLCJtaWRFeWVzIiwibGVmdEV5ZUlubmVyQ29ybmVyIiwicmlnaHRFeWVJbm5lckNvcm5lciIsIm5vc2VCb3R0b20iLCJsZWZ0RXllVXBwZXIxIiwicmlnaHRFeWVVcHBlcjEiLCJwb3NpdGlvbiIsInNldCIsIngiLCJ5IiwieiIsImV5ZURpc3QiLCJNYXRoIiwic3FydCIsInNjYWxlIiwiY29uc29sZSIsImxvZyIsInNjIiwidXBWZWN0b3IiLCJWZWN0b3IzIiwibm9ybWFsaXplIiwic2lkZVZlY3RvciIsInpSb3QiLCJhbmdsZVRvIiwiY2xvbmUiLCJwcm9qZWN0T25QbGFuZSIsIlBJIiwieFJvdCIsInlSb3QiLCJyb3RhdGlvbiIsImFkZCIsInJlbW92ZSIsImluU2NlbmUiLCJnZXRPYmplY3RCeU5hbWUiLCJzaG91bGRTaG93IiwidXBkYXRlR2xhc3NlcyIsInJlbW92ZUdsYXNzZXMiLCJhZGRHbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});