<template>
  <div class="flex flex-col justify-center items-center">
    <TopNav></TopNav>
    <div>
      <main class="flex flex-col flex-nowrap justify-center items-center h-96">
        <ul class="flex flex-row flex-nowrap justify-center items-start w-11/12 min-h-full h-80 mt-48">
          <li class="flex flex-col flex-nowrap items-center justify-around w-48 h-42 pt-4 pb-4 pl-3 pr-3 border shadow-md">
            <div>{{ practiceTitle }}</div>
            <div>{{ practiceTime }}</div>
            <div>{{ practiceFullMarks }}</div>
          </li>
          <li class="flex flex-col flex-nowrap justify-around items-center w-5/6 min-h-full ml-32 mr-32 border shadow-md">
            <div class="pl-6 pr-5 pt-4">
              <span>{{ questions[currIndex].sid }}</span>
              <i>.</i>
              <span>{{ questions[currIndex].question }}</span>
            </div>
            <div v-if="!ifSubmit">
              <ul class="flex flex-col flex-nowrap">
                <li class="flex flex-row flex-nowrap">
                  <lable class="mb-5">{{Tips.tips}}<span class="text-greyText text-sm">{{Tips.demand}}</span></lable>
                </li>
                <li class="flex flex-row flex-nowrap">
                  <textarea
                      class="outline-none border-2 h-48 w-120 resize-none shadow-md rounded-lg"
                      v-model="userAnswers[currIndex]"
                  ></textarea>
                </li>
              </ul>
            </div>
            <div v-if="ifSubmit">
              <ul class="flex flex-col flex-nowrap">
                <li class="flex flex-row flex-nowrap">
                  <lable class="mb-5 text-green-500">{{Tips.trueAnswer}}<span class="ml-3">{{questions[currIndex].answer}}</span></lable>
                </li>
                <li class="flex flex-row flex-nowrap">
                  <lable class="mb-5">{{Tips.show}}</lable>
                </li>
                <li class="flex flex-row flex-nowrap items-center">
                  <div class="h-48 w-120">
                    <p>{{userAnswers[currIndex]}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-col flex-nowrap items-center justify-center w-48 h-36">
            <p>{{ countdown }}</p>
            <Countdown
                :time="3600"
                :step="1"
                format="hh:mm:ss"
                class="text-2xl mt-4"
            >
              <template slot-scope="{ time }">{{ time }}</template>
            </Countdown>
          </li>
        </ul>
        <div class="flex flex-row flex-nowrap justify-around items-center w-11/12 h-24 mt-8">
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              :class="{'btn-disabled': (prevDisabled || currIndex === 0)}"
              @click="handlePrevClick"
          >{{ prevQ }}</button>
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              :class="{'btn-disabled': (nextDisabled || currIndex === questions.length - 1 )}"
              @click="handleNextClick"
          >{{ nextQ }}</button>
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              :class="{'btn-disabled': currIndex !== questions.length - 1 }"
              @click="handleSubmit"
          >{{ submit }}</button>
        </div>
      </main>
      <ul class="flex flex-row flex-nowrap gap-x-2 justify-center items-center w-screen mt-52">
        <li
            @click="handleTabClick(question.sid)"
            v-for="question in questions"
            :key="question.id"
            class="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
            :class="{ 'btn-selected': (parseInt(question.sid) === currIndex + 1) }"
        >{{ question.sid }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Countdown from '@choujiaojiao/vue2-countdown'
import TopNav from '@/components/TopNav.vue'

export default {
  data() {
    return {
      /* 逻辑控制 */
      currIndex: 0,
      userAnswers: [],
      /* 基础构件 */
      prevQ: '上一题',
      nextQ: '下一题',
      submit: '提交',
      prevDisabled: false,
      nextDisabled: false,
      submitDisabled: true,
      ifSubmit:false,
      practiceTitle: '前端知识自测',
      practiceTime: '60分钟',
      practiceFullMarks: '100分',
      countdown: '剩余时间：',
      /* 题目信息 */
      Tips: {
        tips:'填写答案',
        demand:'(若有多个答案则用单个空格隔开)',
        trueAnswer:'正确答案:',
        show:'我的答案'
      },
      questions: [
        {
          sid:'1',
          question:'脚手架与SPA：vue脚手架写法为______，工程化项目时使用的模板为webpack，该模板为SPA应用，全称为______。',
          answer:'vue-cli single page application'
        },
        {
          sid:'2',
          question:'vue指令作用：v-if：____、v-for：____、v-bind：____，v-model：____、v-show：____、v-on：____、v-html：____、v-once：____、v-pre：____',
          answer:'条件渲染指令 列表渲染 动态指令 表单绑定 条件渲染指令 事件绑定 翻译代码 单项绑定数据 跳跃编译指令'
        },
        {
          sid:'3',
          question:'件注册：组件Component是Vue最核心的功能，组件注册分为_____和_____两种，____可以在全局实例使用，___只能在该实例作用域下有效。',
          answer:'全局 局部 全局 局部'
        }],
      answers: []
    }
  },
  methods: {
    handlePrevClick() {
      if (this.currIndex - 1 >= 0) {
        this.currIndex--
        this.prevDisabled = false
        this.nextDisabled = false
      } else {
        this.prevDisabled = true
      }
    },
    handleNextClick() {
      if (this.currIndex < this.questions.length - 1) {
        this.currIndex++
        this.nextDisabled = false
        this.prevDisabled = false
      } else {
        this.nextDisabled = true
      }
    },
    handleSubmit() {
      if (this.currIndex === this.questions.length - 1) {
        let result = []
        for (const answer of this.userAnswers) {
          result.push(answer)
        }
        this.ifSubmit=true
        this.currIndex = 0
        let msg = `你提交的答案是：${result}`
        alert(msg)

      }
    },
    handleTabClick(sid) {
      this.currIndex = sid - 1
    }
  },
  components: {
    TopNav,
    Countdown,
  }
}
</script>
