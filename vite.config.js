import {defineConfig} from 'vite'
import vue            from '@vitejs/plugin-vue'
import path           from 'path'

export default defineConfig({
    plugins: [vue()],
    alias: {
        '@': path.resolve(__dirname, 'src') //设置别名
    },
    server: {
        port: 4000, //启动端口
        // open: true, //开启浏览器
        proxy: {
            // ws:false, //webSocket
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true, //发送请求头host会被设置target
                pathReWrite: {
                    '^/': '/'
                },
            }, //代理
        },
        cors: true
    }
})
