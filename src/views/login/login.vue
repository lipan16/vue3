<template>
    <div class="login-page">
        <el-form ref="loginForm" :model="loginForm" class="login-form" autocomplete="on">
            <el-image class="avatar-img" :src="avatarImg" alt=""/>
            <el-form-item>
                <el-input prefix-icon="el-icon-s-custom"
                          ref="username"
                          v-model="loginForm.username"
                          placeholder="用户名"
                          tabindex="1"
                          autocomplete="on"/>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="el-icon-s-custom"
                          ref="password"
                          v-model="loginForm.password"
                          placeholder="密码"
                          tabindex="2"
                          autocomplete="on"/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {
    reactive,
    toRefs,
}                  from 'vue'
import {useRouter} from 'vue-router'

export default {
    name: "Login",
    setup(){
        const router = useRouter()
        const data = reactive({
            loginForm: {
                username: '',
                password: '',

            },
            avatarImg: require('../../assets/logo.png')
        })

        function login(){
            const temp = {name: data.loginForm.username, password: data.loginForm.password}
            window.sessionStorage.setItem('token', JSON.stringify(temp))
            router.push('/')
        }

        return {
            ...toRefs(data), login
        }
    }
}
</script>

<style lang="less" scoped>
.login-page{
    min-height       : 100%;
    width            : 100%;
    background-color : beige;
    overflow         : hidden;

    .avatar-img{
        width      : 40px;
        height     : 40px;
        margin     : 0 auto;
        text-align : center;
    }

    .login-form{
        position  : relative;
        width     : 520px;
        max-width : 100%;
        padding   : 160px 0;
        margin    : 0 auto;
        overflow  : hidden;
    }
}
</style>
