<template>
  <div id="app">
    <el-button loading type="success">
      成功按钮
    </el-button>
    <el-button @click="doLoading" :loading="isLoading" icon="el-icon-edit" type="primary">
    </el-button>
    <el-button :disabled="disabled" type="info">
      信息按钮
    </el-button>
    <el-button :disabled="disabled" type="warning">
      警告按钮
    </el-button>
    <el-button :disabled="disabled" type="danger">
      危险按钮
    </el-button>
  </div>
</template>

<script>
import ElButton from '@/components/ElButton'
export default {
  name: 'App',
  components: {
    'el-button':ElButton
  },
  data(){
    return{
      disabled:false,
      isLoading:false
    }
  },
  //生命周期
  mounted() {
    setTimeout(() =>{
      this.disabled = true;      
    },2000);
  },
  methods:{
    doLoading(){
      console.log('aaa');
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
