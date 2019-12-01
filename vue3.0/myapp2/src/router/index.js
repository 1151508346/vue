import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // props:true  将router.params 中的参数作为about组件中props中的属性
    // props:{tilte:"标题"},  该对象属性会成为该组件中的props对象中的属性值
    props:(route)=>{
      // window.console.log(route);

      // 获取到参数params 将其可以处理之后再将其返回到该about组件中的props属性上
      
      return route.params

    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
