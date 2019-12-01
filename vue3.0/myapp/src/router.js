import Vue from 'vue'
import Router from 'vue-router'
import NewList from "@/components/NewList";
import New from "@/components/New";
import Product from "@/components/Product";
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      { 
        name:"newList",
        path:"/newList/:id",
        component:NewList
      }  ,
      {
        name:"productname",
        path:"product",
        component:Product
      }
      // {
      //   path:"/new",
      //   component:New
      // } ,
      // {
      //   path:"/",
      //   redirect:"/new"
      // }    
  ]
})
