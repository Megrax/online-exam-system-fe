<template>
  <div>
    <Showprofile v-if="!ifChange">显示信息</Showprofile>
    <Writeprofile v-if="ifChange">修改信息</Writeprofile>
  </div>
</template>

<script>
import Showprofile from '@/components/Showprofile.vue'
import Writeprofile from '@/components/Writeprofile.vue'

export default {
  name: 'PersonalCenter',
  data() {
    return {
      ifChange:false,
    }
  },
  components:{
    Showprofile,
    Writeprofile
    }
  }
</script>

<style scoped>
</style>
