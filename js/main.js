var vm = new Vue({
    el: ".extension",
    data: {
        debug_env: "",
        debug_env_profix:"_debug_env"
    },
    methods: {
        applyDebugEnv: function () {
            var ctx = this;
            //获取当前标签id
            chrome.tabs.getSelected(null, function (tab) {
                var _curTab = tab, _curTabId = tab.id;
                chrome.storage.local.set({
                    debug_env: ctx.debug_env,
                    debug_env_profix:ctx.debug_env_profix
                }, function () {
                    //刷新当前标签页
                    chrome.tabs.update(_curTabId.id, {
                        url: assembleParamBySymbol(_curTab.url,ctx.debug_env_profix,ctx.debug_env)
                    })
                })
            });

        }
    }
})
