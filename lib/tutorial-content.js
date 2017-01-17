(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tutorial-content", [], factory);
	else if(typeof exports === 'object')
		exports["tutorial-content"] = factory();
	else
		root["tutorial-content"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _course = __webpack_require__(1);
	
	var _course2 = _interopRequireDefault(_course);
	
	var _course1Header = __webpack_require__(2);
	
	var _course1Header2 = _interopRequireDefault(_course1Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TutorialContent = function () {
	  function TutorialContent() {
	    _classCallCheck(this, TutorialContent);
	  }
	
	  _createClass(TutorialContent, [{
	    key: 'content',
	    get: function get() {
	      return [{
	        header: _course1Header2.default,
	        content: _course2.default,
	        name: 'course1'
	      }, {
	        header: _course1Header2.default,
	        content: _course2.default,
	        name: 'course1'
	      }, {
	        header: _course1Header2.default,
	        content: _course2.default,
	        name: 'course1'
	      }, {
	        header: _course1Header2.default,
	        content: _course2.default,
	        name: 'course1'
	      }];
	    }
	  }]);
	
	  return TutorialContent;
	}();
	
	exports.default = TutorialContent;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<h1 id=\"course-1\">Course 1</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolor</p>\n<h2 id=\"part-1\">Part 1</h2>\n<p><img src=\"https://placekitten.com/g/1920/400\" alt=\"Tutorial illustration\"></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolor</p>\n<h2 id=\"part-2\">Part 2</h2>\n<p><img src=\"https://placekitten.com/g/1920/400\" alt=\"Tutorial illustration\"></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolor</p>\n<h2 id=\"part-3\">Part 3</h2>\n<p><img src=\"https://placekitten.com/g/1920/400\" alt=\"Tutorial illustration\"></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolor</p>\n<h2 id=\"part-4\">Part 4</h2>\n<p><img src=\"https://placekitten.com/g/1920/400\" alt=\"Tutorial illustration\"></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.\nLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque unde cum quo debitis illo labore, nam laborum odio voluptatem eos. Optio obcaecati minus autem blanditiis deserunt, quae. Praesentium, sed assumenda. Lorem ipsum dolor</p>\n";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<h2 id=\"course-1\">Course 1</h2>\n<p><img src=\"https://placekitten.com/g/1920/400\" alt=\"Tutorial illustration\"></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum obcaecati sapiente doloremque exercitationem possimus, quo veritatis dicta consectetur maxime. Reiciendis laboriosam nostrum, cupiditate esse magnam quisquam, excepturi dolores voluptates.</p>\n<p><code>By completing this course you will earn</code></p>\n<ul>\n<li>Un massage à l&#39;huile par yannick mathey</li>\n</ul>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tutorial-content.js.map