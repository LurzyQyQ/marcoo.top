import axios from "../utils/request";

// 获取精品歌单
export const playlistUs = (data) => {
    return axios.request({
        method: "post",
        url: `/api/top/playlist?cat=${data}&limit=10`,
        data: data
    })
}
// 获取歌单所有歌曲
export const playlistAll = (data) => {
    return axios.request({
        method: "post",
        url: `/api/playlist/track/all?id=${data}&limit=50`,
        data: data
    })
}
// 判断音乐是否可用
export const songCheck = (data) => {
    return axios.request({
        method: "post",
        url: `/api/check/music?id=${data}`,
        data: data
    })
}
// 获取音乐 url
export const songUrl = (data) => {
    return axios.request({
        method: "post",
        url: `/api/song/url/v1?id=${data}&level=standard`,
        data: data
    })
}
// 获取音乐详情
export const songDetail = (data) => {
    return axios.request({
        method: "post",
        url: `/api/song/detail?ids=${data}`,
        data: data
    })
}

