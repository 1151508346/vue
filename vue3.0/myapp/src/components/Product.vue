<template>
    <div id="product">
        <router-link :to='{name:"productname",params:{name:"product",title:"产品"}}' >product</router-link>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>