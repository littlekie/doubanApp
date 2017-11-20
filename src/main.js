// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from 'vue-resource'
require('./assets/style/reset.css')
require('./assets/js/jq.js')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iView from 'iview'; // 导入组件库  
import 'iview/dist/styles/iview.css'; // 导入样式  
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
