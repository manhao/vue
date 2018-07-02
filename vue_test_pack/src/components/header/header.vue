<template>
  <div class="header">
      <div class="content_wrapper">
      	  <div class="avatar">
      	  	  <img width="64" height="64" :src="seller.avatar" >
      	  </div>
      	  <div class="content">
      	  	  <div class="title">
      	  	  	   <span class="brand"></span>
      	  	  	   <span class="name">{{seller.name}}</span>
      	  	  </div>
      	  	  <div class="description">
      	  	  	   {{seller.description}}/{{seller.deliveryTime}}分钟送达
      	  	  </div>
      	  	  <div v-if="seller.supports" class="support">
      	  	  	   <span class="icon" :class="classMap[seller.supports[0].type]"></span>
      	  	  	   <span class="text">{{seller.supports[0].description}}</span>
      	  	  </div>
      	  </div>
      	  <div v-if="seller.supports" class="support-count" v-on:click="showDetail">
      	  	  <span class="count">{{seller.supports.length}}个</span>
  			  <span class="icon-keyboard_arrow_right"></span>
      	  </div>
      </div>
      <div class="bulletin_wrapper" v-on:click="showDetail">
      	  <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      	  <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="background_image">
      	   <img :src="seller.avatar" alt="" width="100%" height="100%">
      </div>
         <transition name="fade">
      <div v-show="detailShow" class="datail" >
      	   <div class="detail-wrapper clearfix">
      	   	    <div class="detail-main">
      	   	    	<h1 class="name">{{seller.name}}</h1> 
      	   	    	<div class="star_wrapper">
      	   	    	    <v_star :size="48" :score="seller.score"></v_star>
      	   	    	</div>
      	   	    	<div class="title">
      	   	    		<div class="line"></div>
      	   	    		<div class="text">优惠信息</div>
      	   	    		<div class="line "></div>
      	   	    	</div>
  	   	    		<ul v-if="seller.supports" class="supports ">
  	   	    			 <li class="support-item" v-for="item in seller.supports" >
  	   	    			 	 <span class="icon" :class="classMap[item.type]"></span>
  	   	    			 	 <span class="text">{{item.description}}</span>
  	   	    			 </li>
  	   	    		</ul>
  	   	    		<div class="title">
      	   	    		<div class="line"></div>
      	   	    		<div class="text">商家公告</div>
      	   	    		<div class="line "></div>
      	   	    	</div>
      	   	    	<div class="bulletin">
      	   	    		 <p class="content">{{seller.bulletin}}</p>
      	   	    	</div>
      	   	    </div>
      	   </div>
      	   <div class="detail-close" v-on:click="hideDetail">
      	   	   <span class="icon-close"></span>
      	   </div>
      </div>
      	   </transition>
  </div>
</template>

<script>
import star from '../star/star.vue';
export default {
   props:{
   	  seller:{
   	  	 type:Object
   	  }
   },
   data(){
   	 return {
   	 	detailShow:false
   	 }
   },
   methods:{
   	  showDetail(){
   	  	this.detailShow=true
   	  },
   	  hideDetail(){
   	  	this.detailShow=false

   	  }
   },
   created(){
   	  this.classMap= ['decrease','discount','special','invoice','guarantee']
   },
   components:{
   	  v_star:star
   }
}
</script>

<style>
   .header{
   	  position: relative;
      color: #fff;
      overflow: hidden;
      background: rgba(7,17,27,0.5);
   }
  .content_wrapper{
  	padding:24px 12px 18px 24px;
  	font-size: 0;
  	position: relative;
  }
  .content_wrapper .avatar{
  	display: inline-block;
  	vertical-align: top;
  }
  .content_wrapper .avatar>img{
    border-radius: 2px;
  }
  .content_wrapper .content{
  	display: inline-block;
  	font-size: 14px;
  	margin-left: 16px;
  }
  .content_wrapper .title{
  	  margin:2px 0 8px 0;
  }
   .content_wrapper .title>.brand{
  	  display: inline-block;
  	  width: 30px;
  	  height: 18px;
  	  background-image: url('brand@2x.png');
  	  background-size:30px 18px;
  	  background-repeat: no-repeat; 
  	  vertical-align: top;
  }
  .content_wrapper .title>.name{
  	 font-size: 16px;
     color: rgb(255,,255,255);
     margin-left: 6px;
     font-weight: bold;
     line-height: 18px 
  }
  .content_wrapper .description{
  	 font-size: 12px;
  	 line-height: 12px;
  	 margin-bottom:10px;
  }
  .content_wrapper .support .icon{
  	 display: inline-block;
  	 vertical-align: bottom;
  	 width:12px;
  	 height: 12px;
  	 margin-right: 4px;
  	 background-size: 12px 12px;
  	 background-repeat: no-repeat;
  }
  .content_wrapper .support .icon.decrease{
  	 background-image: url('decrease_1@2x.png');

  }
   .content_wrapper .support .icon.discount{
  	 background-image: url('discount_1@2x.png');

  }
   .content_wrapper .support .icon.special{
  	 background-image: url('special_1@2x.png');

  }
   .content_wrapper .support .icon.invoice{
  	 background-image: url('invoice_1@2x.png');

  }
   .content_wrapper .support .icon.guarantee{
  	 background-image: url('guarantee_1@2x.png');

  }
   .content_wrapper .support .text{
  	 line-height: 12px;
  	 font-size: 10px
  }
  .content_wrapper .support-count{
  	  position: absolute;
  	  right: 12px;
  	  bottom: 18px;
  	  padding:0 8px;
  	  height: 24px;
  	  line-height: 24px;
  	  border-radius: 14px;
  	  background: rgba(0,0,0,0.2);
  	  text-align: center;
  }
  .content_wrapper .support-count>.count{
  	display: inline-block;
  	 font-size: 10px;
  	 vertical-align: top;
  }
   .content_wrapper .support-count .icon-keyboard_arrow_right{
  	 font-size: 10px;
  	 margin-left: 2px;
  	 line-height: 24px;
  	 font-size: 10px;
  }
  .bulletin_wrapper{
  	 position: relative;
  	 height: 28px;
  	 line-height: 28px;
  	 padding:0 22px 0 12px;
  	 background: rgba(7,17,27,0.2);
  	 white-space: nowrap;
  	 text-overflow: ellipsis;
  	 overflow: hidden;
  }
  .bulletin_wrapper .bulletin-title{
  	 display: inline-block;
  	 width: 22px;
  	 height: 12px;
  	 vertical-align: middle;
  	  background-image: url('bulletin@2x.png') ;
  	  background-size: 22px 12px;
  	  background-repeat: no-repeat;
  }
   .bulletin_wrapper .bulletin-text{
  	 margin:0 4px;
  	 font-size: 10px;
  	 font-weight: 200;
  	 color: #fff;
  	 text-overflow: ellipsis;
  }
    .bulletin_wrapper .icon-keyboard_arrow_right{
     position: absolute;
     right: 12px;
     top: 10px;
     font-size: 10px
  }
  .background_image{
  	 position: absolute;
  	 top: 0;
  	 left: 0;
  	 width: 100%;
  	 height: 100%;
  	 z-index: -1;
     filter:blur(10px);
  }
  .datail{
  	 position: fixed;
  	 z-index: 100;
  	 top: 0	;
  	 left:0;
  	 width: 100%;
  	 height: 100%;
  	 overflow: auto;
  	 background: rgba(7,17,27,0.8);
     backdrop-filter:blur(10px);
  }
  .fade-enter-active {
    transition: all .5s ease;
  }
  .fade-enter, .fade-leave-to {
	background: rgba(7,17,27,0);
  }
  .detail-wrapper{
  	min-height: 100%;
  	width: 100%
  }
  .detail-wrapper .detail-main{
  	margin-top: 64px;
    padding-bottom: 64px
  }
  .datail .detail-close{
  	position: relative;
  	width: 32px;
  	height: 32px;
  	margin:-64px auto 0 auto;
  	clear:both;
  	font-size: 32px
  }
  .detail-wrapper .detail-main  .name{
  	 line-height: 16px;
  	 text-align: center;
  	 font-size: 16px;
  	 font-weight: 700;
  }
  .detail-wrapper .detail-main .star_wrapper {
  	margin-top:18px;
  	padding:2px 0;
  	text-align: center;
  }
  .detail-wrapper .detail-main .title {
  	display: flex;
  	margin: 30px auto 24px auto;
  	width: 80%
  }
  .detail-wrapper .detail-main .title .line {
  	flex:1;
  	position: relative;
  	top: -6px;
  	border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .detail-wrapper .detail-main .title .text{
  	 padding:0 12px;
  	 font-size: 14px; 
  }
  .detail-wrapper .detail-main  .supports{
  	 width: 80%;
  	 margin:0 auto; 
  }
   .detail-wrapper .detail-main  .supports .support-item{
      padding:0 12px;
      margin-bottom:12px;
      font-size: 0;

  }
  .detail-wrapper .detail-main  .supports .support-item:last-child{
      margin-bottom:0px;  
  }
  .detail-wrapper .detail-main  .supports .support-item .icon{
     display: inline-block;
     width:16px;
     height: 16px;
     vertical-align: top;
     margin-right: 6px;
     background-size: 16px 16px;
     background-repeat: no-repeat;
  }
    .detail-wrapper .detail-main  .supports .support-item .icon.decrease{
  	 background-image: url('decrease_2@2x.png');

  }
   .detail-wrapper .detail-main  .supports .support-item .icon.discount{
  	 background-image: url('discount_2@2x.png');

  }
   .detail-wrapper .detail-main  .supports .support-item .icon.special{
  	 background-image: url('special_2@2x.png');

  }
   .detail-wrapper .detail-main  .supports .support-item .icon.invoice{
  	 background-image: url('invoice_2@2x.png');

  }
   .detail-wrapper .detail-main  .supports .support-item .icon.guarantee{
  	 background-image: url('guarantee_2@2x.png');

  }
   .detail-wrapper .detail-main  .supports .support-item .text{
  	 line-height: 12px;
  	 font-size: 12px

  }

  .detail-wrapper .detail-main .bulletin{
  	 width:80%;
  	 margin:0 auto;
  }
  .detail-wrapper .detail-main .bulletin .content{
  	 padding:0 12px;
  	 line-height: 24px;
  	 font-size: 12px;
  }
</style>