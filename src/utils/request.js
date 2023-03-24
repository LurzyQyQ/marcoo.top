import axios from "axios"

// const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api';
const service = axios.create({
    // baseURL: 'https://xql-digtal.com',
    baseURL: '',
    timeout: 5000,
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        'Access-Control-Allow-Origin':'*'
    }
});

// var Get = function(url,params){
//     return service.request({
//         method:"get",
//         url: url,
//         params,
//         headers: {
//             // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//             'Access-Control-Allow-Origin':'*'
//         }
//       })
// }

// var Post = function(url,data){
//     return service.request({
//         method:"post",
//         url: url,
//         data,
//         headers: {
//             // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//             'Access-Control-Allow-Origin':'*'
//         }
//       })
// }

export default service;

// export default {
//     Get,
//     Post,
//     service
// }