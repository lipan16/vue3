import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path     : '/',
    name     : 'hello',
    component: () => import('../pages/hello'),
    meta     : {
        index: 0
    }
}]

export default createRouter({
    history: createWebHistory(),
    routes : routes
})