import Vue from 'vue'
import axios from 'axios'
import Mint from 'mint-ui';


Vue.use(Mint);

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
  Mint.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        setTimeout(() => {
          resolve(response)
          Mint.Indicator.close() // // 关闭动画
        }, 1000);

      })
      .catch(err => {
        reject(err)
        Mint.Indicator.close() // // 关闭动画
        Mint.MessageBox.alert('message', err)
      })
  })
}
export function postHttp(url, data = {}) {
  Mint.Indicator.open({
    text: '加载中...',
    spinnerType: 'triple-bounce'
  })
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        setTimeout(function () {
          resolve(response)
          Mint.Indicator.close() // // 关闭动画
        }, 1000);

      }, (err) => {
        reject(err)
        Mint.Indicator.close()
      })
  })
}