<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="index" class="tab-control-item" @click="ItemClick(index)" :class="{ItemActive: currentIndex==index }">
          <span>
              {{item}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() {
        return {
            currentIndex: 0
        }
    },
    props:{
        titles:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        ItemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick', index)
        }
    },
}
</script>

<style>
.tab-control{
    display: flex;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    text-align: center
}
.tab-control-item{
    flex: 1;
    background-color: #fff;
}
.ItemActive{
    color: var(--color-high-text);
}
.ItemActive span{
     border-bottom: 2px solid var(--color-high-text);
     padding: 5px;
}





</style>