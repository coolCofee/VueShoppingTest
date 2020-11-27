<template>
  <div id="home">
    <nav-bar class="navbar-home">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banner"/>
    <home-recommends :recommends="recommends"/>
    <feature-view />
    <tabbar-control :title="['流行','新款','精选']" class="home-tabbar-control" @tabOnclick = "tabParentClick" />
    <good-list :goods = showGoodType />
<!--    <good-list :goods = "goods.pop.list"/>-->
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabbarControl from "components/content/tabbarControl/TabbarControl";

  import HomeSwiper from "./childhome/HomeSwiper";
  import HomeRecommends from "./childhome/HomeRecommends";
  import FeatureView from "./childhome/FeatureView";
  import GoodList from "components/content/gooList/GoodList";

  import {
    getHomeMultidata,
    getHomeGoodsdata
  } from "network/home";
  import GoodListItem from "../../components/content/gooList/GoodListItem";

  export default {
    name: "Home",
    components: {
      GoodListItem,
      NavBar,
      TabbarControl,
      HomeSwiper,
      HomeRecommends,
      FeatureView,
      GoodList
    },
    data(){
      return {
        banner:[],
        recommends:[],
        goods:{
          'pop':{
            page:0,
            list:[]
          },
          'new':{
            page:0,
            list:[]
          },
          'sell':{
            page:0,
            list:[]
          }
        },
        //当前商品类型
        currentGoodsType:'pop'
      }
    },
    computed:{
      showGoodType(){
        return this.goods[this.currentGoodsType].list
      }
    },
    created() {
      //1.请求数据源
      this.getHomeMultidata();
      this.getHomeGoodsdata("pop");
      this.getHomeGoodsdata("new");
      this.getHomeGoodsdata("sell");
    },
    methods:{
      tabParentClick(index){
        switch (index) {
          case 0:
            this.currentGoodsType = 'pop';
            break;
          case 1:
            this.currentGoodsType = 'new';
            break;
          case 2:
            this.currentGoodsType = 'sell';
            break;
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }).catch( err =>{
          console.log(err)
        })
      },
      getHomeGoodsdata(type){
        var self = this;
        const page = self.goods[type].page + 1;
        getHomeGoodsdata(type,page).then(res =>{
            console.log(res);
            let totalInfo = res.data.list;
            self.goods[type].list.push(...totalInfo);
            self.goods[type].page += 1;

        })
      }

    }
  }
</script>

<style scoped>
  #home{
    padding-top:44px;
  }
  .navbar-home{
    background-color: var(--color-tint);
    color:#ffffff;
    position: fixed;
    top:0;
    left:0;
    right: 0;
    z-index: 9;
  }

  .home-tabbar-control{
    position: sticky;
    top:44px;
    background-color: #ffffff;
    z-index: 9;
  }
</style>
