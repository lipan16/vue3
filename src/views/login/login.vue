<template>
    <div class="login-page">
        <el-form :rules="rules" :model="loginForm" ref="loginFormRef" class="login-form">
            <h3 class="login-title">系统登录</h3>
            <el-form-item prop="username">
                <el-input prefix-icon="el-icon-s-custom"
                          v-model="loginForm.username"
                          placeholder="用户名"
                          tabindex="1"
                          auto-complete="on"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="el-icon-s-custom"
                          v-model="loginForm.password"
                          placeholder="密码"
                          tabindex="2"
                          auto-complete="on"/>
            </el-form-item>
            <el-form-item prop="captcha" class="captcha">
                <el-input v-model="loginForm.captcha"
                          class="captcha-code"
                          placeholder="点击图片更换验证码"
                          tabindex="3"
                          auto-complete="off"/>
                <img :src="captchaUrl" class="captcha-url" alt=""/>
            </el-form-item>
            <el-form-item class="login-btn">
                <el-checkbox v-model="checked" tabindex="4">记住我</el-checkbox>
                <el-button type="primary" @click="submitLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ElMessage} from "element-plus";
import {
    reactive,
    toRefs,
    ref
}                  from 'vue'
import {useRouter} from 'vue-router'

export default {
    name: "Login",
    setup(){
        const router = useRouter()
        const data = reactive({
            loginForm: {
                username: '', //用户名
                password: '', //密码
                captcha: '', //验证码
            },
            captchaUrl: '', //验证码图片url
            checked: true, //是否记住我
            rules: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                captcha: [{required: true, message: '请输入验证码', trigger: 'blur'}],
            }
        })
        const loginFormRef = ref(null);

        function submitLogin(){
            loginFormRef.value.validate((valid) => {
                if(!valid){
                    ElMessage.error('请输入所有字段');
                    return false;
                }
            })
            const temp = {name: data.loginForm.username, password: data.loginForm.password}
            window.sessionStorage.setItem('token', JSON.stringify(temp))
            // router.push('/')
        }

        return {
            ...toRefs(data), submitLogin, loginFormRef
        }
    }
}
</script>

<style lang="less" scoped>
.login-page{
    height           : 100%;
    width            : 100%;
    background-color : #ffffff;
    display          : flex;

    .login-form{
        max-width : 100%;
        width     : 400px;
        padding   : 160px 0;
        margin    : 0 auto;
        overflow  : hidden;
    }

    .login-title{
        text-align : center;
    }

    .captcha{
        display : flex;
        //justify-content : flex-start;
        //align-items     : flex-end;

        .captcha-code{
            width : 200px;
            //flex-grow : 1;
        }

        .captcha-url{
            height : 40px;
        }
    }

    .login-btn{
        //display: flex;
        //justify-content: center;
    }

}
</style>
