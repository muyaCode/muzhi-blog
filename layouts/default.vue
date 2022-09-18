<template>
  <div>
    <ul class="nav">
      <nuxt-link class="link" to="/" tag="li">首页</nuxt-link>
      <nuxt-link class="link" to="/about" tag="li">关于</nuxt-link>
      <nuxt-link class="link" to="/videoCourse" tag="li">教程自学</nuxt-link>
      <nuxt-link class="link" to="/videoCourse/programme" tag="li" active-class="active">编程教程</nuxt-link>
      <nuxt-link class="link" to="/videoCourse/InternetSecurity" tag="li" active-class="active">网络安全教程</nuxt-link>
    </ul>
    <!-- 布局的内容将加载到<slot />中: 页面出口 -->
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .nav {
    margin: 0 auto;
    .link {
      margin-left: 20px;
    }
  }
</style>