import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'
import store       from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './style/global.less'
// import vant from 'vant'
// import 'vant/lib/index.less'

const app = createApp(App);

app.use(router).use(store).use(ElementPlus).mount('#app')
