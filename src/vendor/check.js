const Tool = require("tool")
const ChromeApi = require("chromeapi")


const updateDebugEnv = async function (tabId, changeInfo, tab) {
    if (changeInfo.status == "loading") {
        if (tab.url.indexOf("_debug_env") != -1) {
            return;
        } else {
            await ChromeApi.tab.reload(tabId);
            let result = await ChromeApi.storage.get(['debug_env_profix', 'debug_env']);
            console.log(result);
            console.log(tabId);
            console.log(tab.url);
            ChromeApi.tab.update(tabId, Tool.assembleParamBySymbol(tab.url, result.debug_env_profix || "_debug_env", result.debug_env || "3.9"))
        }
    }
}

//监听标签改变
ChromeApi.tab.on("update", function (tabId, changeInfo, tab) {
    updateDebugEnv(tabId, changeInfo, tab);
})