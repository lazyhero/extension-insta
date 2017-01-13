/**
 * 获取当前标签对象
 * @returns {object} 标签对象
 */
const getCurrent = function () {
    return new Promise(function (resolve, reject) {
        chrome.tabs.getSelected(null, function (tab) {
            if (tab) {
                resolve(tab)
            } else {
                let error = new Error("未获取到当前tab");
                reject(error)
            }
        });
    })
}

const update = function (tabId, url, callback) {
    chrome.tabs.update(tabId, {
        url: url
    }, function () {
        callback && callback();
    })
}

const reload = function (tabId) {
    return new Promise(function (resolve, reject) {
        chrome.tabs.reload(tabId, function () {
            resolve(true)
        })
    })
}

const on = function (type, handler) {
    switch (type) {
        case "update":
            chrome.tabs.onUpdated.addListener(handler)
            break;
    }
}

module.exports = {
    getCurrent,
    update,
    on,
    reload
}