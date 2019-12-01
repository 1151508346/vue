<template>
    <div id="hello">
        hello
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log("hello component mounted")
    },
    // beforeRouteEnter (to, from, next) {
    //     console.log("'我是hello组件独享守卫'")
    //     next(); 
    // },
    // beforeRouteUpdate(to,from,next){
    //     next()
    // },
    // beforeRouteLeave (to, from, next) {
    //    console.log(this.$route.path)
    //     next()
    // },
    beforeRouteLeave(to,from,next){
        console.log(this.$route.path)
        this.path = this.$route.path
        next()
    },
    //下面这两个方法之后使用了<keep-Alive></keep-Alive>才有效
    //组件处于活跃状态
    activated() {
        this.$router.push(this.path).catch(function(err){return err})
    },
    //组件没有处于活跃状态
    // deactivated(){}
    
    
    
}   


</script>

<style>

</style>