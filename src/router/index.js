import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../views/login/login.vue'),
            enabled: 'true', //是否在侧边导航栏显示
        },
        {
            path: '/home',
            name: "首页",
            component: () => import('../views/home.vue'),
            meta: {
                title: '首页',
                icon: 'el-icon-location',
            }
        }
    ]
})


export default router
