<template>
    <div id="new">
        new组件
        <li>
            <router-link  :to="{path:'/newList/1',query:msg }">newList/1</router-link>
        </li>
        <li>
            <router-link :to="{path:'/newList/2'}">newList/2</router-link>
        </li>
        <li>
            <router-link :to="{path:'/newList/3'}">newList/3</router-link>
        </li>

         <li>
            <router-link :to="{path:'/newList/4',query:{name:'aaa'}}">newList/4</router-link>
        </li>
     

       
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            msg:{
                name:"aaa",title:"title"
            }
        }
    },
    methods:{
        handleRouterLink(){
            console.log("点击了")
        }
    }

}
</script>

<style>

</style>