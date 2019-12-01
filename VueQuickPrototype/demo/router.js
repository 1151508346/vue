import Router from "vue-router";
import Hello from "./Hello.vue";
export default  new Router({
    routes:[
      {
        path:"/hello",
        component:Hello
      }
    ]
})