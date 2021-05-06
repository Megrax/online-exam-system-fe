<template>
  <div>
    <div class="w-screen h-2">
      <h1 class="float-left text-3xl">{{ info.title }}</h1>
      <p class="float-left ml-10 mt-6 text-xs text-gray-400">{{ info.tip }}</p>
    </div>
    <div class="flex items-center mt-20">
      <router-link :to="info.firstLink">
        <div
          class="flex justify-center items-center w-48 h-32 rounded-xl shadow-md text-white text-2xl"
          :class="info.firstBgColor"
        >
          {{ info.firstEntry }}
        </div>
      </router-link>
      <router-link :to="info.secondLink">
        <div
          class="flex justify-center items-center w-48 h-32 ml-16 rounded-xl shadow-md text-white text-2xl"
          :class="info.secondBgColor"
        >
          {{ info.secondEntry }}
        </div>
      </router-link>
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