import {createApp} from 'vue'
import {
    Overlay,
    Cell,
    Button,
    Image as VanImage,
    Form,
    Field,
    Tag
}                  from 'vant'
import 'vant/lib/index.css' // vant全局样式
import 'lib-flexible/flexible' // 设置rem基准值 网页做 html的 font-size 适配用的

import App from './App.vue'
import router from './router'
import state from './state'

createApp(App)
.use(Overlay).use(Cell).use(Button).use(Form).use(Field).use(VanImage).use(Tag)
.use(state).use(router).mount('#app')