<template>
  
      <li class="item" @click = 'clickLi'>
        {{content}}
      </li>
 

</template>

<script>
    export default {
       props:['content','index'], 
       methods:{
           clickLi(){
            //    console.log(this.index);
               this.$emit('delete',this.index);

           }
       }
    }
</script>
<style lang= "scss" scoped>
/* scoped  
子组件样式作用于它本身
如果没有就会使得父组件受到子组件(样式)的影响
 */
$color:green;
$yellow:yellow;
.item{
    color:$color;
    background-color:$yellow;
}
</style>

