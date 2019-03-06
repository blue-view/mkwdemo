import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import Util from './common/js/util'

Vue.config.productionTip = false

new Vue({
  mounted:function(){
    Util.setRem();
  },
  render: h => h(App),
}).$mount('#app')
