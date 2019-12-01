<template>
    <div id="app">
        
        <button @click = "handleClickhello">hello</button>
        <button @click = "handleClickhello2">hello2</button>
       <keep-alive>
         <component :is="type"></component>
       </keep-alive>
       
    </div>
</template>

<script>
   import Hello from "./Hello";
   import Hello2 from "./Hello2";
    export default {
        data:function(){
            return {
                type:Hello
            }
        },
        methods: {
           handleClickhello(){
                this.type = Hello
           },
           handleClickhello2(){
                this.type = Hello2
           }
        },
        updated(){
            console.log("updated()函数执行了")
        },
        beforeUpdate() {
            console.log("beforeupdate")
        },
    }
</script>

<style>

</style>