<template>
  <nav class="w-screen h-14 bg-black flex flex-row flex-nowrap items-center">
    <h1 class="ml-14 text-white text-xl">
      <router-link to='/'>{{ title }}</router-link>
    </h1>
    <div class="flex-grow"></div>
    <MsgNotification />
    <router-link to='/Profile'>
      <NameProfile />
    </router-link>
    <router-link to='/Profile'>
      <Avatar
        :username=userName
        :size=30
        :customStyle=avatarStyle
      ></Avatar>
    </router-link>
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
