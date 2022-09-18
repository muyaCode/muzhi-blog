<template>
  <div>
    首页：{{ $route.path }}

    <button @click="jump(111)">111</button>
    <button @click="jump(111)">222</button>
    <button @click="jump(111)">333</button>
    <button @click="jump(111)">444</button>
  </div>
</template>

<script setup lang='ts'>
  const router = useRouter()
  const jump = (id) => {
    router.push(`detail/${id}`)
  }
  
</script>

<style scoped lang="scss">
  
</style>