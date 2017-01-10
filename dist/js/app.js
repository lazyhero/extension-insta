webpackJsonp([2,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _common = __webpack_require__(1);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _iconfont = __webpack_require__(2);
	
	var _iconfont2 = _interopRequireDefault(_iconfont);
	
	var _vue = __webpack_require__(3);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vm = new _vue2.default({
	    el: ".extension",
	    data: {
	        debug_env: "",
	        debug_env_profix: "_debug_env"
	    },
	    methods: {
	        applyDebugEnv: function applyDebugEnv() {
	            var ctx = this;
	
	            chrome.tabs.getSelected(null, function (tab) {
	                var _curTab = tab,
	                    _curTabId = tab.id;
	                chrome.storage.local.set({
	                    debug_env: ctx.debug_env,
	                    debug_env_profix: ctx.debug_env_profix
	                }, function () {
	                    chrome.tabs.update(_curTabId.id, {
	                        url: assembleParamBySymbol(_curTab.url, ctx.debug_env_profix, ctx.debug_env)
	                    });
	                });
	            });
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map