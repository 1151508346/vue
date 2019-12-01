<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/newlist">
        <img src="@/assets/img/grid/grid1.png" alt />
        <div class="mui-media-body">新闻咨询</div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="@/assets/img/grid/grid2.png" alt />
        <div class="mui-media-body">图片分享</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="@/assets/img/grid/grid3.png" alt />
        <div class="mui-media-body">商品购买</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="@/assets/img/grid/grid1.png" alt />
        <div class="mui-media-body">留言反馈</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
        <img src="@/assets/img/grid/grid2.png" alt />
        <div class="mui-media-body">视频专区</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
		<img src="@/assets/img/grid/grid3.png" alt />
        <div class="mui-media-body">联系我们</div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mui-table-view-cell {
  img {
    width: 50px;
    height: 50px;
  }
}
.mui-grid-view.mui-grid-9{
	background-color:#fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right:none;
		border-bottom:none;
}
 .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
</style>