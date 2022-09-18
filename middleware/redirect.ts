export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation('error') // 拒绝当前导航并显示可选错误消息
    // return abortNavigation() // 停止当前导航
  }
  return navigateTo('/')
})