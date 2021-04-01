import axios      from 'axios';

let baseURL = "/api";
const service = axios.create({
    baseURL,
    timeout: 5000, // request timeout 5s
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});


// 发起请求之前的拦截器
service.interceptors.request.use(
    config => {
        // 如果有token 就携带tokon
        const token = window.localStorage.getItem("token");
        if(token){
            config.headers.Authorization = token;
        }
        return config;
    },
    error => Promise.reject(error)
);

// 是否正在刷新的标记
let refreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests = [];
// 响应拦截器
service.interceptors.response.use(
    response => {
        if(response.status && response.status === 200){ // 接口调用成功
            if(response.data.flags === 200){ //业务逻辑调用成功
                return response.data;
            }

            if(response.data.flags === 1008){ //token过期
                if(!refreshing){ // 正在刷新token操作，挂起其他请求
                    refreshing = true
                    return service.post('/refreshToken', {username: 'lipan',userid: 1}).then(response => {
                        let token = response.data.token
                        window.localStorage.setItem("token", token)
                        service.config.headers.Authorization = token
                        requests.forEach(cb => cb(token))
                        requests = []
                        return service
                    }).catch(error => {
                        // router.replace('/')
                        // return Promise.reject(new Error('刷新token失败，请重新登录'))
                    }).finally(() => {
                        refreshing = false
                    })
                }else{ // 正在刷新token，未执行的请求放入队列中
                    return new Promise((resolve) => {
                        requests.push((token) => {
                            service.config.headers.Authorization = token
                            resolve(service)
                        })
                    })
                }
            }

            return Promise.reject(new Error(response.data.info || "Error"));
        }else{ //接口调用失败
            return Promise.reject(new Error("接口调用Error"));
        }
    },
    error => {
        console.log(JSON.stringify(error))
        return Promise.reject(error);
    }
);

export default service;
