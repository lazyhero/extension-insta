webpackJsonp([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var CommonCss = __webpack_require__(4);
	var IconFont = __webpack_require__(5);
	var Vue = __webpack_require__(8);
	var MainComponent = __webpack_require__(6);
	
	var app = new Vue({
	    render: function render(h) {
	        return h(MainComponent);
	    }
	}).$mount("#extension");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _tool = __webpack_require__(2);
	
	var _tool2 = _interopRequireDefault(_tool);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function data() {
	        return {
	            debug_env: "",
	            debug_env_profix: "_debug_env"
	        };
	    },
	    mounted: function mounted() {
	        var ctx = this;
	        console.log(ctx.$el);
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
	                        url: _tool2.default.assembleParamBySymbol(_curTab.url, ctx.debug_env_profix, ctx.debug_env)
	                    });
	                });
	            });
	        }
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	function getQueryString(key, url) {
	    var _search = url || document.location.search,
	        _pattern = new RegExp("[?&]" + key + "\=([^&]+)", "g"),
	        _matcher = _pattern.exec(_search),
	        _items = null;
	    if (null != _matcher) {
	        try {
	            _items = decodeURIComponent(decodeURIComponent(_matcher[1]));
	        } catch (e) {
	            try {
	                _items = decodeURIComponent(_matcher[1]);
	            } catch (e) {
	                _items = _matcher[1];
	            }
	        }
	    }
	    return _items;
	}
	
	module.exports = {
	    assembleParamBySymbol: function assembleParamBySymbol(curUrl, profix, paramStr) {
	        var _curParam = getQueryString(profix, curUrl);
	        if (_curParam) {
	            return curUrl = curUrl.replace(profix + "=" + _curParam, profix + "=" + paramStr);
	        } else {
	            if (/\?/.test(curUrl)) {
	                return curUrl + "&" + profix + "=" + paramStr;
	            } else {
	                return curUrl + "?" + profix + "=" + paramStr;
	            }
	        }
	    },
	    getQueryString: function getQueryString(key, url) {
	        var _search = url || document.location.search,
	            _pattern = new RegExp("[?&]" + key + "\=([^&]+)", "g"),
	            _matcher = _pattern.exec(_search),
	            _items = null;
	        if (null != _matcher) {
	            try {
	                _items = decodeURIComponent(decodeURIComponent(_matcher[1]));
	            } catch (e) {
	                try {
	                    _items = decodeURIComponent(_matcher[1]);
	                } catch (e) {
	                    _items = _matcher[1];
	                }
	            }
	        }
	        return _items;
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(3)
	
	/* script */
	__vue_exports__ = __webpack_require__(1)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "extension"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "divider"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "wrapper"
	  }, [_c('div', {
	    staticClass: "form-input-group"
	  }, [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("调试版本")]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.debug_env),
	      expression: "debug_env"
	    }],
	    attrs: {
	      "type": "text",
	      "maxlength": "5"
	    },
	    domProps: {
	      "value": _vm._s(_vm.debug_env)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.debug_env = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('button', {
	    on: {
	      "click": _vm.applyDebugEnv
	    }
	  }, [_vm._v("应用")])])]), _vm._v(" "), _c('div', {
	    staticClass: "divider"
	  }), _vm._v(" "), _c('footer', {
	    staticClass: "text-center"
	  }, [_vm._v("\n        码の开森~码の快乐~\n    ")])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', {
	    staticClass: "text-center"
	  }, [_c('i', {
	    staticClass: "iconfont icon-tool"
	  }), _vm._v("欢迎使用instashop专属前端工具箱\n    ")])
	}]}

/***/ }
]);
//# sourceMappingURL=app.js.map