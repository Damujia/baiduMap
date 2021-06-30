import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './axiosApi/api'
import * as echarts from 'echarts'
import {Select, Option} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import '@/utils/rem.js'
import '@/style/app.less'

Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
