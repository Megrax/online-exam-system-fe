<template>
  <span class="mr-3 pr-4 text-white border-r">
    <router-link to="/notification"
      ><span class="text-sm mr-1">{{ title }}</span></router-link
    >
    <span class="icon-bell text-xs"></span>
    <div
      class="inline-block w-3 h-3 ml-1 pb-4 rounded-lg bg-red-500 text-xs"
      :class="{ 'pr-4': msgNum >= 10, 'pl-1': msgNum < 10 }"
    >
      {{ msgNum }}
    </div>
  </span>
</template>

<script>
import '@/assets/css/iconfonts.css'

export default {
  data() {
    return {
      title: '通知',
      msgNum: 11,
    }
  }
}
</script>

<style>
</style>
