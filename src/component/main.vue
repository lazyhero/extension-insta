<style>

</style>
<template>
    <div class="extension">
        <header class="text-center">
            <i class="iconfont icon-tool"></i>欢迎使用instashop专属前端工具箱
        </header>
        <div class="divider"></div>
        <div class="wrapper">
            <div class="form-input-group">
                <label for="">调试版本</label>
                <input v-model="debug_env" type="text" maxlength="5" />
                <button @click="applyDebugEnv">应用</button>
            </div>
        </div>
        <div class="divider"></div>
        <footer class="text-center">
            码の开森~码の快乐~
        </footer>
    </div>
</template>
<script>
    import Tool from "tool"
    module.exports = {
        data: function () {
            return {
                debug_env: "",
                debug_env_profix: "_debug_env"
            }
        },
        mounted: function () {
            var ctx = this;
            console.log(ctx.$el)
        },
        methods: {
            applyDebugEnv: function () {
                var ctx = this;
                //获取当前标签id
                chrome.tabs.getSelected(null, function (tab) {
                    var _curTab = tab,
                        _curTabId = tab.id;
                    chrome.storage.local.set({
                        debug_env: ctx.debug_env,
                        debug_env_profix: ctx.debug_env_profix
                    }, function () {
                        //刷新当前标签页
                        chrome.tabs.update(_curTabId.id, {
                            url: Tool.assembleParamBySymbol(_curTab.url, ctx.debug_env_profix,
                                ctx.debug_env)
                        })
                    })
                });
            }
        }
    }
</script>