<template>
    <div class="login-page">
        <el-form v-loading="loading"
                 element-loading-text="登录中..."
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.8)"
                 :rules="rules" :model="loginForm" ref="loginFormRef" class="login-form">
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
                          show-password
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
                <el-button type="primary" @click="submitLogin">登录</el-button>
                <el-button type="primary" @click="nsav">nav</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {ElMessage} from "element-plus";
import {
    toRefs, ref,
    reactive,
}                            from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore}            from 'vuex'
import service     from "../../utils/request"

export default {
    name: "Login",
    setup(){
        const route = useRoute() //当前的路由信息,包含URL解析得到的信息，路径，参数，query对象
        const router = useRouter() //全局路由的实例,有push，go，replace方法
        const store = useStore()
        const data = reactive({
            loginForm: {
                username: '', //用户名
                password: '', //密码
                captcha: '', //验证码
            },
            loading: false, //是否正在登录
            captchaUrl: '', //验证码图片url
            rules: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                captcha: [{required: true, message: '请输入验证码', trigger: 'blur'}],
            }
        })
        const loginFormRef = ref(null);

        // function refreshImg(){ //刷新验证码图片
        //     service('/refreshImg', {method: "get"}).then(response => {
        //
        //     }).catch(error => {
        //
        //     })
        // }

        function submitLogin(){ //登录按钮
            data.loading = true
            // loginFormRef.value.validate((valid) => {
            //     if(!valid){
            //         ElMessage.error('请输入所有字段');
            //         return false;
            //     }
            // })
            const temp = {
                username: data.loginForm.username,
                password: data.loginForm.password,
                captcha: data.loginForm.captcha
            }
            service({url: '/login', method: 'post', data: temp}).then(response => {
                store.commit('saveUserInfo', response.data)
                window.localStorage.setItem("token", response.data.token)
                window.localStorage.setItem("user", JSON.stringify(response.data))
                ElMessage.info('登录成功')
                let path = route.query.redirect;
                router.replace(path === '/' || path === undefined ? '/home' : path)
            }).catch(error => {
                ElMessage.error(error.toString())
            }).finally(() => {
                data.loading = false
            })
        }

        function nsav(){ //nsv按钮
            service({url: '/nav'}).then(response => {
                console.log(response)
            }).catch(error => {
                ElMessage.error(error.toString())
            })
        }


        return {
            ...toRefs(data), submitLogin, loginFormRef, nsav
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
