import Vue from 'vue'
import App from './App.vue'
import { getHttp, postHttp } from './common/js/Api'
Vue.config.productionTip = false

Vue.prototype.$getHttp = getHttp
Vue.prototype.$postHttp = postHttp

import mock from './mock/mock'
import 'mint-ui/lib/style.css';

new Vue({
  render: h => h(App),
  created: function () {
    // //get网络请求
    // this.$getHttp('/news/index')
    //   .then((response) => {
    //    //请求返回数据 
    //   })

    // // post网络请求

    // this.$postHttp('/news/index')
    //   .then((response) => {
    //    //请求返回数据
    //   })
  }
}).$mount('#app')
