<template>
  <div id="app" class="app-container">
     <Header></Header>
     
        <transition>
            <router-view></router-view>
        </transition>
    
     <Tab></Tab>
  </div>
  
</template>

<script>
import Header from "@/components/Header";
import Tab from "@/components/Tab";
import Home from "@/components/home/Home"
export default {
  name: 'App',
  data(){
    return {
       
      };
  },
  components:{
    Header,Tab ,Home
  },
  methods:{
    
  },
  mounted(){
   
   


  }
}
</script>

<style lang="scss" scoped>
   
    .app-container{
      padding-top:40px;
      padding-bottom:50px;
      overflow-x: hidden;

    }
    .v-enter{
      opacity:0;
      transform:translateX(100%);
        
    }
    .v-leave-to{
      transform:translateX(-100%);
      position: absolute
    }
    .v-enter-active,
    .v-leave-active{
      transition: all 0.3s ease-in;
    }
</style>
