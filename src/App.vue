<template>
  <div id="app" class="sys-app">
    <router-view/>
  </div>
</template>

<script>

import Cookie from 'js-cookie'

export default {
  name: 'App',
  // TODO: 全局状态加载及变更。请根据实际情况改写
  beforeMount(){
      // 首次加载/刷新时判断当前是否在登录状态
      if (Cookie.get('isLogin')) {
          console.log("重新登录")
          this.$store.dispatch('auth/relogin')
      }
  },
}
</script>

<style>
  @import './styles/index.scss'; /* 全局自定义的css样式*/

  #app {
    
  }
</style>
