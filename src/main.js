import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store/index'
// import store from './store/main'

// import env from './env'
const mock = false
if (mock) {
  require('./mock/api')
}

/* baseURL根据跨域的不同方式设置来设置，这里是代理跨域的设置 */
axios.defaults.baseURL = '/api';
/* 如果是CORS跨域和jsonp跨域，可以根据不同的环境变量获取不同的地址*/
// axios.defaults.baseURL = env.baseURL;
/* 请求超时设置 */
axios.defaults.timeout = '8000';

//接口返回错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    /* 首页是否登录没有关系 */
    if (location.hash !== '#/index') {
      // eslint-disable-next-line no-debugger
      window.location.href = '/#/login'
    }
    // return Promise.reject(res);
  } else {
    // alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-balls.svg'
})
Vue.use(VueCookie)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
