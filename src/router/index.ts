import { useIsMobileTerminal } from '@/utils/flexible'
import { createRouter, createWebHistory } from 'vue-router'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 获取终端类型
const { isMobileTerminal } = useIsMobileTerminal()
console.log(isMobileTerminal.value, 'out')

const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes,
})

// // 添加路由的函数
// const setupRoutes = (isMobile: boolean) => {
//   console.log(1)

//   // 清除所有已存在的路由
//   router.getRoutes().forEach(route => {
//     if (route.name) {
//       router.removeRoute(route.name)
//     }
//   })

//   // 添加新路由
//   const routes = isMobile ? mobileRoutes : pcRoutes
//   routes.forEach(route => router.addRoute(route))
// }

// // 监听终端类型变化
// watch(
//   () => isMobileTerminal.value,
//   newValue => {
//     console.log(isMobileTerminal, 'wat')

//     setupRoutes(newValue)
//     // 重新导航到当前路由，触发路由更新
//     router.replace(router.currentRoute.value.fullPath)
//   },
// )

// router.beforeEach((to, from, next) => {
//   console.log(isMobileTerminal, 'rrr')

//   // 首次进入时添加路由
//   if (router.getRoutes().length === 0) {
//     setupRoutes(isMobileTerminal.value)
//     next({ ...to, replace: true })
//     return
//   }

//   next()
// })

export default router
