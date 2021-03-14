import {createApp} from 'vue'
import App         from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './style/global.less';
import router      from "./router";
import store       from "./store";

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
