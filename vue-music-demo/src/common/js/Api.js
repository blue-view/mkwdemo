
import axios from 'axios'
import { Indicator } from 'mint-ui'

axios.defaults.timeout = 50000//默认请求超时
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
})

export function getHttp(url, params = {}) {
  // 创建动画mint-ui
  Indicator.open({
    // text: '加载中...',
    spinnerType: 'snake'
  })
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response)
        setTimeout(() => {
          resolve(response)
          Indicator.close() // // 关闭动画
        }, 1000);

      })
      .catch(err => {
        reject(err)
        Indicator.close() // // 关闭动画
        // Mint.MessageBox.alert('message', err)
      })
  })
}
export function postHttp(url, data = {}) {
  Indicator.open({
    // text: '加载中...',
    spinnerType: 'snake'
  })
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
        setTimeout(function () {
          resolve(response)
          Indicator.close() // // 关闭动画
        }, 1000);

      }, (err) => {
        reject(err)
        Indicator.close()
      })
  })
}
export function ApiUrl() {
  return {
    BaseUrl: "http://192.168.191.1:3000/",
    Banner: 'banner',
    Personalized: 'personalized',
    Album: 'top/album?offset=0&limit=8',
    TopList: 'top/list?idx=',
    HotPlayList: 'top/playlist?limit=6&order=new',//精选歌单,
    Search: 'search?keywords=',
    SearchHot: 'search/hot',
    SongMp3Url: 'song/url?id=',
    SongLyric: 'lyric?id=',
    PlayListDetail: 'playlist/detail?id='
  }
}