<template>
    <scroll-view class="swiper-tab" scroll-x style="width: 100%">
        <view v-for="(item,index) in navList" :key="index" class="swiper-tab-item">{{item.title}}</view>
    </scroll-view>
</template>
<script>
    export default{
        name: "slider-nav",
        props:{

        navList:{
            type:Array
        }
    }
    }
    
</script>

<style lang="scss" scoped>
    .swiper-tab {
        width: 100%;
        text-align: center;
        line-height: 42px;
        white-space: nowrap;
        position: relative;
        .swiper-tab-item {
            transition: all $time;
            font-size: 18px;
            height: 42px;
            display: inline-block;
            color: #777777;
        }
    }
</style>
