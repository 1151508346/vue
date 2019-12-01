import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
Vue.use(Router)


const router = new Router({
  mode:"history",
  base:process.env.BASEURL,
  routes: [
    {
      path: '/helloword',
      component: HelloWorld,
      meta:{
        title:"helloword",
        
      }
    },{
      path:"/hello",
      component:Hello,
      meta:{
        title:"hello"
      },
      children:[
        {
          path:"",
          redirect:"new"
        },
        {
          path:"new",
          component:HelloWorld
        }
      ]
      
    },
    {
      path:"/",
      redirect:"hello"
      
    }
  ]
})
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    console.log(to)
    next();
})

export default router
