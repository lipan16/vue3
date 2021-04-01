import {createStore} from 'vuex'

export default createStore({
    state: {
        showLoading: false,
        routes: [],
        routesId: [],
        userInfo: {},
    },
    getters: {
        getRoutes(state){
            return state.routes
        },
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations: {
        showLoading(state){
            state.showLoading = true
        },
        hideLoading(state){
            state.showLoading = false
        },
        addRoute(state, data){ //添加
            state.routesId.push(data.meta.id)
            state.routes.push(data)
        },
        saveUserInfo(state, userInfo){ //保存用户信息
            state.userInfo = userInfo
        }
    },
    actions: {

    },
    modules: {}
})
