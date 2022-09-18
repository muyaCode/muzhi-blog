<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>关于页面：{{ $route.path }}</template>
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
  definePageMeta({
    layout: false // 手动关闭 default 布局
    // layout: "custom" // 覆盖布局
  })
</script>

<style scoped lang="scss">
  
</style>
