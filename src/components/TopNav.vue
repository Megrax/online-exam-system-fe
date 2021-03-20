<template>
  <nav class="w-screen h-14 bg-black flex flex-row flex-nowrap items-center">
    <h1 class="ml-14 text-white text-xl">{{ title }}</h1>
    <div class="flex-grow"></div>
    <MsgNotification />
    <NameProfile />
    <Avatar :username=userName :size=30 :customStyle=avatarStyle></Avatar>
  </nav>
</template>

<script>
import Avatar from 'vue-avatar'
import MsgNotification from '@/components/MsgNotification.vue'
import NameProfile from '@/components/NameProfile.vue'

export default {
  data() {
    return {
      title: '前端在线考试系统',
      userName: '张三',
      avatarStyle: {
        marginRight: '40px'
      }
    }
  },
  components: {
    MsgNotification,
    NameProfile,
    Avatar
  }
}
</script>

<style>
</style>