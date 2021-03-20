<template>
  <div>
    <div class="w-screen h-2">
      <h1 class="float-left text-3xl">{{ info.title }}</h1>
      <p class="float-left ml-10 mt-6 text-xs text-gray-400">{{ info.tip }}</p>
    </div>
    <div class="flex mt-20 items-center">
      <div class="flex w-48 h-32 rounded-lg text-white text-2xl justify-center items-center" :class='info.firstBgColor'>{{ info.firstEntry }}</div>
      <div class="flex w-48 h-32 ml-16 rounded-lg text-white text-2xl justify-center items-center" :class='info.secondBgColor'>{{ info.secondEntry }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style scoped>
</style>