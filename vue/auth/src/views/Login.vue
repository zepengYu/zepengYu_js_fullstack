<template>
<div>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <label for="">
            <input v-model="email" placeholder="email"/>
        </label>
        <label for="">
            <input v-model="pass" placeholder="password" type="password">
        </label>
        <button type="submit">Login</button>
    <!-- login 已完成， 再来login 跳转到首页
         logout 退出 清空token -->

    </form>
</div>    
</template>
<script>
import auth from '@/auth'
export default {
    data(){
        return{
            email:'jjj@aaa.com',
            pass:''
        }
    },
    methods:{
        login(){
        // 验证(email,pass)=>auth.Login()
        // jjj@aaa.com 111111
        // 失败，成功 localStorage.setItem('token',11231)
        // 1.auth.login 传参 callback
        // 2.this.$router
        auth.login(this.email, this.pass, (loggedIn) => {
            console.log(loggedIn)
            if (loggedIn) {
                this.$router.replace(this.$route.query.redirect || '/')
            }
        })
        }
    }
}
</script>
<style>

</style>
