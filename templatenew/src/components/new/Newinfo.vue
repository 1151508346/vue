<template>
    <div class="newinfo-content">
       <h1 class="title">
           新闻标题--{{id}}
       </h1>
       <p class="subtitle">
           <span>发表时间</span>
           <span>发表次数</span>
       </p>
       <hr>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>
    .newinfo-content{
        // border:1px solid red ;
        padding:0 4px;
        .title{
            font-size:16px;
            color:#f00;
            text-align:center;
            margin:15px 0;
        }
        .subtitle{
            font-size:13px;
            color:#226aff !important;
            display: flex;
            justify-content: space-between;
        }
    }
</style>