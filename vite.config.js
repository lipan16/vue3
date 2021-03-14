import {defineConfig} from 'vite'
import vue            from '@vitejs/plugin-vue'
import path           from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') //设置别名
        }
    },
    server: {
        port:4000, //启动端口
        // open: true,
        proxy: {
        //     // 选项写法
        //     '/api': 'http://123.56.85.24:5000' //代理网址
        },
        cors:true
    }
})
