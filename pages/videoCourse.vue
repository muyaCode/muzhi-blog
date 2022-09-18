<template>
  <div class="videoCourse">
    全部教程： {{ $route.path }}

    <!--  嵌套子路由 -->
    <!-- 和下面<NuxtPage />的作用一样：区别在于该标签用于父级页面中作为子页面的容器 -->
    <nuxt-child />
    <!-- <NuxtPage /> -->
  </div>
</template>

<script setup lang='ts'>
// 定义元信息
definePageMeta({
  foo: 'videoCourse'
})

// 获取当前路由
const route = useRoute()

// 获取元信息
const { meta } = route
console.log(
  toRaw(meta) // 输出 { foo: 'videoCourse' }
)
</script>

<style scoped lang="scss">
  
</style>
