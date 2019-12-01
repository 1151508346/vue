<template>
  <div id="app">
    <div>
        <!-- {{a.moduleACount}} -->
        <!-- {{count}}
        {{mySelf}} -->
        <br/>

        {{getData}}
        <el-button @click = "bindChangeStateCount" >changeStateCount</el-button>
        <router-link :to='{path:"/home",query:{ana :"name",id:"000"}}'>home</router-link> 

        <router-link :to='{name:"about",params:{id:"001",name:"mingzi"}}'>about</router-link>
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "app",
  components: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },
    bindChangeStateCount(){
      this.$store.dispatch("increment",{
        name:"aaa",
        age:20
      })
    }
    
  },
  // computed:mapState({
  //   count:state=>state.a.moduleACount,
  //   mySelf:function(){
  //     window.console.log(location.href)
  //     return "自定义数据"
  //   }
  computed:{
      ...mapGetters({
        getData:"getData"
      })
    }

  
  // computed:{
  //   // count:function(){
  //   //   window.console.log(...mapState())
  //   //   window.console.log(this.$store)
  //   //   return this.$store.state.a.moduleACount
  //   // }
  //   // ...mapState(["a"])
  //   // ...mapState({
  //   //     count:"a"
  //   //   })
    //  count:function(){
    //    return this.$store.state.a.moduleACount;
    //  }
  // }
};
</script>

<style>
</style>

