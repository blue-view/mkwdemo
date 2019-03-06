import Vue from 'vue'
import Layout from './components/Layout'
import vueRouter from "vue-router"
import store from 'vuex'
import VueRouter from 'vue-router';
import Index from './pages/Index'

Vue.use(vueRouter)
Vue.use(store)

Vue.config.productionTip = false
let router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index
  }]
});

new Vue({
  router,
  store,
  render: h => h(Layout),
}).$mount('#app')
