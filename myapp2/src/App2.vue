<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <router-view/> -->
    <div v-if="toggle">
      <HelloWorld />
    </div>
    <button @click="changeToggle">点击</button>

    <!-- <div class="swiper-container" ref="swipercontainer" style="height:400px;border:1px solid red;"> -->

    <!-- <div class="swiper-wrapper" ref="swiperwrapper">
            <div class="swiper-slide">
                <img src="./assets/images02/1.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="./assets/images02/2.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="./assets/images02/3.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="./assets/images02/4.jpg" alt="">
            </div>
        </div>
    <div id="swiper-pagination" class="swiper-pagination" style=""></div>-->

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
    <!-- </div> -->

    <div class="wrapper">
      <swiper id="swiper" :options="swiperOption">
        <swiper-slide style="width:100%;">
          <img src="./assets/images02/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/images02/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/images02/3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/images02/4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/images02/5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/images02/6.jpg" />
        </swiper-slide>
      </swiper>
      <div class="swiper-scrollbar"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
// import Swiper from "vue-awesome-swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import BScroll from "better-scroll";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "App",
  components: {
    swiper,
    swiperSlide,
    HelloWorld
  },

  data: function() {
    return {
      toggle: false,
      currentPageIndex: 0,
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
          progressbarOpposite: true //使进度条分页器与Swiper的direction参数相反
          // bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
          // dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          // dynamicMainBullets: 1, //动态分页器的主指示点的数量
          // hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          // clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        loop: true
      }
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
<style lang="css" scoped>
	.wrapper {
		border: 1px solid black;
		position: relative;
	}
	#swiper {
		border: 1px solid red;
		width: 100%;
		height: 600px;
	}
	#swiper img {
		width: 100%;
	}
	.swiper-container {
		width: 200px;
	}
	.swiper-wrapper {
		border: 1px solid red;
	}
	.swiper-pagination {
		position: absolute;
		bottom: 6%;
		z-index: 999;
		left: 48%;
	}
	.swiper-slide {
		width: 200px;
	}
	.swiper-slide img {
		width: 200px;
		height: 100%;
	}
</style>
<style >
.swiper-pagination-bullet-active {
	background: #d00 !important;
}
</style>
