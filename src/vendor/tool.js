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

//检查是否很有?
module.exports = {
    assembleParamBySymbol: function (curUrl, profix, paramStr) {
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
    getQueryString: function (key, url) {
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
}