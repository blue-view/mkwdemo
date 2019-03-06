import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Apple from './components/Apple'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/helloWorld', component: HelloWorld },
    { path: '/apple', component: Apple }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')