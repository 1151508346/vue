<template>
    <!-- <div id="app">
        <div class="wrapper">位置
            <span>123</span>
        </div>
        <span>456</span>

        <div class="message">
            message
        </div>
        <div class="warning">
            warning
        </div>
    </div> -->
    <div id="app">
        asdasdas
       
        <router-link to="/hello">hello</router-link>
        <router-link to="/helloword">helloword</router-link>

           <keep-alive>
                <router-view></router-view>
           </keep-alive>
           {{appname[0]}}
           {{obj}}

    <Test1></Test1>

    </div>
</template>

<script>
    import Test1 from "@/components/Test1";
    import Vue from "vue";
    var v =  {
        data:function(){
            return {
                appname:["123"],
                obj:"dsfs"
            }
        },
        components:{
            Test1
        },
        mounted(){
            // this.obj = 123
            
            this.appname[0] = "sadad" //不能这样改变数据，数据不是响应式的，没有加入到响应式机制中去
           // this.appname.splice(0,1,"dhj")
            // Vue.set(this,"obj","dasdasdh")
             // console.log(this.$store.state.vuexData.name)

        }

    }
    // console.log(v.data())
    // Vue.set(v.data.appname,"appname","dsa")

    export default v
</script>
<style lang="">
    
</style>
<!--
<style lang="stylus" type="styleSheet/stylus">
    add(a,b=a)
        a = unit(a,px)
        b = unit(b,px)
        return a + b
    $color=lightblue
    &red = #E33E1E
    &yellow = #E2E21E
    border-radius(n)
        -webkit-border-radius n
        -moz-border-radius n
        border-radius n
    .wrapper
        width :add(100,200)
        height:add(150)
        border:1px solid red
        border-radius(10px)
        margin-left:auto
        margin-right:30px
        box-shadow: 0 0 10px #333
        background-color #fff
        transition:1s  
        span
            font-size:30px
            color:$color
        &:hover
            background-color :#d9d
    .message
        padding: 10px
        font: 20px Helvetica
        border: 1px solid #ccc
    .warning    
        @extends .message
        width 300px
        height 100px
        line-height 100px
        font-size   50px
    
  
            
</style>

-->