<template>
    <div>
            Test1
           
            {{this.$store.state.vuexData}}
             {{this.$store.getters.changeVuexDataName}}
            <hr>
            {{JSON.stringify(this.vuexData,null,4)}}
            {{this.$store.getters.change2VuexDataName}}

            {{$store.state}}
            <hr>
            <button @click = "changeCount">changeCount</button>
         
            <!-- {{JSON.stringify($store)}} -->
    </div>
</template>

<script>
import { mapState } from "vuex"
import { ADD } from "../mutation-type";
export default {
    // name:"test1",
    data(){
        return {
            
        }
    },
    created(){
       var  vuexData = {name:"aaa",age:20}
       this.$store.commit({
           type:ADD,
           vuexData
       })
       var self = this;
       
    },
    methods:{
        changeCount(){
            console.log("changeCount")
            this.$store.getters.changeCount
        }
    },
    computed:
        // vuexData:function(){
        //     return this.$store.state.vuexData
        // }
        // mapState({
        //     vuexData:(state)=>state.vuexData
        // })
        {
            // ...mapState({
            //     vuexData:"vueData"
            // })
            ...mapState(["vuexData"])
        }
        
        
    
}
</script>

<style>

</style>