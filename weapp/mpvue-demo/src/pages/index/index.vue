<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <p>{{mytodo}}</p>
    <input type="text" v-model="mytodo">
    <button @click="addTodo">加一条</button>
    <button @click="clearTodo">清空</button>
    <ul class="todos" >
      <!-- v-for v-key vue 循环指令 in 指定 key + index -->
      <!-- :动态绑定属性 标签或组建的属性和data相关 -->
      <li v-key='i' v-for="(todo, i) in todos" :class="{'done':todo.done}"
      @click="toggle(i)">{{todo.text}}</li>
      <li>{{todoNum}}/{{todos.length}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      mytodo:'',
      title:'Hello Mpvue',
      todos:[
        {'text':'吃饭', done:false}
      ]
    }
  },
  components: {
   
  },
  computed:{
    todoNum(){
      return this.todos.filter(todo => !todo.done)
      .length
    }
  },
  methods: {
    addTodo(){
      if(!this.mytodo){
        return
      }
      this.todos.push({text: this.mytodo, done:true});
      this.mytodo = ''
    },
    toggle(i){
      // 状态的切换
      // vue 只要改了数据，直接会变界面
      //状态 done true|false
      this.todos[i].done = !this.todos[i].done
    },
    clearTodo(){
      this.todos = []
    }
  },
  created () {
    
  }
}
</script>

<style scoped>
  /* 单页面属性 */
  .title{
    color: #ed12a3;
    text-align: center;
  }

  ul.todos{
    margin: 20px;
  }

  input{
    border: 2px solid #ed12a3;
  }

  .done{
    text-decoration: line-through;
  }
</style>
