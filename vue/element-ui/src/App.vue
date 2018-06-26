<template>
  <div id="app">
    <!-- <el-button-group class="one">
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">
        下一页<i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    <el-button-group class="one">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
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
    <form action="http://www.baidu.com" method="get" class="one">
      <el-button type="primary" native-type="submit">
      提交
    </el-button>
    <el-button type="primary" @click="doSubmit" size="mini" round>
      按钮
    </el-button>
    </form>
    <el-button type="primary" icon="el-icon-edit" circle></el-button> -->

    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
      <el-menu class="el-menu-vertical-demo" default-active="1">
        <el-menu-item index="1">活动发布</el-menu-item>
        <el-menu-item index="2">活动管理</el-menu-item>
      </el-menu>
    </div>
    <div class="main-right">
      <div class="activePublic" >
        <el-steps :space="200" :active="step">
          <el-step title="活动信息"></el-step>
          <el-step title="报名签名"></el-step>
          <el-step title="分享设置"></el-step>
          <el-step title="个性设置"></el-step>
        </el-steps>
        <div class="step1">
          <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="largett"></el-input>
            </el-form-item>
            <el-form-item label="" prop="fenLei">
              <el-row style="height:35px;" type="flex" align="middle">
                <el-col :span="3" style="width:90px">
                  <div class="el-form-item_label" prop="name">活动分类</div>
                </el-col>
                <el-col :span="2">
                  <el-button type="text" @click.prevent="dialogFormFenLeiVisible=true">设置</el-button>
                </el-col>
              </el-row>
              <el-radio-group v-model="ruleForm.fenLei">
                <el-radio v-for="item of ruleForm.fenLeis" :key="item.name" :label="item.name"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
            <el-form>
              <el-form-item>
                <el-tag v-for="fenLei of ruleForm.fenLeis" :key="fenLei.name" type="primary" @close="handleClose(fenLei)" closable>
                  {{fenLei.name}}
                </el-tag>
                <el-input  size="largett"></el-input>
                <el-button class="quxiao">取消</el-button>
                <el-button type="primary">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-form>
            <el-form-item label="活动标签" class="active">
              <el-col :span="24">
                <el-tag :key="tagg" v-for="tagg in dynamicTag" closable :disable-transitions="false"
                 @close="handleCloses(tagg)">{{tagg}}
              </el-tag>
              <el-button  class="button-new-tag" size="mini"  @click.prevent="dialogFormAddVisible=true">添加</el-button>
              </el-col>
            </el-form-item>
          </el-form>
          <el-dialog title="设置活动标签" :visible.sync="dialogFormAddVisible">
            <el-form>
              <el-form-item>
                <el-tag :key="tagg" v-for="tagg in dynamicTag" closable :disable-transitions="false"
                 @close="handleCloses(tagg)">{{tagg}}
              </el-tag>
                <el-input  size="largett"></el-input>
                <el-button class="quxiao">取消</el-button>
                <el-button type="primary">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-form>
            <el-form-item label="活动时间" required style="width: 750px;">
              <el-row>
                <el-col :span="5">
                <el-date-picker v-model="value1" type="date" placeholder="开始日期" size="medium"> </el-date-picker>
                </el-col>
                <el-col :span="5">
                <el-time-select size="medium" v-model="value2" :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}" placeholder="开始时间"></el-time-select>
              </el-col>
              <el-col :span="1">——</el-col>
              <el-col :span="5">
                <el-date-picker v-model="value1" type="date" placeholder="结束日期" size="medium"> </el-date-picker>
                </el-col>
                <el-col :span="5">
                <el-time-select size="medium" v-model="value2" :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}" placeholder="结束时间"></el-time-select>
              </el-col>
              </el-row>
              
              
              
            </el-form-item>
          </el-form>
        </div>
        <!-- 按钮组 上一步 下一步 发布活动 -->
        <el-button-group>
            <el-button
            v-show="preStep"
            @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button type="primary"
            v-show="nextStep" @click.native.prevent="handleNextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group>

      </div>
    </div>
    </main>
 
  </div>
</template>

<script>
// import ElButton from '@/components/ElButton'
// import ElButtonGroup from '@/components/ElButtonGroup'
export default {
  name: 'App',
  components: {
    // 'el-button':ElButton,
    // 'el-button-group':ElButtonGroup
  },
  data(){
    return{
      isLoading:false,
      step:0,
      preStep:true,
      nextStep:true,
      ruleForm:{
        name:'测试活动',
        fenLeis:[
          {
            name:'未发布'
          },
          {
            name:'测试活动'
          },
          {
            name:'精彩活动'
          },
        ],
        fenLei: '测试活动',
        tags:[]
      },
      dialogFormFenLeiVisible:false,
      dialogFormAddVisible:false,

      dynamicTag: ['标签一', '标签二', '标签三'],
      value1: '',
      value2: ''
    }
  },
  //生命周期
  mounted() {
    // setTimeout(() =>{
    //   this.disabled = true;      
    // },2000);
  },
  methods:{
    handleCloses(tagg) {
        this.dynamicTag.splice(this.dynamicTag.indexOf(tagg), 1);
      },
    handleClose(fenLei) {
        this.ruleForm.fenLeis.splice(this.ruleForm.fenLeis.indexOf(fenLei), 1);
      },
    doLoading(){
      console.log('aaa');
    },
    doSubmit(evt){
      console.log(evt)
    },
    handlePreStep(){
        this.step--;
      this.goStep(this.step);
    },
    handleNextStep(){
      this.step++;
      this.goStep(this.step);
    },
     goStep(n){
      switch(n) {
        case 1:
          this.preStep = false
          this.nextStep = true
        break;
        case 2:
        case 3:
          this.preStep = true
          this.nextStep = true
          break;
        case 4:
          this.preStep = true
          this.nextStep = false

      }
    }
  }
}
</script>

<style >
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    min-width: 1200px;
    margin: 0 auto;
    font-family: sans-serif;
  }
  header{
    z-index: 100;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: 4px solid #3091f2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12),0 0 6px 0 rgba(0, 0, 0, .04);
  }
  header.header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  header .el-menu-demo{
    padding-left: 300px !important;
  }
  main{
    margin-top: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;  
    min-height: 800px;  
    border: solid 40px #E9ECF1;  
    background-color: #FCFCFC;  
  }
main .main-left{
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
  }
main .main-right{
    -webkit-box-flex:1;
    -ms-flex:1;flex:1; 
    background-color: #fff; 
    padding: 50px 70px;
  }
main .el-menu{
    background-color: transparent!important;
  }
  .quxiao{
    margin-left: 430px;
    margin-top: 15px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-input__icon{
    padding-left: 120px;
  }
  .el-input--prefix .el-input__inner{
    padding-left: 40px;
  }
  .el-date-editor.el-input{
    width: 170px;
  }
  .el-form-item__label{
    float: none;
  }
</style>
