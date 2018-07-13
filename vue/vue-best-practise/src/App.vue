<template>
  <div id="app">
    <div id="wrapper">
        <p>
            FullName: {{ fullName}}
        </p>
        <p>
            FirstName: <input type="text" v-model="firstName">
        </p>
        <p>{{obj.a}}</p>
        <p>obj.a <input type="text" v-model="obj.a"></p>
        <main-component></main-component>
        <nav class="navbar navbar-default">
            <div class="container">
                <a href="" class="navbar-brand">
                    <i class="glyphicon glyphicon-time">计划版</i>
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/home">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/time-entries">计划列表</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
                <sidebar/>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import MainComponent from '@/components/MainComponent'
export default {
  name: 'App',
  data () {
    return {
      firstName: '明',
      lastName: '小',
      fullName: '',
      obj: {
        a: '123'
      }
    }
  },
  components: {
    Sidebar,
    MainComponent
  },
  watch: {
    // firstName (newName, oldName) {
    //   console.log(newName, oldName)
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      handler (newName, oldName) {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  }
  // computed: {
  //   fullName () {
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }
}
</script>

<style>
</style>
