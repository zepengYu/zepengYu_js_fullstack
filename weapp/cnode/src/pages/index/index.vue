<template>
    <view class="container">
      <slider-nav :navList="this.navList"></slider-nav>
    </view>
</template>
<script>
  import sliderNav from '@/components/slider-nav'
  import { navList } from '@/common/js/basic'
  export default {
    data(){
      return{
        navList:navList,
      }

    },
    components:{
      sliderNav
    }
    }

    
    
</script>
<style lang="scss" scoped>
  .container{
    height: 100%;
  }

</style>

