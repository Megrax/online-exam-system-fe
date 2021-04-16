<template>
  <div class="mt-16 ml-40 mb-24">
    <p class="text-greyText text-1">{{ this.tips.main }}</p>
    <div class="mt-5">
      <h1 class="text-2xl">{{ this.sectionInfo.basicInfo }}</h1>
      <ul class="flex flex-col flex-nowrap">
        <li class="mt-5 ml-10">
          <label>{{ this.sectionInfo.name }}<span class="text-red-500">*</span></label>
          <input
            type="text"
            v-model="userName"
            placeholder="张三"
            required
            class="border-2 ml-4"
          >
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li>
              <label>{{ this.sectionInfo.sex }}</label>
              <input
                type="radio"
                v-model="male"
                id="man"
                name="sex"
                checked
                class="ml-3"
              >{{ this.sectionInfo.male }}
              <input
                type="radio"
                v-model="female"
                id="woman"
                name="sex"
                class="ml-3"
              >{{ this.sectionInfo.female }}
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-row flex-nowrap">
            <li class="flex flex-col flex-nowrap">
              <label>{{ this.sectionInfo.selfIntroduction }}</label>
            </li>
            <li class="flex flex-col flex-nowrap">
              <textarea
                cols="40"
                rows="3"
                :placeholder="tips.selfIntroduction"
                class="border-2 ml-4"
                v-model="selfIntroduction"
              ></textarea>
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
              <label>
                {{ this.sectionInfo.email }}<span class="text-red-500">*</span> ： {{ this.newEmail ? this.newEmail : this.userEmail }}
                <button
                  class="ml-4 text-submit text-sm outline-white"
                  @click="changeEmail"
                >{{ this.sectionInfo.changeEmail }}</button>
              </label>
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-greyText text-sm">{{ this.tips.email }}</span>
            </li>
          </ul>
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>{{ this.sectionInfo.phoneNumber }} {{this.phoneNumber}}</label>
              <button
                class="ml-3 bg-submit text-white h-6 w-12"
                @click="addPhoneNumber()"
              >{{ this.sectionInfo.add }}</button>
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-greyText text-sm">{{ this.tips.phoneNumber }}</span>
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>{{ this.sectionInfo.qqNumber }}</label>
              <input
                type="text"
                class="border-2 ml-4"
                v-model="qqNumber"
              >
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-greyText text-sm">{{ this.tips.qqNumber }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <aside
      @click="handleSubmit"
      class="fixed right-24 bottom-24 flex justify-center items-center w-12 h-12 rounded-full shadow-lg bg-startPractice cursor-pointer"
    >
      <span class="icon-checkmark text-white text-xl"></span>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Writeprofile',
  props: {
    ifEdit: Boolean
  },
  data() {
    return {
      userName: '',
      avatarUrl: 'https://images2.alphacoders.com/114/thumb-1920-1140284.png',
      qqNumber: '',
      selfIntroduction: '',
      userEmail: '12345678@qq.com',
      newEmail: '',
      phoneNumber: '',
      //
      sectionInfo: {
        basicInfo: '基本信息',
        name: '姓名',
        sex: '性别',
        male: '男',
        female: '女',
        selfIntroduction: '个人介绍',
        contactInfo: '联系信息',
        email: '常用邮箱',
        changeEmail: '修改邮箱',
        phoneNumber: '手机号码',
        add: '添加',
        qqNumber: 'QQ号码',
        save: '保存'
      },
      tips: {
        main: '使用本系统需要填写准确无误的个人信息，用于成绩登记与导出，我们不会泄露你的个人信息',
        avatar: '支持jpg、gif或bmp格式的图片，建议文件小于5M',
        selfIntroduction: '用一段话介绍你自己，会在你的个人页面显示，最多输入80字',
        email: '用于接受来自平台和课程的邮件通知，非常重要',
        phoneNumber: '用于优质课程的学习提醒等服务，手机号不会对外公开，请放心',
        qqNumber: '用于课程的高效交流，方便机构及老师答疑'
      }
    }
  },
  methods: {
    changeEmail() {
      let newEmail = prompt('请输入新的邮箱：', '')
      const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      let valid = false
      while (newEmail !== null && !valid) {
        if (!pattern.test(newEmail)) {
          newEmail = prompt('邮箱格式有误！\n请重新输入：', '')
        } else {
          this.newEmail = newEmail
          valid = true
        }
      }
    },
    addPhoneNumber() {
      let phoneNumber = prompt('请输入手机号：', '')
      let valid = false
      while (phoneNumber !== null && !valid) {
        if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
          phoneNumber = prompt('手机号格式有误！\n请重新输入：', '')
        } else {
          this.phoneNumber = phoneNumber
          valid = true
        }
      }
    },
    handleSubmit() {
      this.ifEdit = false
      this.$emit('finish-edit', this.ifEdit)
    }
  }
}
</script>

<style scoped>
</style>
