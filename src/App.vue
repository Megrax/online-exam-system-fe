<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view></router-view>
  </div>
</template>

<style>
</style>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    TopNav
  }
}
</script>