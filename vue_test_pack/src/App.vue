<template>
  <div >
     <v_header :seller="seller"></v_header>
     <div class="tabs">
        <div class="tab_item">
           <router-link to="/goods" >商品</router-link>
        </div>
        <div class="tab_item">
           <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab_item">
           <router-link to="/seller">商家</router-link>
           
        </div>
     </div>
       <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';
var ERR_OK=0;
export default {
    data(){
      return{
       seller:{}
      }
    },
    created(){
        this.$http.get('/api/seller').then((res)=>{
           res = res.body;
           if (res.errno === ERR_OK) {
              this.seller = res.data;
           }
        })
    },
    components: {
       v_header:header
    }   
}
</script>

<style>
.tabs{
   display: flex;
   width:100%;
   height: 40px;
   line-height: 40px;
}
.tabs .tab_item{
   flex:1;
   text-align: center;
}
.tabs .tab_item>a{
  display: block;
  font-size: 14px;
  color:rgb(77,85,93);

}
.tabs .tab_item>a.active{
  color:rgb(240,20,20);
}
</style>
