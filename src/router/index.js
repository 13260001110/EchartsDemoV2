import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  }
  //   {
  //     path: '/equipmentMonitoring',
  //     name: 'EquipmentMonitoring',
  //     component: () => import('@/views/EquipmentMonitoring.vue'),
  //     meta: {
  //       title: '数字化设备'
  //     }
  //   },
  //   {
  //     path: '/productAccess',
  //     name: 'ProductAccess',
  //     component: () => import('@/views/ProductAccess.vue'),
  //     meta: {
  //       title: '数字化产品'
  //     }
  //   },
  //   {
  //     path: '/TotalEquipment',
  //     name: 'TotalEquipment',
  //     component: () => import('@/views/TotalEquipment.vue'),
  //     meta: {
  //       title: '装备总数'
  //     }
  //   },
  //   {
  //     path: '/TotalEquipmentLower',
  //     name: 'TotalEquipmentLower',
  //     component: () => import('@/views/TotalEquipmentLower.vue'),
  //     meta: {
  //       title: '装备总数下钻页'
  //     }
  //   }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
