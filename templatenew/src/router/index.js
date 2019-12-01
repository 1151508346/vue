import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/Home"
import Message from "@/components/message/Message"

import Newlist from "@/components/new/Newlist"
import Newinfo from "@/components/new/Newinfo"
Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
   
    {
      path:'/',
      redirect:"home"
    },
    {
      path:"/home",
      component:Home,
      
    },
    {
      path:"/home/newlist",
      component:Newlist 
    },
    {
      path:"/home/newinfo/:id",
      component:Newinfo 
    },
    {
      path:"/message",
      component:Message
    },
  ]
})
