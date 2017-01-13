//对chrome extension api的使用封装 

const tabApi = require("chromeapi-tab");

const storageApi = require("chromeapi-storage");

module.exports = {
    tab:tabApi,
    storage:storageApi
}