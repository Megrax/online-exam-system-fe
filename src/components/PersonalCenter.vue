<template>
  <div class="mt-20 ml-40">
    <p class="text-gray-300 text-1">使用本系统需要填写准确无误的个人信息，用于成绩登记与导出，我们不会泄露你的个人信息</p>
    <div class="mt-5">
      <h1 class="text-2xl">基本信息</h1>
      <ul class="flex flex-col flex-nowrap">
        <li class="mt-5 ml-10">
          <label>姓名<span class="text-red-500">*</span></label>
          <input type="text" v-model="userName" placeholder="张三" required class="border-2 ml-4">
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-row flex-nowrap">
            <li class="flex flex-col flex-nowrap">
              <label>头像</label>
            </li>
            <li class="flex flex-col flex-nowrap ml-4">
              <img :src="avatarUrl" class="w-20 h-20">
            </li>
            <li class="flex flex-col flex-nowrap ml-4">
              <span class="text-gray-300 text-sm">支持jpg、gif或bmp格式的图片，建议文件小于5M</span>
            </li>
          </ul>
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li>
              <lable>性别</lable>
              <input type="radio" :value="男" id="man" name="sex" checked="checked" class="ml-3">男
              <input type="radio" :value="女" id="woman" name="sex" class="ml-3">女
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-row flex-nowrap">
            <li class="flex flex-col flex-nowrap">
              <label>个人介绍</label>
            </li>
            <li class="flex flex-col flex-nowrap">
              <textarea cols="40" rows="3" placeholder="用一段话介绍你自己，会在你的个人页面显示，最多输入80字" class="border-2 ml-4" v-model="personalIntroduction"></textarea>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <h1 class="text-2xl">联系信息</h1>
      <ul class="flex flex-col flex-nowrap">
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>
                常用邮箱<span class="text-red-500">*</span> ： {{userEmail}}
                <button class="ml-4 text-submit text-sm outline-white" @click="changeEmail">修改邮箱</button>
              </label>
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-gray-300 text-sm">用于接受来自平台和课程的邮件通知，非常重要</span>
            </li>
          </ul>
        </li>
        <li class=" mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>手机号 {{phoneNumber}}</label>
              <button class="ml-3 bg-submit text-white h-6 w-12" @click="addPhoneNumber()">添加</button>
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-gray-300 text-sm">用于优质课程的学习提醒等服务，手机号不会对外公开，请放心</span>
            </li>
          </ul>
        </li>
        <li class="mt-5 ml-10">
          <ul class="flex flex-col flex-nowrap">
            <li class="flex flex-row flex-nowrap">
              <label>QQ号码</label>
              <input type="text" class="border-2 ml-4" v-model="qqNumber">
            </li>
            <li class="flex flex-row flex-nowrap mt-2 ml-5">
              <span class="text-gray-300 text-sm">用于课程的高效交流，方便机构及老师答疑</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <button class="mt-10 ml-10 bg-submit text-white h-10 w-20">保存</button>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data() {
    return {
      userName:'',
      avatarUrl:'https://images2.alphacoders.com/114/thumb-1920-1140284.png',
      qqNumber:'',
      personalIntroduction:'',
      userEmail:'12345678@qq.com',
      phoneNumber:'',
      }
  },
  methods:{
    changeEmail() {
      const newEmail = prompt('请输入新的邮箱:', '')
      this.userEmail = newEmail
    },
    addPhoneNumber(){
      this.phoneNumber= prompt('请输入手机号:','')
    }
  }
}
</script>

<style scoped>

</style>
