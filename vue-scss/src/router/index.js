import Vue from 'vue'
import Router from 'vue-router'
import {Tab1,Tab2,Tab3,Tab4,Outer,Tab1Children} from  "./importComponents.config"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:()=>"/tab1"
    },
    {
      path: '/tab1',
      component:Tab1,
      children:[
        {
          path:"tab1children",
          name:"tab1children",
          component:Tab1Children
        }
      ]
    },{
      path: '/tab2',
      component:Tab2
    },{
      path: '/tab3',
      component:Tab3
    },
    {
      path: '/tab4',
      component:Tab4
    },
    {
      path:"/outer",
      component:Outer
    }
  ]
})
