// url = "https://suggest.taobao.com/sug?code=utf-8&q=%E8%8A%B1&_ksTS=1567611795525_876&code=utf-8&area=c2c&callback=jsonp877"
import jsonp from "jsonp";
// var url = "https://suggest.taobao.com/sug?code=utf-8&q=%E8%8A%B1&_ksTS=1567611795525_876&code=utf-8&area=c2c&callback=jsonp877"
// export default function iJSONP(url,queryData,option){
// //    https://suggest.taobao.com/sug
//     url = (url.indexOf("?")<0 ? url+"?":"&")+data2urlstring(queryData);

//     return new Promise((res,rej)=>{
//         jsonp(url,option,(err,data)=>{
//             if(err) rej(err);
//             res(data);
//         })
//     })
// }
// function data2urlstring(queryData){
//     let str = "";
//     for (let key in queryData){
//         str+="&"+key+"="+queryData[key];

//     }
//     return str.substring(1);
// }
// 1. 然后创建一个jsonp.js
import originJSONP from 'jsonp'   //引用jsonp

　　export default function ijsonp(url,data,options){

　　　　//地址判断和调用处理地址函数

　　　　url +=(url.indexOf('?')<0?'?':'&')+param(data)

　　　　//返回一个Promise

　　　　return new Promise((resolve,reject)=>{

　　　　　　originJSONP(url,options,(err,data)=>{  //用原始的jsonp调用有三个参数

　　　　　　　　if(!err){

　　　　　　　　　resolve(data)

　　　　　　　　}else{

　　　　　　　　　reject(err)

　　　　　　　　}

　　　　　　})

　　　　})

　　}
function param(data){

    let url = '';
  
    for(var k in data){
  
      let value = data[k]!==undefined?data[k]:'';
  
      url +=`&${k}=${encodeURIComponent(value)}`;  //地址拼接参数
  
    }
      return url ? url.substring(1):''
  }