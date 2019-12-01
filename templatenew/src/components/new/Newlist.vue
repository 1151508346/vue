<template>
  <div class="newlist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for=" (item) of newsinfo" :key="item.id" >
        <router-link :to="'/home/newinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.picUrl"
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.productTime}}</span>
              <span>点击次数:{{item.productCount}}次</span>
            </p>
          </div>
        </router-link>
      </li>
     
     

    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
           
            newsinfo:[
                {
                    id:1,
                    title:"幸福",
                    picUrl:"http://img5.imgtn.bdimg.com/it/u=2999965978,1833943115&fm=26&gp=0.jpg",
                    productTime:new Date().toLocaleString(),
                    productCount:3
                },{
                    id:2,
                    title:"快乐",
                    picUrl:"http://img5.imgtn.bdimg.com/it/u=2999965978,1833943115&fm=26&gp=0.jpg",
                    productTime:new Date().toLocaleString(),
                    productCount:0
                },{
                    id:3,
                    title:"高兴",
                    picUrl:"http://img5.imgtn.bdimg.com/it/u=2999965978,1833943115&fm=26&gp=0.jpg",
                    productTime:new Date().toLocaleString(),
                    productCount:4
                }
            ]
        }
    },
    created(){
        // this.$http.get("api/getnewlist").then(res=>{
        //     if(res.body.status==0){
        //         console.log(res)
        //     }else{

        //     }
        // })
    }
};
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size:14px;
            }
        }
    }
    .mui-ellipsis{
        font-size:12px;
        display:flex;
        justify-content: space-between;
        color:#226aff;
    }
</style>