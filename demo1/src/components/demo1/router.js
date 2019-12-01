import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import One from "./One.vue";
import Two from "./Two.vue";

const router = new VueRouter({
    mode:"history",
    base:__dirname,
    routes:[{
        path:'/one',
        component:One,
    },{
        path:"/two",
        component:Two,
    }]
});



export default router;

