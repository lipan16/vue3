import {
    createRouter,
    createWebHistory
}                 from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../views/login/login.vue'),
            hidden: 'true', //是否在侧边导航栏显示
        },
        {
            path: '/home',
            name: "导航1",
            icon: 'el-icon-location',
            component: () => import('../views/home.vue'),
            children: [
                {
                    path: '/home/test1',
                    name: '选项1',
                    icon: '',
                    component: () => import('../views/test/test1.vue')
                },
                {
                    path: '/home/test1',
                    name: '选项2',
                    icon: '',
                    component: () => import('../views/test/test1.vue')
                },
            ]
        },
        // {
        //     path: '/home',
        //     name: "导航2",
        //     icon: 'el-icon-menu',
        //     component: () => import('../views/home.vue'),
        // }
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行 next():放行    next('/login'):强制跳转

    if(to.path === '/'){
        next()
    }
    // initMenu(router, store) // 初始化菜单
    // const tokenStr = window.localStorage.getItem('lipan') // 获取token
    // if(!tokenStr){ // 没有token 跳转登录页面
    //     return next('/')
    // }
    next()
})
export default router
