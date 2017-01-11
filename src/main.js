const CommonCss = require("./asset/style/common.css");
const IconFont =  require( "./asset/style/iconfont.css");
const Vue = require("vue"); 
const MainComponent = require('./component/main.vue')

const app = new Vue({
    render:h=>h(MainComponent)
}).$mount("#extension");