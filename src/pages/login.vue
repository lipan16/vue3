<template>
    <div class="page">
        <van-image class="avatar-img" :src="avatarImg" alt=""></van-image>
        <van-form>
            <van-field label="用户名：" type="text" v-model="name" placeholder="用户名"></van-field>
            <van-field label="密码：" type="password" v-model="password" placeholder="密码"></van-field>
            <van-button round block :disabled="isLogin" @click="login">登陆</van-button>
        </van-form>
    </div>
</template>

<script>
import {
    reactive,
    toRefs,
    computed
}                  from 'vue'
import {useRouter} from 'vue-router'

export default {
    name: "login",
    setup(){
        const router = useRouter()
        const data    = reactive({
            name     : '',
            password : '',
            avatarImg: require('../assets/logo.png')
        })
        const isLogin = computed(() => {
            return data.name === '' || data.password === ''
        })


        function login(){
            const temp = {name: data.name, password: data.password}
            window.sessionStorage.setItem('token', JSON.stringify(temp))
            router.push('/')
        }

        return {
            ...toRefs(data), isLogin, login
        }
    }
}
</script>

<style lang="less" scoped>
.page {
    top        : 0;
    bottom     : 0;
    width      : 100%;
    position   : absolute;
    text-align : center;

    .avatar-img {
        width         : 40px;
        height        : 40px;
        margin-top    : 100px;
        margin-bottom : 10px;
    }

    /deep/ .van-field__label {
        width        : 4em;
        margin-right : 0;
    }

    /deep/ .van-button--block {
        width            : 80%;
        margin           : 40px auto;
        background-color : #1989fa;
    }

    /deep/ .van-button--disabled {
        background-color : #ccc;
    }
}
</style>
