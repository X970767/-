//对于axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import detail from "../store/detail";
import user from "../store/user";
import "nprogress/nprogress.css"
const requests=axios.create({
    // baseURL: "/api",
    timeout: 5000
})
//请求拦截器
requests.interceptors.request.use((config) => {
    if(detail.state.uuid_token) {
        config.headers.userTempId = detail.state.uuid_token
    }
    // 携带token给服务器
    if(user.state.token) {
        config.headers.token = user.state.token
    }
    nProgress.start();
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data
},(error) => {
    return Promise.reject(new Error('faile'))
})

export default requests