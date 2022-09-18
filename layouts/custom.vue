<template>
  <div>
    <ul class="nav">
      <nuxt-link class="link" to="/" tag="li">首页</nuxt-link>
    </ul>
    <header>
      <slot name="header">
        默认 header 内容
      </slot>
    </header>
    <main>
      <!-- 页面出口 -->
      <slot />
    </main>
  </div>
</template>