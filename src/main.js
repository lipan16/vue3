import {createApp} from 'vue'
import App         from './App.vue'
import vant        from 'vant'
import 'vant/lib/index.css'
import router      from './router'
import state       from './state'

createApp(App)
    .use(vant)
    .use(state)
    .use(router)
    .mount('#app')
