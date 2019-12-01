import Vue from 'vue'
import App from './App'
import router from './router'
import "./lib/css/mui.min.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from "vue-resource";
import moment from "moment";

Vue.filter("dateFormat",function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})

Vue.use(VueResource);
Vue.use(MintUI);
Vue.http.options.root = "http://vue.studyit.io"
// import VueLazyLoader from "vue-lazyload"

Vue.config.productionTip = false
// Vue.use(VueLazyLoader,{
//   // http://hbimg.b0.upaiyun.com/9d6299bf15d74832a4f0e62dd2912ea0d816307d10d796-y1rU1X_fw658
//   error:require("./assets/failure.jpg"),
//   loading:require("./assets/success.jpg")
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
