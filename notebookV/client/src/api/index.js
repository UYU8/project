import axios from "axios";
import { showToast } from 'vant';
import { useRouter } from "vue-router";
const router = useRouter();
axios.defaults.baseURL = "http://8.130.120.129:3000";//配置请求地址

axios.defaults.headers.post["Content-Type"] = "application/json";

// 请求拦截
axios.interceptors.request.use(req => {
  // 获取token
  const jwtToken = localStorage.getItem('token');//每次请求都携带token
  if (jwtToken) {
    req.headers.Authorization = jwtToken;//为所有请求添加请求头
  }
  return req;
});

// 响应拦截
axios.interceptors.response.use(
  res => {
  if(res.status !== 200){//程序错误
    showToast('服务器异常');
    return Promise.reject(res);//抛出异常
  }else {
    if(res.data.code !== 800){//逻辑错误
      if(res.data.code === 811){
        showToast(res.data.msg)
        return Promise.reject(res);
      }
    } 
    // console.log(res);
    return res.data;
  }
  
})
// (error) => {
//   if(error.response && error.response.status === 411){//token过期
//     showToast(error.response.data.msg);
//     setTimeout(() => {
//       window.location.href = '/login';
//     }, 4000);
//     return Promise.reject(error);
//   }
// });
export default axios;
