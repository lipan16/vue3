import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes : [{
        path     : '/',
        name     : 'Hello',
        component: () => import('../pages/hello'),
    }, {
        path     : '/login',
        name     : 'Login',
        component: () => import('../pages/login')
    }
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行 next():放行    next('/login'):强制跳转

    if(to.path === '/login'){
        return next()
    }
    const tokenStr = window.sessionStorage.getItem('token') // 获取token
    if(!tokenStr){ // 没有token 跳转登录页面
        return next('/login')
    }
    next()
})
export default router
