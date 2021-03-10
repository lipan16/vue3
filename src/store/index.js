import {createStore} from 'vuex'

export default createStore({
    state: {
        showLoading: false,
        homeId: 122,
    },
    getters: {
        getHomeId(state){
            return state.homeId
        },
    },
    mutations: {
        showLoading(state){
            state.showLoading = true
        },
        hideLoading(state){
            state.showLoading = false
        }
    },
    actions: {},
    modules: {}
})
