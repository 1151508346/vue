<template>
    <mt-swipe :auto="50000">
        <mt-swipe-item>
            <img src="@/assets/img/banner/banner1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="@/assets/img/banner/banner2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="@/assets/img/banner/banner3.jpg" alt />
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 130px;
}
.mint-swipe-item{
   img{
       width:100%;
       height:100%;
   }
    
}

</style>
<style lang="">
    .mint-swipe-indicator.is-active{
        background: #26a2ff !important;
        opacity: 0.6;
    }
   
</style>