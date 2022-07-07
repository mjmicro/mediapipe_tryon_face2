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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Glasses\": () => (/* binding */ Glasses)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public_path */ \"./src/js/public_path.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var _facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facemesh/landmarks_helpers */ \"./src/js/facemesh/landmarks_helpers.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nfunction loadModel(file) {\n  return new Promise(function (res, rej) {\n    var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_6__.GLTFLoader();\n    loader.load(file, function (gltf) {\n      res(gltf.scene);\n    }, undefined, function (error) {\n      rej(error);\n    });\n  });\n}\n\nvar Glasses = /*#__PURE__*/function () {\n  function Glasses(scene, width, height) {\n    _classCallCheck(this, Glasses);\n\n    this.scene = scene;\n    this.width = width;\n    this.height = height;\n    this.needsUpdate = false;\n    this.landmarks = null;\n    this.loadGlasses();\n  }\n\n  _createClass(Glasses, [{\n    key: \"loadGlasses\",\n    value: function () {\n      var _loadGlasses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return loadModel(\"\".concat(_public_path__WEBPACK_IMPORTED_MODULE_5__.PUBLIC_PATH, \"/3d/black-glasses/scene.gltf\"));\n\n              case 2:\n                this.glasses = _context.sent;\n                this.glasses.name = 'glasses';\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadGlasses() {\n        return _loadGlasses.apply(this, arguments);\n      }\n\n      return loadGlasses;\n    }()\n  }, {\n    key: \"updateDimensions\",\n    value: function updateDimensions(width, height) {\n      this.width = width;\n      this.height = height;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateLandmarks\",\n    value: function updateLandmarks(landmarks) {\n      this.landmarks = landmarks;\n      this.needsUpdate = true;\n    }\n  }, {\n    key: \"updateGlasses\",\n    value: function updateGlasses() {\n      var midEyes = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[168], this.width, this.height);\n      var leftEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[463], this.width, this.height);\n      var rightEyeInnerCorner = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[243], this.width, this.height);\n      var noseBottom = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[2], this.width, this.height);\n      var leftEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[446], this.width, this.height);\n      var rightEyeUpper1 = (0,_facemesh_landmarks_helpers__WEBPACK_IMPORTED_MODULE_7__.scaleLandmark)(this.landmarks[226], this.width, this.height); //    let boundingBox = new THREE.Box3().setFromObject(this.glasses)\n      //     //let size = boundingBox.getSize() \n      // console.log(boundingBox.getSize(new THREE.Vector3()));\n      // const vFov = (camera.fov * Math.PI) / 180;\n      // const height = 2 * Math.tan(vFov / 2) * camera.position.z;\n      // const aspect = window.innerWidth / window.innerHeight;\n      // const width = height * aspect;\n      // const pixelSize = window.innerWidth * ((1 / width) * 2.2)\n\n      console.log(boxSize);\n\n      if (this.glasses) {\n        // position\n        this.glasses.position.set(midEyes.x, midEyes.y, midEyes.z); // scale to make glasses\n        // as wide as distance between\n        // left eye corner and right eye corner\n\n        var eyeDist = Math.sqrt(Math.pow(leftEyeUpper1.x - rightEyeUpper1.x, 2) + Math.pow(leftEyeUpper1.y - rightEyeUpper1.y, 2) + Math.pow(leftEyeUpper1.z - rightEyeUpper1.z, 2)); // 1.4 is width of 3d model of glasses\n        // const scale = eyeDist / 1.4;\n        //  console.log(eyeDist)\n        // this.glasses.scale.set(scale, scale, scale);\n        // use two vectors to rotate glasses\n        // Vertical Vector from midEyes to noseBottom\n        // is used for calculating rotation around x and z axis\n        // Horizontal Vector from leftEyeCorner to rightEyeCorner\n        // us use to calculate rotation around y axis\n\n        var upVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(midEyes.x - noseBottom.x, midEyes.y - noseBottom.y, midEyes.z - noseBottom.z).normalize();\n        var sideVector = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(leftEyeInnerCorner.x - rightEyeInnerCorner.x, leftEyeInnerCorner.y - rightEyeInnerCorner.y, leftEyeInnerCorner.z - rightEyeInnerCorner.z).normalize();\n        var zRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1))) - Math.PI / 2;\n        var xRot = Math.PI / 2 - new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1).angleTo(upVector.clone().projectOnPlane(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(1, 0, 0)));\n        var yRot = new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(sideVector.x, 0, sideVector.z).angleTo(new three__WEBPACK_IMPORTED_MODULE_8__.Vector3(0, 0, 1)) - Math.PI / 2;\n        this.glasses.rotation.set(xRot, yRot, zRot);\n      }\n    }\n  }, {\n    key: \"addGlasses\",\n    value: function addGlasses() {\n      if (this.glasses) {\n        this.scene.add(this.glasses);\n      }\n    }\n  }, {\n    key: \"removeGlasses\",\n    value: function removeGlasses() {\n      this.scene.remove(this.glasses);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.needsUpdate) {\n        var inScene = !!this.scene.getObjectByName('glasses');\n        var shouldShow = !!this.landmarks;\n\n        if (inScene) {\n          shouldShow ? this.updateGlasses() : this.removeGlasses();\n        } else {\n          if (shouldShow) {\n            this.addGlasses();\n          }\n        }\n      }\n    }\n  }]);\n\n  return Glasses;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSSxTQUFULENBQW9CQyxJQUFwQixFQUEyQjtBQUN6QixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFFQyxHQUFGLEVBQU9DLEdBQVAsRUFBZ0I7QUFDaEMsUUFBTUMsTUFBTSxHQUFHLElBQUlQLGdGQUFKLEVBQWY7QUFDQU8sSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQWFMLElBQWIsRUFBbUIsVUFBV00sSUFBWCxFQUFrQjtBQUNuQ0osTUFBQUEsR0FBRyxDQUFFSSxJQUFJLENBQUNDLEtBQVAsQ0FBSDtBQUNELEtBRkQsRUFFR0MsU0FGSCxFQUVjLFVBQVdDLEtBQVgsRUFBbUI7QUFDN0JOLE1BQUFBLEdBQUcsQ0FBRU0sS0FBRixDQUFIO0FBQ0gsS0FKRDtBQUtILEdBUE0sQ0FBUDtBQVFEOztBQUVNLElBQU1DLE9BQWI7QUFDRSxtQkFBWUgsS0FBWixFQUFtQkksS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsV0FBTDtBQUNEOztBQVJIO0FBQUE7QUFBQTtBQUFBLGlGQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1QmhCLFNBQVMsV0FBS0gscURBQUwsa0NBRGhDOztBQUFBO0FBQ0UscUJBQUtvQixPQURQO0FBRUUscUJBQUtBLE9BQUwsQ0FBYUMsSUFBYixHQUFvQixTQUFwQjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVZGOztB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Q0Y7QUEzR0g7QUFBQTtBQUFBLFdBNkdFLHlCQUFnQjtBQUNkLFdBQUtULEtBQUwsQ0FBV3lDLE1BQVgsQ0FBa0IsS0FBS2hDLE9BQXZCO0FBQ0Q7QUEvR0g7QUFBQTtBQUFBLFdBaUhFLGtCQUFTO0FBQ1AsVUFBSSxLQUFLSCxXQUFULEVBQXNCO0FBQ3BCLFlBQUlvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUsxQyxLQUFMLENBQVcyQyxlQUFYLENBQTJCLFNBQTNCLENBQWhCO0FBQ0EsWUFBSUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLckMsU0FBeEI7O0FBQ0EsWUFBSW1DLE9BQUosRUFBYTtBQUNYRSxVQUFBQSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFILEdBQTBCLEtBQUtDLGFBQUwsRUFBcEM7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJRixVQUFKLEVBQWdCO0FBQ2QsaUJBQUtHLFVBQUw7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQTdISDs7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWFwaXBlLWZhY2VtZXNoLWVmZmVjdHMvLi9zcmMvanMvdGhyZWVfY29tcG9uZW50cy9nbGFzc2VzLmpzP2RiZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyBQVUJMSUNfUEFUSCB9IGZyb20gJy4uL3B1YmxpY19wYXRoJztcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJ1xuaW1wb3J0IHsgc2NhbGVMYW5kbWFyayB9IGZyb20gJy4uL2ZhY2VtZXNoL2xhbmRtYXJrc19oZWxwZXJzJztcblxuZnVuY3Rpb24gbG9hZE1vZGVsKCBmaWxlICkge1xuICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzLCByZWogKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgbG9hZGVyLmxvYWQoIGZpbGUsIGZ1bmN0aW9uICggZ2x0ZiApIHtcbiAgICAgICAgcmVzKCBnbHRmLnNjZW5lICk7XG4gICAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uICggZXJyb3IgKSB7XG4gICAgICAgICAgcmVqKCBlcnJvciApO1xuICAgICAgfSApO1xuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIEdsYXNzZXMge1xuICBjb25zdHJ1Y3RvcihzY2VuZSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMubGFuZG1hcmtzID0gbnVsbDtcbiAgICB0aGlzLmxvYWRHbGFzc2VzKCk7XG4gIH1cblxuICBhc3luYyBsb2FkR2xhc3NlcygpIHtcbiAgICB0aGlzLmdsYXNzZXMgPSBhd2FpdCBsb2FkTW9kZWwoIGAke1BVQkxJQ19QQVRIfS8zZC9ibGFjay1nbGFzc2VzL3NjZW5lLmdsdGZgICk7XG4gICAgdGhpcy5nbGFzc2VzLm5hbWUgPSAnZ2xhc3Nlcyc7XG4gIH1cblxuICB1cGRhdGVEaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVMYW5kbWFya3MobGFuZG1hcmtzKSB7XG4gICAgdGhpcy5sYW5kbWFya3MgPSBsYW5kbWFya3M7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVHbGFzc2VzKCkge1xuICAgIGxldCBtaWRFeWVzID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1sxNjhdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IGxlZnRFeWVJbm5lckNvcm5lciA9IHNjYWxlTGFuZG1hcmsodGhpcy5sYW5kbWFya3NbNDYzXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGxldCByaWdodEV5ZUlubmVyQ29ybmVyID0gc2NhbGVMYW5kbWFyayh0aGlzLmxhbmRtYXJrc1syNDNdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IG5vc2VCb3R0b20gPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzJdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgbGV0IGxlZnRFeWVVcHBlcjEgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzQ0Nl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICBsZXQgcmlnaHRFeWVVcHBlcjEgPSBzY2FsZUxhbmRtYXJrKHRoaXMubGFuZG1hcmtzWzIyNl0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuLy8gICAgbGV0IGJvdW5kaW5nQm94ID0gbmV3IFRIUkVFLkJveDMoKS5zZXRGcm9tT2JqZWN0KHRoaXMuZ2xhc3Nlcylcbi8vICAgICAvL2xldCBzaXplID0gYm91bmRpbmdCb3guZ2V0U2l6ZSgpIFxuLy8gY29uc29sZS5sb2coYm91bmRpbmdCb3guZ2V0U2l6ZShuZXcgVEhSRUUuVmVjdG9yMygpKSk7XG4vLyBjb25zdCB2Rm92ID0gKGNhbWVyYS5mb3YgKiBNYXRoLlBJKSAvIDE4MDtcbi8vIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbih2Rm92IC8gMikgKiBjYW1lcmEucG9zaXRpb24uejtcbi8vIGNvbnN0IGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3Q7XG4vLyBjb25zdCBwaXhlbFNpemUgPSB3aW5kb3cuaW5uZXJXaWR0aCAqICgoMSAvIHdpZHRoKSAqIDIuMilcblxuY29uc29sZS5sb2coYm94U2l6ZSk7XG4gICAgaWYgKHRoaXMuZ2xhc3Nlcykge1xuICAgICAgLy8gcG9zaXRpb25cbiAgICAgIHRoaXMuZ2xhc3Nlcy5wb3NpdGlvbi5zZXQoXG4gICAgICAgIG1pZEV5ZXMueCxcbiAgICAgICAgbWlkRXllcy55LFxuICAgICAgICBtaWRFeWVzLnosXG4gICAgICApXG5cbiAgICAgIC8vIHNjYWxlIHRvIG1ha2UgZ2xhc3Nlc1xuICAgICAgLy8gYXMgd2lkZSBhcyBkaXN0YW5jZSBiZXR3ZWVuXG4gICAgICAvLyBsZWZ0IGV5ZSBjb3JuZXIgYW5kIHJpZ2h0IGV5ZSBjb3JuZXJcbiAgICAgIGNvbnN0IGV5ZURpc3QgPSBNYXRoLnNxcnQoXG4gICAgICAgICggbGVmdEV5ZVVwcGVyMS54IC0gcmlnaHRFeWVVcHBlcjEueCApICoqIDIgK1xuICAgICAgICAoIGxlZnRFeWVVcHBlcjEueSAtIHJpZ2h0RXllVXBwZXIxLnkgKSAqKiAyICtcbiAgICAgICAgKCBsZWZ0RXllVXBwZXIxLnogLSByaWdodEV5ZVVwcGVyMS56ICkgKiogMlxuICAgICAgKTtcbiAgICAgIC8vIDEuNCBpcyB3aWR0aCBvZiAzZCBtb2RlbCBvZiBnbGFzc2VzXG4gICAgICAvLyBjb25zdCBzY2FsZSA9IGV5ZURpc3QgLyAxLjQ7XG4gICAgICAvLyAgY29uc29sZS5sb2coZXllRGlzdClcbiAgICAgIC8vIHRoaXMuZ2xhc3Nlcy5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG5cbiAgICAgIC8vIHVzZSB0d28gdmVjdG9ycyB0byByb3RhdGUgZ2xhc3Nlc1xuICAgICAgLy8gVmVydGljYWwgVmVjdG9yIGZyb20gbWlkRXllcyB0byBub3NlQm90dG9tXG4gICAgICAvLyBpcyB1c2VkIGZvciBjYWxjdWxhdGluZyByb3RhdGlvbiBhcm91bmQgeCBhbmQgeiBheGlzXG4gICAgICAvLyBIb3Jpem9udGFsIFZlY3RvciBmcm9tIGxlZnRFeWVDb3JuZXIgdG8gcmlnaHRFeWVDb3JuZXJcbiAgICAgIC8vIHVzIHVzZSB0byBjYWxjdWxhdGUgcm90YXRpb24gYXJvdW5kIHkgYXhpc1xuICAgICAgbGV0IHVwVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgIG1pZEV5ZXMueCAtIG5vc2VCb3R0b20ueCxcbiAgICAgICAgbWlkRXllcy55IC0gbm9zZUJvdHRvbS55LFxuICAgICAgICBtaWRFeWVzLnogLSBub3NlQm90dG9tLnosXG4gICAgICApLm5vcm1hbGl6ZSgpO1xuXG4gICAgICBsZXQgc2lkZVZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICBsZWZ0RXllSW5uZXJDb3JuZXIueCAtIHJpZ2h0RXllSW5uZXJDb3JuZXIueCxcbiAgICAgICAgbGVmdEV5ZUlubmVyQ29ybmVyLnkgLSByaWdodEV5ZUlubmVyQ29ybmVyLnksXG4gICAgICAgIGxlZnRFeWVJbm5lckNvcm5lci56IC0gcmlnaHRFeWVJbm5lckNvcm5lci56LFxuICAgICAgKS5ub3JtYWxpemUoKTtcblxuICAgICAgbGV0IHpSb3QgPSAobmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCkpLmFuZ2xlVG8oXG4gICAgICAgIHVwVmVjdG9yLmNsb25lKCkucHJvamVjdE9uUGxhbmUoXG4gICAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSlcbiAgICAgICAgKVxuICAgICAgKSAtIChNYXRoLlBJIC8gMilcblxuICAgICAgbGV0IHhSb3QgPSAoTWF0aC5QSSAvIDIpIC0gKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpKS5hbmdsZVRvKFxuICAgICAgICB1cFZlY3Rvci5jbG9uZSgpLnByb2plY3RPblBsYW5lKFxuICAgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIGxldCB5Um90ID0gIChcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoc2lkZVZlY3Rvci54LCAwLCBzaWRlVmVjdG9yLnopXG4gICAgICApLmFuZ2xlVG8obmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkpIC0gKE1hdGguUEkgLyAyKTtcbiAgICAgIFxuICAgICAgdGhpcy5nbGFzc2VzLnJvdGF0aW9uLnNldCh4Um90LCB5Um90LCB6Um90KTtcblxuICAgIH1cbiAgfVxuXG4gIGFkZEdsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMuZ2xhc3Nlcykge1xuICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5nbGFzc2VzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVHbGFzc2VzKCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMuZ2xhc3Nlcyk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMubmVlZHNVcGRhdGUpIHtcbiAgICAgIGxldCBpblNjZW5lID0gISF0aGlzLnNjZW5lLmdldE9iamVjdEJ5TmFtZSgnZ2xhc3NlcycpO1xuICAgICAgbGV0IHNob3VsZFNob3cgPSAhIXRoaXMubGFuZG1hcmtzO1xuICAgICAgaWYgKGluU2NlbmUpIHtcbiAgICAgICAgc2hvdWxkU2hvdyA/IHRoaXMudXBkYXRlR2xhc3NlcygpIDogdGhpcy5yZW1vdmVHbGFzc2VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgIHRoaXMuYWRkR2xhc3NlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlRIUkVFIiwiUFVCTElDX1BBVEgiLCJHTFRGTG9hZGVyIiwic2NhbGVMYW5kbWFyayIsImxvYWRNb2RlbCIsImZpbGUiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibG9hZGVyIiwibG9hZCIsImdsdGYiLCJzY2VuZSIsInVuZGVmaW5lZCIsImVycm9yIiwiR2xhc3NlcyIsIndpZHRoIiwiaGVpZ2h0IiwibmVlZHNVcGRhdGUiLCJsYW5kbWFya3MiLCJsb2FkR2xhc3NlcyIsImdsYXNzZXMiLCJuYW1lIiwibWlkRXllcyIsImxlZnRFeWVJbm5lckNvcm5lciIsInJpZ2h0RXllSW5uZXJDb3JuZXIiLCJub3NlQm90dG9tIiwibGVmdEV5ZVVwcGVyMSIsInJpZ2h0RXllVXBwZXIxIiwiY29uc29sZSIsImxvZyIsImJveFNpemUiLCJwb3NpdGlvbiIsInNldCIsIngiLCJ5IiwieiIsImV5ZURpc3QiLCJNYXRoIiwic3FydCIsInVwVmVjdG9yIiwiVmVjdG9yMyIsIm5vcm1hbGl6ZSIsInNpZGVWZWN0b3IiLCJ6Um90IiwiYW5nbGVUbyIsImNsb25lIiwicHJvamVjdE9uUGxhbmUiLCJQSSIsInhSb3QiLCJ5Um90Iiwicm90YXRpb24iLCJhZGQiLCJyZW1vdmUiLCJpblNjZW5lIiwiZ2V0T2JqZWN0QnlOYW1lIiwic2hvdWxkU2hvdyIsInVwZGF0ZUdsYXNzZXMiLCJyZW1vdmVHbGFzc2VzIiwiYWRkR2xhc3NlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/three_components/glasses.js\n");

/***/ })

});