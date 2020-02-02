<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'TabBar',
    components:{

    } 
}
</script>

<style>
   #tab-bar{
       padding: 5px;
       display: flex;
       position: fixed;
       left: 0;
       right: 0;
       z-index: 9;
       bottom: 0;
       background-color: #f6f6f6;
       box-shadow: 0 -2px 10 rgba(100,100,100,.5)；
       
   }
   
</style>