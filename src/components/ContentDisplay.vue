<template>
  <div>
    <section
      class="flex flex-row items-center w-screen h-44"
      :class="info.bgColor"
    >
      <Avatar
        :username=info.userName
        :size=80
        class="ml-24"
      ></Avatar>
      <div class="ml-5">
        <h1 class="text-white text-xl mb-1">{{ info.greeting }}</h1>
        <p class="text-white text-xs"> {{ info.saying }}</p>
      </div>
    </section>
    <nav class="flex flex-row justify-around items-center w-screen h-12 ">
      <div class="flex items-center justify-center whitespace-nowrap w-12 h-12 ml-40 text-center text-startPractice border-b-2 border-startPractice">{{ info.keyWord }}</div>
      <div class="flex-grow"></div>
      <div
        class="flex items-center w-60 h-8 mr-20 border border-startPractice"
        v-if="info.searchWord"
      >
        <input
          type="text"
          name=""
          id=""
          class="w-60 focus:outline-none pl-2 text-sm"
          :placeholder='info.searchWord'
        >
        <span class="flex-grow"></span>
        <span class="icon-search text-startPractice text-lg ml-1 mr-3"></span>
      </div>
    </nav>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  props: {
    info: Object
  },
  components: {
    Avatar
  }
}
</script>