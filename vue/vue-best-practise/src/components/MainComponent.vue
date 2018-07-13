<template>
  <div>
    Main eventBus 解决了兄弟间的事件传递问题 发布订阅者模式 摆托了兄弟组件传递需要父组件的问题，另一种方法 vuex 数据流 大项目用vuex
    <click-component v-for="i in 5" :key="i" :index="i"></click-component>
    <show-component></show-component>
  </div>
</template>
<script>
import ClickComponent from './click.vue'
import ShowComponent from './show.vue'
export default {
  components: {
    ClickComponent,
    ShowComponent
  }
}
</script>
<style>

</style>
