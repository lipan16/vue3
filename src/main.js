import {createApp} from 'vue'
import App         from './App.vue'
import ElementPlus from './utils/elementPlus'
import './style/global.less';
import router      from "./router";
import store       from "./store";
import {initMenu}  from "./utils/menus";


// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行 next():放行    next('/login'):强制跳转

    const tokenStr = window.localStorage.getItem('token') // 获取token
    if(tokenStr){
        initMenu(router, store) // 初始化菜单
        next()
    }else{// 没有token 跳转登录页面
        if(to.path === '/'){
            next()
        }else{
            next('/?redirect=' + to.path);
        }
    }
})


const app = createApp(App);

app.use(router).use(store).use(ElementPlus).mount('#app')
