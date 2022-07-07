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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/scene.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = 'glasses';\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height);\n      var cubeBoundingBox_ = new three__WEBPACK_IMPORTED_MODULE_8__.Box3().setFromObject(this.glasses);\n      var boxSize = cubeBoundingBox_.getSize();\n      console.log(\"BoxSize: \" + boxSize);\n      console.log(boundingBox.getWorldPosition(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3()));\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between\n        // left eye corner and right eye corner\n\n        var eyeDist = Math.sqrt(Math.pow(leftEyeUpper1.x - rightEyeUpper1.x, 2) + Math.pow(leftEyeUpper1.y - rightEyeUpper1.y, 2) + Math.pow(leftEyeUpper1.z - rightEyeUpper1.z, 2)); // 1.4 is width of 3d model of glasses\n        // const scale = eyeDist / 1.4;\n        //  console.log(eyeDist)\n        // this.glasses.scale.set(scale, scale, scale);\n        // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName('glasses');\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          shouldShow ? this.updateGlasses() : this.removeGlasses();\n        } else {\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFFQyxHQUFGLEVBQU9DLEdBQVAsRUFBZ0I7QUFDaEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLGdGQUFKLEVBQWY7QUFDQU8sSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFMLElBQWIsRUFBbUIsVUFBV00sSUFBWCxFQUFrQjtBQUNuQ0osTUFBQUEsR0FBRyxDQUFFSSxJQUFJLENBQUNDLEtBQVAsQ0FBSDtBQUNELEtBRkQsRUFFR0MsU0FGSCxFQUVjLFVBQVdDLEtBQVgsRUFBbUI7QUFDN0JOLE1BQUFBLEdBQUcsQ0FBRU0sS0FBRixDQUFIO0FBQ0gsS0FKRDtBQUtILEdBUE0sQ0FBUDtBQVFEOztBQUVNLElBQU1DLE9BQWI7QUFDRSxtQkFBWUgsS0FBWixFQUFtQkksS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsV0FBTDtBQUNEOztBQVJIO0FBQUE7QUFBQTtBQUFBLGlGQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1QmhCLFNBQVMsV0FBS0gscURBQUwsa0NBRGhDOztBQUFBO0FBQ0UscUJBQUtvQixPQURQO0FBRUUscUJBQUtBLE9BQUwsQ0FBYUMsSUFBYixHQUFvQixTQUFwQjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVZGOztB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QUFMLENBQWFvQyxRQUFiLENBQXNCakIsR0FBdEIsQ0FBMEJlLElBQTFCLEVBQWdDQyxJQUFoQyxFQUFzQ04sSUFBdEM7QUFFRDtBQUNGO0FBL0ZIO0FBQUE7QUFBQSxXQWlHRSxzQkFBYTtBQUNYLFVBQUksS0FBSzdCLE9BQVQsRUFBa0I7QUFDaEIsYUFBS1QsS0FBTCxDQUFXOEMsR0FBWCxDQUFlLEtBQUtyQyxPQUFwQjtBQUNEO0FBQ0Y7QUFyR0g7QUFBQTtBQUFBLFdBdUdFLHlCQUFnQjtBQUNkLFdBQUtULEtBQUwsQ0FBVytDLE1BQVgsQ0FBa0IsS0FBS3RDLE9BQXZCO0FBQ0Q7QUF6R0g7QUFBQTtBQUFBLFdBMkdFLGtCQUFTO0FBQ1AsVUFBSSxLQUFLSCxXQUFULEVBQXNCO0FBQ3BCLFlBQUkwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUtoRCxLQUFMLENBQVdpRCxlQUFYLENBQTJCLFNBQTNCLENBQWhCO0FBQ0EsWUFBSUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLM0MsU0FBeEI7O0FBQ0EsWUFBSXlDLE9BQUosRUFBYTtBQUNYRSxVQUFBQSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFILEdBQTBCLEtBQUtDLGFBQUwsRUFBcEM7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJRixVQUFKLEVBQWdCO0FBQ2QsaUJBQUtHLFVBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQXZISDs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWFwaXBlLWZhY2VtZXNoLWVmZmVjdHMvLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzP2RiZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBQVUJMSUNfUEFUSCB9IGZyb20gJy4uL3B1YmxpY19wYXRoJztcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJ1xuaW1wb3J0IHsgc2NhbGVMYW5kbWFyayB9IGZyb20gJy4uL2ZhY2VtZXNoL2xhbmRtYXJrc19oZWxwZXJzJztcblxuZnVuY3Rpb24gbG9hZE1vZGVsKCBmaWxlICkge1xuICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzLCByZWogKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgbG9hZGVyLmxvYWQoIGZpbGUsIGZ1bmN0aW9uICggZ2x0ZiApIHtcbiAgICAgICAgcmVzKCBnbHRmLnNjZW5lICk7XG4gICAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgcmVqKCBlcnJvciApO1xuICAgICAgfSApO1xuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIEdsYXNzZXMge1xuICBjb25zdHJ1Y3RvcihzY2VuZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMubGFuZG1hcmtzID0gbnVsbDtcbiAgICB0aGlzLmxvYWRHbGFzc2VzKCk7XG4gIH1cblxuICBhc3luYyBsb2FkR2xhc3NlcygpIHtcbiAgICB0aGlzLmdsYXNzZXMgPSBhd2FpdCBsb2FkTW9kZWwoIGAke1BVQkxJQ19QQVRIfS8zZC9ibGFjay1nbGFzc2VzL3NjZW5lLmdsdGZgICk7XG4gICAgdGhpcy5nbGFzc2VzLm5hbWUgPSAnZ2xhc3Nlcyc7XG4gIH1cblxuICB1cGRhdGVEaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVMYW5kbWFya3MobGFuZG1hcmtzKSB7XG4gICAgdGhpcy5sYW5kbWFya3MgPSBsYW5kbWFya3M7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVHbGFzc2VzKCkge1xuICAgIGxldCBtaWRFeWVzID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxNjhdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IGxlZnRFeWVJbm5lckNvcm5lciA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDYzXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCByaWdodEV5ZUlubmVyQ29ybmVyID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syNDNdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IG5vc2VCb3R0b20gPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzJdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IGxlZnRFeWVVcHBlcjEgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ0Nl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgcmlnaHRFeWVVcHBlcjEgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzIyNl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGxldCBjdWJlQm91bmRpbmdCb3hfID0gbmV3IFRIUkVFLkJveDMoKS5zZXRGcm9tT2JqZWN0KCB0aGlzLmdsYXNzZXMgKTtcbiAgICBsZXQgYm94U2l6ZSA9IGN1YmVCb3VuZGluZ0JveF8uZ2V0U2l6ZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiQm94U2l6ZTogXCIgKyBib3hTaXplKTtcbmNvbnNvbGUubG9nKGJvdW5kaW5nQm94LmdldFdvcmxkUG9zaXRpb24obmV3IFRIUkVFLlZlY3RvcjMoKSkpO1xuICAgIGlmICh0aGlzLmdsYXNzZXMpIHtcbiAgICAgIC8vIHBvc2l0aW9uXG4gICAgICB0aGlzLmdsYXNzZXMucG9zaXRpb24uc2V0KFxuICAgICAgICBtaWRFeWVzLngsXG4gICAgICAgIG1pZEV5ZXMueSxcbiAgICAgICAgbWlkRXllcy56LFxuICAgICAgKVxuXG4gICAgICAvLyBzY2FsZSB0byBtYWtlIGdsYXNzZXNcbiAgICAgIC8vIGFzIHdpZGUgYXMgZGlzdGFuY2UgYmV0d2VlblxuICAgICAgLy8gbGVmdCBleWUgY29ybmVyIGFuZCByaWdodCBleWUgY29ybmVyXG4gICAgICBjb25zdCBleWVEaXN0ID0gTWF0aC5zcXJ0KFxuICAgICAgICAoIGxlZnRFeWVVcHBlcjEueCAtIHJpZ2h0RXllVXBwZXIxLnggKSAqKiAyICtcbiAgICAgICAgKCBsZWZ0RXllVXBwZXIxLnkgLSByaWdodEV5ZVVwcGVyMS55ICkgKiogMiArXG4gICAgICAgICggbGVmdEV5ZVVwcGVyMS56IC0gcmlnaHRFeWVVcHBlcjEueiApICoqIDJcbiAgICAgICk7XG4gICAgICAvLyAxLjQgaXMgd2lkdGggb2YgM2QgbW9kZWwgb2YgZ2xhc3Nlc1xuICAgICAgLy8gY29uc3Qgc2NhbGUgPSBleWVEaXN0IC8gMS40O1xuICAgICAgLy8gIGNvbnNvbGUubG9nKGV5ZURpc3QpXG4gICAgICAvLyB0aGlzLmdsYXNzZXMuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuXG4gICAgICAvLyB1c2UgdHdvIHZlY3RvcnMgdG8gcm90YXRlIGdsYXNzZXNcbiAgICAgIC8vIFZlcnRpY2FsIFZlY3RvciBmcm9tIG1pZEV5ZXMgdG8gbm9zZUJvdHRvbVxuICAgICAgLy8gaXMgdXNlZCBmb3IgY2FsY3VsYXRpbmcgcm90YXRpb24gYXJvdW5kIHggYW5kIHogYXhpc1xuICAgICAgLy8gSG9yaXpvbnRhbCBWZWN0b3IgZnJvbSBsZWZ0RXllQ29ybmVyIHRvIHJpZ2h0RXllQ29ybmVyXG4gICAgICAvLyB1cyB1c2UgdG8gY2FsY3VsYXRlIHJvdGF0aW9uIGFyb3VuZCB5IGF4aXNcbiAgICAgIGxldCB1cFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICBtaWRFeWVzLnggLSBub3NlQm90dG9tLngsXG4gICAgICAgIG1pZEV5ZXMueSAtIG5vc2VCb3R0b20ueSxcbiAgICAgICAgbWlkRXllcy56IC0gbm9zZUJvdHRvbS56LFxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnggLSByaWdodEV5ZUlubmVyQ29ybmVyLngsXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci55IC0gcmlnaHRFeWVJbm5lckNvcm5lci55LFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueiAtIHJpZ2h0RXllSW5uZXJDb3JuZXIueixcbiAgICAgICkubm9ybWFsaXplKCk7XG5cbiAgICAgIGxldCB6Um90ID0gKG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApKS5hbmdsZVRvKFxuICAgICAgICB1cFZlY3Rvci5jbG9uZSgpLnByb2plY3RPblBsYW5lKFxuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpXG4gICAgICAgIClcbiAgICAgICkgLSAoTWF0aC5QSSAvIDIpXG5cbiAgICAgIGxldCB4Um90ID0gKE1hdGguUEkgLyAyKSAtIChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSkuYW5nbGVUbyhcbiAgICAgICAgdXBWZWN0b3IuY2xvbmUoKS5wcm9qZWN0T25QbGFuZShcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBsZXQgeVJvdCA9ICAoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHNpZGVWZWN0b3IueCwgMCwgc2lkZVZlY3Rvci56KVxuICAgICAgKS5hbmdsZVRvKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpKSAtIChNYXRoLlBJIC8gMik7XG4gICAgICBcbiAgICAgIHRoaXMuZ2xhc3Nlcy5yb3RhdGlvbi5zZXQoeFJvdCwgeVJvdCwgelJvdCk7XG5cbiAgICB9XG4gIH1cblxuICBhZGRHbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmdsYXNzZXMpIHtcbiAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ2xhc3Nlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlR2xhc3NlcygpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmdsYXNzZXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLm5lZWRzVXBkYXRlKSB7XG4gICAgICBsZXQgaW5TY2VuZSA9ICEhdGhpcy5zY2VuZS5nZXRPYmplY3RCeU5hbWUoJ2dsYXNzZXMnKTtcbiAgICAgIGxldCBzaG91bGRTaG93ID0gISF0aGlzLmxhbmRtYXJrcztcbiAgICAgIGlmIChpblNjZW5lKSB7XG4gICAgICAgIHNob3VsZFNob3cgPyB0aGlzLnVwZGF0ZUdsYXNzZXMoKSA6IHRoaXMucmVtb3ZlR2xhc3NlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICB0aGlzLmFkZEdsYXNzZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJUSFJFRSIsIlBVQkxJQ19QQVRIIiwiR0xURkxvYWRlciIsInNjYWxlTGFuZG1hcmsiLCJsb2FkTW9kZWwiLCJmaWxlIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwic2NlbmUiLCJ1bmRlZmluZWQiLCJlcnJvciIsIkdsYXNzZXMiLCJ3aWR0aCIsImhlaWdodCIsIm5lZWRzVXBkYXRlIiwibGFuZG1hcmtzIiwibG9hZEdsYXNzZXMiLCJnbGFzc2VzIiwibmFtZSIsIm1pZEV5ZXMiLCJsZWZ0RXllSW5uZXJDb3JuZXIiLCJyaWdodEV5ZUlubmVyQ29ybmVyIiwibm9zZUJvdHRvbSIsImxlZnRFeWVVcHBlcjEiLCJyaWdodEV5ZVVwcGVyMSIsImN1YmVCb3VuZGluZ0JveF8iLCJCb3gzIiwic2V0RnJvbU9iamVjdCIsImJveFNpemUiLCJnZXRTaXplIiwiY29uc29sZSIsImxvZyIsImJvdW5kaW5nQm94IiwiZ2V0V29ybGRQb3NpdGlvbiIsIlZlY3RvcjMiLCJwb3NpdGlvbiIsInNldCIsIngiLCJ5IiwieiIsImV5ZURpc3QiLCJNYXRoIiwic3FydCIsInVwVmVjdG9yIiwibm9ybWFsaXplIiwic2lkZVZlY3RvciIsInpSb3QiLCJhbmdsZVRvIiwiY2xvbmUiLCJwcm9qZWN0T25QbGFuZSIsIlBJIiwieFJvdCIsInlSb3QiLCJyb3RhdGlvbiIsImFkZCIsInJlbW92ZSIsImluU2NlbmUiLCJnZXRPYmplY3RCeU5hbWUiLCJzaG91bGRTaG93IiwidXBkYXRlR2xhc3NlcyIsInJlbW92ZUdsYXNzZXMiLCJhZGRHbGFzc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});