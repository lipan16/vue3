import {ElMessage} from "element-plus";
import service     from "./request";

export const initMenu = (router, store) => {
    if(store.state.routes.length > 0){
        return
    }
    service.post('/menu', {}).then(response => {
        //添加到路由
        let fmtRoutes = formatRoutes(response.data)

        fmtRoutes.forEach(each => {
            router.addRoute(each)
            store.commit('addRoute', each)
        })
    }).catch(error => {
        console.log(error)
        ElMessage.error(error)
    })
}

export const formatRoutes = (routes) => {
    let fmRoutes = [];
    routes.forEach(router => {
        let {id, path, name, icon, children, component, enabled, keepAlive, requireAuth } = router;

        // 路由对应的组件(动态加载)
        const componentC = (() => import(`../views/${component}.vue`)) || (() => import('../views/error/404.vue'))

        if(children && children instanceof Array){
            children = formatRoutes(children); //递归
        }

        let fmRouter = {
            path: path,
            name: name,
            enabled: enabled,
            children: children,
            component: componentC,
            meta:{
                id: id,
                icon: icon,
                keepAlive: keepAlive,
                requireAuth: requireAuth,
                title: name
            }
        }
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}
