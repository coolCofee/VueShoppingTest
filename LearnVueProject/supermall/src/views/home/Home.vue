<template>
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banner"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childhome/HomeSwiper";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        banner:[],
        recommends:[]
      }
    },
    created() {
      //1.请求数据源
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.banner.list;
      }).catch( err =>{
          console.log(err)
      })
    }
  }
</script>

<style scoped>
  .navbar-home{
    background-color: var(--color-tint);
    color:#ffffff;
  }
</style>
