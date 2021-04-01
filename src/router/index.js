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
                id: 2,
                title: '首页',
                icon: 'el-icon-location',
            },
            children: [
                {
                    path: '/home/empBasic',
                    name: '基本资料',
                    component: () => import('../views/emp/empBasic.vue'),
                    meta: {
                        id: 3,
                        title: '基本资料',
                        icon:'',
                    }
                },
                {
                    path: '/home/empAdv',
                    name: '高级资料',
                    component: () => import('../views/emp/empAdv.vue'),
                    meta:{
                        id: 4,
                        title: '高级资料',
                        icon: '',
                    }
                }
            ]
        },
        {
            path: '/home',
            name: "导航2",
            component: () => import('../views/home.vue'),
            meta: {
                id: 5,
                title: '导航2',
                icon: 'el-icon-location',
            },
        }
    ]
})


export default router
