import {createApp} from 'vue'
import {
    Overlay,
    Cell,
    Button,
    Image as VanImage,
    Form,
    Field,
    Tag
} from 'vant'
import 'vant/lib/index.css' // vant全局样式
import '@vant/touch-emulator' // 桌面端适配

import {ElButton} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css' // element-plus全局样式

import 'lib-flexible/flexible' // 设置rem基准值 网页做 html的 font-size 适配用的

import App from './App.vue'
import router from './router'
import state from './state'

const VantUI = [Overlay, Cell, Button, VanImage, Form, Field, Tag]
const ElementUI = [ElButton]

const app = createApp(App)
VantUI.forEach(ui => {
    app.use(ui)
})
ElementUI.forEach(ui => {
    app.use(ui)
})
app.use(state).use(router).mount('#app')
