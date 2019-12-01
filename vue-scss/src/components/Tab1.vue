<template>
   <div class="tab1">
      <h1>我是tab1</h1>
       <Tabnav></Tabnav>
       <button @click="getTabOneChildrenRouter">获取tab1的子路由</button>
       <router-link to="/outer">去向outer组件</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import Tabnav from "@/components/Tabnav"
import Router from "vue-router";
export default {
    components:{
        Tabnav
    },
    methods:{
        getTabOneChildrenRouter(){
            //    this.handleRouterErr()
            this.$router.push({path:"/tab1/tab1children"}).catch(err=>err)
        },
        // handleRouterErr(){
        //     const originalPush = Router.prototype.push
        //     Router.prototype.push = function push(location) {
        //         return originalPush.call(this, location).catch(err => err)
        //     }
        // }
    }
}
</script>

<style>

</style>