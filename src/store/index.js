import {createStore} from 'vuex'

export default createStore({
    state: {
        showLoading: false,
        routes: [],
    },
    getters: {
        getRoutes(state){
            return state.routes
        },
    },
    mutations: {
        showLoading(state){
            state.showLoading = true
        },
        hideLoading(state){
            state.showLoading = false
        },
        initRoutes(state, data){
            state.routes = data
        }
    },
    actions: {},
    modules: {}
})
