<template>
  <div>
    动态路由详情：{{ $route.params.id }}
  </div>
</template>

<script setup lang='ts'>
  const route = useRoute()
  console.log('route',route)
</script>

<style scoped lang="scss">
  
</style>