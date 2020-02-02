<template>
  <div id="home">
      <nav-bar class="home_nav">
        <div slot="center">购物街</div>        
      </nav-bar>
      <home-swiper :banners= 'banners'/>
      <home-recommend :recommends= 'recommends'/>
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-control" @tabClick = 'tabClick'></tab-control>
      <goods-list :goods="goods[goodsType].list"></goods-list>
  </div>
  
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/goodslist'  
import HomeSwiper from './childcomponents/HomeSwiper'
import HomeRecommend from './childcomponents/HomeRecommend'
import FeatureView from './childcomponents/FeatureView'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import goodslistVue from '../../components/content/goods/goodslist.vue'

export default {
    name:'home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles:["流行","新款","精选"],
        goodsType: 'pop',
        goods: {
          'pop': { page: 0,list: []},
          'new': { page: 0,list: []},
          'sell': { page: 0,list: []},
        }
      }
    },
    created() { 
      // 获取轮播图数据和推渐渐信息数据
      this.getHomeMultidata();
      // 获取列表信息数据
      this.getHomeGoods('pop');     
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      // console.log(this.goods);
    },
    methods: {
      // 事件监听的方法
      tabClick(index){
          switch(index){
            case 0:
              this.goodsType = 'pop';              
              break;
            case 1:
              this.goodsType = 'new';
              break;
            case 2:
              this.goodsType = 'sell';
          }
          // this.getHomeGoods(this.goodsType);
      },
      // 获取网络请求的方法
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          console.log(this.banners)
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          console.log(res)
        })
      }
    },
}
</script>

<style>
.home_nav{
  position: fixed;
  top: 0;
  background-color: var(--color-lint);
  color: white;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>