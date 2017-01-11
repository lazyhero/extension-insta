//对chrome extension api的使用封装 

/**
 * 获取当前标签对象
 * @returns {object} 标签对象
 */
const getCurrentTab = function () {
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

const localSave = function (obj) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.set(obj, function (error) {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        })
    })
}

const updateTab = function (tabId, url,callback) {
        chrome.tabs.update(tabId, url, function () {
            callback&&callback();
        })
}

module.exports = {
    getCurrentTab,
    localSave,
    updateTab
}