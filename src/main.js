import {createApp} from 'vue'
import App         from './App.vue'
import router      from "./router";
import store       from "./store";
import './style/global.less';
import ElementPlus from './utils/elementPlus'
import {initMenu}  from "./utils/menus";


// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    const tokenStr = window.localStorage.getItem('token') // 获取token
    if(tokenStr){
        // initMenu(router, store) // 初始化菜单
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
