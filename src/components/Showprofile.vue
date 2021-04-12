<template>
  <div class="mt-16 ml-40 mb-24">
    <div class="mt-5">
      <h1 class="text-2xl">{{ this.sectionInfo.basicInfo }}</h1>
      <ul class="flex flex-col flex-nowrap">
        <li class="mt-5 ml-10">
          <label>{{ this.sectionInfo.name }}:<span class="ml-3">{{userName}}</span></label>
        <li class="mt-5 ml-10">
          <ul class="flex flex-row flex-nowrap">
            <li class="flex flex-col flex-nowrap">
              <label>{{ this.sectionInfo.avatar }}</label>
            </li>
            <li class="flex flex-col flex-nowrap ml-4">
              <img
                      :src="avatarUrl"
                      class="w-20 h-20"
              >
            </li>
          </ul>
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li>
              <lable>{{ this.sectionInfo.sex }}:<span class="ml-3">{{sex}}</span></lable>
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-row flex-nowrap">
            <li>
              <label>{{ this.sectionInfo.selfIntroduction }}:<span class="ml-3">{{selfIntroduction}}</span></label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <h1 class="text-2xl">{{ this.sectionInfo.contactInfo }}</h1>
      <ul class="flex flex-col flex-nowrap">
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>{{ this.sectionInfo.email }}: <span class="ml-3">{{ this.userEmail }}</span></label>
            </li>
          </ul>
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>{{ this.sectionInfo.phoneNumber }}: <span class="ml-3">{{this.phoneNumber}}</span></label>
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>{{ this.sectionInfo.qqNumber }}: <span class="ml-3">{{qqNumber}}</span></label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <button class="mt-10 ml-10 bg-submit text-white h-10 w-20">{{ this.sectionInfo.change }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Showprofile',
    data() {
      return {
        userName: '张三',
        avatarUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3947572783,1476163811&fm=26&gp=0.jpg',
        sex:'男',
        selfIntroduction: '啊吧啊吧',
        userEmail: '12345678@qq.com',
        phoneNumber: '123123123',
        qqNumber: '12345678',
        //
        sectionInfo: {
          basicInfo: '基本信息',
          name: '姓名',
          avatar: '头像',
          sex: '性别',
          selfIntroduction: '个人介绍',
          contactInfo: '联系信息',
          email: '常用邮箱',
          phoneNumber: '手机号码',
          qqNumber: 'QQ号码',
          change:'编辑信息'
        }
      }
    },
  }
</script>

<style scoped>
</style>
