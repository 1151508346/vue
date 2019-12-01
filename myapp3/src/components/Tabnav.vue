<template>
    <div class="tabnav">
        <div class="navbox">
            <router-link class="navitem" to="/" >tab1</router-link>
            <router-link class="navitem" to="/tab2">tab2</router-link>
            <router-link class="navitem" to="/tab3">tab3</router-link>
            <router-link class="navitem" to="/tab4">tab4</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    .navbox{
        display:flex;
    }
    .navitem{
        flex:1;
        border:1px solid red;
        display:block;
    }
</style>