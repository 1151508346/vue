// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store";
import router from './router';
//处理移动端300ms延迟
// import fastclick from "fastclick"

//阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

// fastclick.attach(document.body)



/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  data:{
    nameb:"bbb"
  },
  store,
  render:h=>h(App)
  // components: { App },
  // template: '<App/>'
})
vm.nameb = "shkadjhaks"
