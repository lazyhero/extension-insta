webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var CommonCss = __webpack_require__(74);
	var IconFont = __webpack_require__(75);
	var Vue = __webpack_require__(81);
	var MainComponent = __webpack_require__(79);
	
	var app = new Vue({
	    render: function render(h) {
	        return h(MainComponent);
	    }
	}).$mount("#extension");

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(5);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var save = function save(obj) {
	    return new _promise2.default(function (resolve, reject) {
	        chrome.storage.local.set(obj, function (error) {
	            if (error) {
	                reject(error);
	            } else {
	                resolve(true);
	            }
	        });
	    });
	};
	
	var get = function get(getParamArray) {
	    return new _promise2.default(function (resolve, reject) {
	        chrome.storage.local.get(getParamArray, function (result) {
	            resolve(result);
	        });
	    });
	};
	
	module.exports = {
	    save: save, get: get
	};

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(5);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getCurrent = function getCurrent() {
	    return new _promise2.default(function (resolve, reject) {
	        chrome.tabs.getSelected(null, function (tab) {
	            if (tab) {
	                resolve(tab);
	            } else {
	                var error = new Error("未获取到当前tab");
	                reject(error);
	            }
	        });
	    });
	};
	
	var update = function update(tabId, url, callback) {
	    chrome.tabs.update(tabId, {
	        url: url
	    }, function () {
	        callback && callback();
	    });
	};
	
	var reload = function reload(tabId) {
	    return new _promise2.default(function (resolve, reject) {
	        chrome.tabs.reload(tabId, function () {
	            resolve(true);
	        });
	    });
	};
	
	var on = function on(type, handler) {
	    switch (type) {
	        case "update":
	            chrome.tabs.onUpdated.addListener(handler);
	            break;
	    }
	};
	
	module.exports = {
	    getCurrent: getCurrent,
	    update: update,
	    on: on,
	    reload: reload
	};

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var tabApi = __webpack_require__(15);
	
	var storageApi = __webpack_require__(14);
	
	module.exports = {
	    tab: tabApi,
	    storage: storageApi
	};

/***/ },

/***/ 17:
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

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _regenerator = __webpack_require__(26);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(25);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _tool = __webpack_require__(17);
	
	var _tool2 = _interopRequireDefault(_tool);
	
	var _chromeapi = __webpack_require__(16);
	
	var _chromeapi2 = _interopRequireDefault(_chromeapi);
	
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
	        applyDebugEnv: function () {
	            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	                var ctx, tab, isSave;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                ctx = this;
	                                _context.next = 3;
	                                return _chromeapi2.default.tab.getCurrent();
	
	                            case 3:
	                                tab = _context.sent;
	
	                                console.log(tab);
	                                _context.next = 7;
	                                return _chromeapi2.default.storage.save({
	                                    debug_env: ctx.debug_env,
	                                    debug_env_profix: ctx.debug_env_profix
	                                });
	
	                            case 7:
	                                isSave = _context.sent;
	
	                                if (isSave) {
	                                    _chromeapi2.default.tab.update(tab.id, _tool2.default.assembleParamBySymbol(tab.url, ctx.debug_env_profix, ctx.debug_env));
	                                }
	
	                            case 9:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function applyDebugEnv() {
	                return _ref.apply(this, arguments);
	            }
	
	            return applyDebugEnv;
	        }()
	    }
	};

/***/ },

/***/ 73:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 74:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 75:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(73)
	
	/* script */
	__vue_exports__ = __webpack_require__(39)
	
	/* template */
	var __vue_template__ = __webpack_require__(80)
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

/***/ 80:
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

});
//# sourceMappingURL=app.js.map