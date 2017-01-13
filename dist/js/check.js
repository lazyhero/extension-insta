webpackJsonp([3,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _regenerator = __webpack_require__(26);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(25);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Tool = __webpack_require__(17);
	var ChromeApi = __webpack_require__(16);
	
	var updateDebugEnv = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(tabId, changeInfo, tab) {
	        var result;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(changeInfo.status == "loading")) {
	                            _context.next = 14;
	                            break;
	                        }
	
	                        if (!(tab.url.indexOf("_debug_env") != -1)) {
	                            _context.next = 5;
	                            break;
	                        }
	
	                        return _context.abrupt("return");
	
	                    case 5:
	                        _context.next = 7;
	                        return ChromeApi.tab.reload(tabId);
	
	                    case 7:
	                        _context.next = 9;
	                        return ChromeApi.storage.get(['debug_env_profix', 'debug_env']);
	
	                    case 9:
	                        result = _context.sent;
	
	                        console.log(result);
	                        console.log(tabId);
	                        console.log(tab.url);
	                        ChromeApi.tab.update(tabId, Tool.assembleParamBySymbol(tab.url, result.debug_env_profix || "_debug_env", result.debug_env || "3.9"));
	
	                    case 14:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    return function updateDebugEnv(_x, _x2, _x3) {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	ChromeApi.tab.on("update", function (tabId, changeInfo, tab) {
	    updateDebugEnv(tabId, changeInfo, tab);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var tabApi = __webpack_require__(15);
	
	var storageApi = __webpack_require__(14);
	
	module.exports = {
	    tab: tabApi,
	    storage: storageApi
	};

/***/ },
/* 17 */
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

/***/ }
]);
//# sourceMappingURL=check.js.map