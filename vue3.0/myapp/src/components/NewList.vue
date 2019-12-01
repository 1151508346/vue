<template>
    <div id="newlist">
        newlist--{{$route.params.id}}
        <li v-for="(val,key) in msg " :key = "key">{{val}}----{{key}}</li>
            <button @click = "handleBtnMsg">handlebtnmsg</button>
        {{btnmsg}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"",
            btnmsg:"default"
        }
    },
    created(){
        // console.log("sadsa")
      
    },
    mounted(){
    },
    
    watch:{
        "$route":{
            handler(to,from){
                // console.log("变化了")
                // console.log(this.$route)
                setTimeout(()=>{
                    var aid = this.$route.params.id
                    var data = {id:aid,title:"data"+aid}
                    this.msg = data
                },1000)
            },
            immediate:true
        },
        btnmsg:{
            handler:function(to,from){
                console.log(to,from)
            },
            deep:true,
            // immediate
        }
    },
    methods:{
        handleBtnMsg(){
            var random = Math.random()*10;
            this.btnmsg = random+"";  
        }
    }
    

}
</script>

<style>

</style>