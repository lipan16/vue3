import {createApp} from 'vue'
import {
    ElForm, ElFormItem, ElImage, ElInput
}                  from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css' // element-plus全局样式

import App    from './App.vue'
import router from './router'
import store  from './store'

import '@/style/global.less'

const ElementUI = [ElForm, ElFormItem, ElImage, ElInput]
const app = createApp(App)

ElementUI.forEach(ui => {
    app.use(ui)
})
app.use(store).use(router).mount('#app')
