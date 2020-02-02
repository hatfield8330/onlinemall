<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
        <p class="title">
            {{goodsItem.title}}
        </p>
        <span class="price">
            {{goodsItem.price}}
        </span>
        <span class="collect">
            {{goodsItem.cfav}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsItem',
    props:{
        goodsItem:{
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .goodsItem{
        margin-top: 4px;
        padding-bottom: 10px;
        width: 48vw;
        position: relative;
    }
    .goodsItem img{
        width: 100%;
        border-radius: 5px
    }
    .goodsInfo{
        text-align: center;
    }
    .goodsInfo p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 4px;
    }
    .price{
        color: var(--color-high-text);
        margin-right: 24px;
    }
     .collect {
        position: relative;
    }
     .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 2px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>