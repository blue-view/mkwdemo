import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { getHttp, postHttp,ApiUrl } from './common/js/Api'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/css/custom.css'



Vue.use(MintUI)
Vue.prototype.$getHttp = getHttp
Vue.prototype.$postHttp = postHttp
Vue.prototype.$apiUrl = new ApiUrl()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  
  
}).$mount('#app')
