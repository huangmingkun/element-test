<template>
  <div id="app">
    <!--搭建项目时的图片-->
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>
