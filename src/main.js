import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import env from './env'

//baseURL根据跨域的不同方式设置来设置，这里是代理跨域的设置
axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = '8000';
//接口返回错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
