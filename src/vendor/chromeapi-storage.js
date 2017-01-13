const save = function (obj) {
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

const get = function (getParamArray) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get(getParamArray, function (result) {
            resolve(result)
        })
    });
}

module.exports = {
    save,get
}