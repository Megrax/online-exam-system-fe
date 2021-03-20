<template>
  <div>
    <section class="flex flex-row items-center w-screen h-44 bg-startPractice">
      <Avatar :username=userName :size=80 class="ml-24"></Avatar>
      <div class="ml-5">
        <h1 class="text-white text-xl mb-1">{{ greeting }}</h1>
        <p class="text-white text-xs"> {{ saying }}</p>
      </div>
    </section>
    <nav class="flex flex-row justify-around items-center w-screen h-12 ">
      <div class="flex items-center justify-center w-16 h-12 ml-40 text-center text-startPractice border-b-2 border-startPractice">{{ keyWord }}</div>
      <div class="flex-grow	"></div>
      <div class="mr-20">{{ searchWord }}</div>
    </nav>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  data() {
    return {
      userName: '张三',
      greeting: '张三，中午好',
      saying: 'Stay hungry, stay foolish.',
      keyWord: '练习',
      searchWord: '搜索我的' + '练习'
    }
  },
  components: {
    Avatar
  }
}
</script>