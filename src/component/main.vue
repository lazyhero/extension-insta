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
    import ChromeApi from "chromeapi"
    
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
            applyDebugEnv:async function () {
                var ctx = this;
                //async化
                var tab = await ChromeApi.tab.getCurrent();
                var isSave = await ChromeApi.storage.save({
                    debug_env:ctx.debug_env,
                    debug_env_profix:ctx.debug_env_profix
                })
                if(isSave){
                    ChromeApi.tab.update(tab.id,Tool.assembleParamBySymbol(tab.url,ctx.debug_env_profix,ctx.debug_env));
                }
            }
        }
    }
</script>