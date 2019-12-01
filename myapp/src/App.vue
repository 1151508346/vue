<template>
  <div id="app">
    
      <h1 ref="content">dd</h1>
      <input type="text" v-model="inputparam" @input = "changeInput">
    <ul>
      <li v-for="(key ,index) in recommend" :key="index">
          {{key[0]}}
      </li>
    </ul>

  </div>
</template>

<script>
import iJSONP from "./jsonpDemo.js";
export default {
  name: 'App',
  data:function(){
    return {
      recommend:[],
      inputparam:"套子",
      timer:null
    }
  },
  created(){
    // var h1 =  this.$refs.content;
     
  },
  mounted(){
    this.getTaoBaoData();
  },
  methods:{
    getTaoBaoData(){
      var p = iJSONP("https://suggest.taobao.com/sug",{
        code:"utf-8",
        q:this.inputparam,
        _ksTS:"1567611795525_876",
        code:"utf-8",
        area:"c2c",
        format:'jsonp',

        // callback=jsonp877
        // https://suggest.taobao.com/sug?code=utf-8&q=%25E8%258A%25B1&_ksTS=1567611795525_876&area=c2c&format=jsonp&jsonCallBack=__jp0
        // https://suggest.taobao.com/sug?code=utf-8&q=%E8%8A%B1&_ksTS=1567611795525_876&code=utf-8&area=c2c&callback=jsonp877
      },{
        param:"callback"
      });
      
    //https://suggest.taobao.com/sug?code=utf-8&q=%E8%8A%B1&_ksTS=1567611795525_876&code=utf-8&area=c2c&callback=jsonp877

    p.then(data=>{
        this.recommend = data.result;
        console.log(data.result)
      })
    },
    changeInput(){
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
       this.getTaoBaoData()

    }, 200);
  }
  }

}
</script>

<style>


</style>
