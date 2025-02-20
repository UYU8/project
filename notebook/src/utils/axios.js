import axios from 'axios';
import { Toast } from 'zarm';

axios.defaults.baseURL = '/api';
// 跨域 默认不带cookie
axios.defaults.withCredentials = true; // 允许携带cookie
// 自定义请求头 约定 让后端知道这是异步的请求
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// JWT token Authorization 授权码
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token')}` || null;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use(res => {
    if(typeof res.data !== 'object'){
        console.log(res.data)
        Toast.show('服务端异常啊')
        // 错误信息
        return Promise.reject(res)
    }
    if(res.data.code !== 200){
        if(res.data.msg) Toast.show(res.data.msg)
        if(res.data.code === 401){
            window.location.href = '/login'
        }
        return Promise.reject(res.data)
    }
})
export default axios