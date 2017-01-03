//监听标签改变
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "loading") {
        if (tab.url.indexOf("_debug_env") != -1) {
            return;
        } else {
            chrome.tabs.reload(tabId, function () {
                chrome.storage.local.get(['debug_env_profix', 'debug_env'], function (result) {
                    chrome.tabs.update(tabId, {
                        url: assembleParamBySymbol(tab.url,result.debug_env_profix||"_debug_env",result.debug_env||"3.9")
                    })
                })

            })
        }
    }
})