<template>
  <div>
    <TopNav></TopNav>
    <Showprofile
      v-if="!ifEdit"
      :data="ifEdit"
      @to-edit="handleToEdit"
    >显示信息</Showprofile>
    <EditProfile
      v-if="ifEdit"
      :data="ifEdit"
      @finish-edit="handleFinishEdit"
    >修改信息</EditProfile>
  </div>
</template>

<script>
import Showprofile from '@/components/Showprofile.vue'
import EditProfile from '@/components/EditProfile.vue'
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'PersonalCenter',
  data() {
    return {
      ifEdit: false,
    }
  }, methods: {
    handleToEdit(params) {
      this.ifEdit = params
    },
    handleFinishEdit(params) {
      this.ifEdit = params
    }
  },
  components: {
    TopNav,
    Showprofile,
    EditProfile
  }
}
</script>

<style scoped>
</style>
