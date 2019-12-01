// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import Vue from "vue"
// import Router from './Router'
import App from './App'
import router from "./components/demo1/router.js";
// Vue.config.productionTip = false

/* eslint-disable no-new */
var  vm = new Vue({
    el:"#app", 
    router,
    components: { App },
    template: "<App/>",
    data:{
    	message:"自定义的数据",
    }
});

// console.log(vm.$options.components.App.data());
