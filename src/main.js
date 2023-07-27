import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles' // 粒子插件
import axios from 'axios'
import * as echarts from 'echarts'
// 引入3d包
// import 'echarts-gl'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
// import Headers from '@/components/headers/index.vue' //全局组件

// Vue.component('Headers', Headers)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  axios,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
