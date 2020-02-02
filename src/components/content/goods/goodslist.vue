<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goodsItem = 'item' :key="item.id">
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from './goodsitem'
export default {
    name: "GoodsList",
    props: {
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
      GoodsItem,  
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>