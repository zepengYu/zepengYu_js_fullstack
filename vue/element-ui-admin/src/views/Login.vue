<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" label-position="left" ref="loginForm">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin" :loading="isloading">登录</el-button>
        </el-form>
    </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'

export default {
    data(){
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)){
                callback(new Error('请输入正确的用户名'))
            } else {
                callback();
            }
        };
        const validatePassword = (rule, value, callback) => {
            if(!value && value.length < 6){
                callback(new Error('密码至少6位'))
            } else {
                callback();
            }
        };
        return{
            isloading:false,
            loginRules:{
                username:[{
                    required:true, //必填
                    trigger:'blur',  //触发事件
                    validator:validateUsername  //规则
                }],
                password:[{
                    required:true,
                    trigger:'blur',
                    validator:validatePassword
                }]
            },
            loginForm:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        handleLogin(){
            //验证数据
            this.$refs.loginForm.validate(valid =>{
                if(valid){
                    console.log('提交');
                    this.isloading = true;
                    setTimeout(() =>{
                        this.isloading = false
                    },2000);
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
}
</script>
<style>

</style>
