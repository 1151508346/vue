<template>
  <div id="app">
   
      <h1>App</h1>
      <New></New>
      <Product></Product>
        <router-view></router-view>
  </div>
</template>
<script>
import New from "@/components/New.vue";
import Product from "@/components/Product";
export default {
  methods: {
   
  },
  components:{
    New,Product
  }
};
</script>

<style lang="scss">
</style>
