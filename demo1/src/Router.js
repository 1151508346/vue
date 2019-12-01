import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const first = { template:"<div>this is First content</div>",}
const second = { template:"<div>this is second content</div>",}
const home = { template:"<div>this is Home content</div>",}

//创建路由
const router = new VueRouter({
    mode:"history",
    base:__dirname,
    routes:[{
        path:'/first',
        component:first,
    },{
        path:"/second",
        component:second,
    },{
        path:"/home",
        component:home,
    },]
});
new Vue({
    el:"#app",
    router:router,
    template:`
        <div>
            <h1>导航</h1>
            <ul>
                <li><router-link to="/first">first</router-link></li>
                <li><router-link to="/second">second</router-link></li>
                <li><router-link to="/home">home</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `

});



