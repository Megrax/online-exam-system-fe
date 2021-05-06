<template>
  <main class="w-60 pb-3 shadow-md">
    <img class="h-30 w-60" src="../assets/images/example.jpeg" alt="示例图片" />
    <div class="flex flex-col items-center h-24 pt-4 pl-4 bg-white">
      <p class="self-start">{{ info.title }}</p>
      <router-link :to="info.btnTarget">
        <div
          class="flex justify-center items-center w-28 h-7 mt-6 border border-examRecord rounded-xl text-examRecord text-sm"
        >
          {{ info.btnTitle }}
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>