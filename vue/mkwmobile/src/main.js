import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './App.vue'
import  './assets/icon/iconfont.css'
import './assets/css/reset.css'
import mock from './mock/mock'


Vue.config.productionTip = false

Vue.use(Vuex)

let Store = new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {}
});

new Vue({
  Store,
  router,
  render: h => h(App),
}).$mount('#app')

