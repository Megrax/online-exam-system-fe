<template>
  <div class="flex flex-col justify-center items-center">
    <TopNav></TopNav>
    <div>
      <main class="flex flex-col flex-nowrap justify-center items-center h-96">
        <ul
          class="flex flex-row flex-nowrap justify-center items-start w-11/12 min-h-full h-80 mt-48"
        >
          <li
            class="flex flex-col flex-nowrap items-center justify-around w-48 h-42 pt-4 pb-4 pl-3 pr-3 border shadow-md"
          >
            <div>{{ practiceTitle }}</div>
            <div>{{ practiceTime }}</div>
            <div>{{ practiceFullMarks }}</div>
          </li>
          <li
            class="flex flex-col flex-nowrap justify-around items-center w-5/6 min-h-full ml-32 mr-32 border shadow-md"
          >
            <div class="pl-6 pr-5 pt-4">
              <div>
                <span>
                  <span>{{ questions[currIndex].sid }}</span>
                  <i>.</i>
                  {{ Ques[0] }}
                </span>
                <span v-for="(Que, Num) in Ques.slice(1)" :key="Que">
                  <span class="ml-1">({{ Num + 1 }})</span>
                  <input
                    type="text"
                    v-model="userAnswers[currIndex][Num]"
                    class="outline-none border-2 w-20 h-7"
                    :class="{
                      'border-red-400':
                        (!flag[currIndex][Num] && ifJudge) ||
                        (userAnswers[currIndex][Num] === '' && ifJudge),
                      'border-green-500': flag[currIndex][Num] && ifJudge,
                    }"
                  />
                  {{ Que }}
                </span>
              </div>
            </div>
          </li>
          <li
            class="flex flex-col flex-nowrap items-center justify-center w-48 h-36"
          >
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
        <div
          class="flex flex-row flex-nowrap justify-around items-center w-11/12 h-24 mt-8"
        >
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            :class="{ 'btn-disabled': prevDisabled || currIndex === 0 }"
            @click="handlePrevClick()"
          >
            {{ prevQ }}
          </button>
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            :class="{
              'btn-disabled':
                nextDisabled || currIndex === questions.length - 1,
            }"
            @click="handleNextClick()"
          >
            {{ nextQ }}
          </button>
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            :class="{ 'btn-disabled': currIndex !== questions.length - 1 }"
            @click="handleSubmit"
          >
            {{ submit }}
          </button>
        </div>
      </main>
      <ul
        class="flex flex-row flex-nowrap gap-x-2 justify-center items-center w-screen mt-52"
      >
        <li
          @click="handleTabClick(question.sid)"
          v-for="question in questions"
          :key="question.id"
          class="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
          :class="{ 'btn-selected': parseInt(question.sid) === currIndex + 1 }"
        >
          {{ question.sid }}
        </li>
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
      userAnswers: [[]],
      flag: [[]],
      ifJudge: false,
      /* 基础构件 */
      prevQ: '上一题',
      nextQ: '下一题',
      submit: '提交',
      prevDisabled: false,
      nextDisabled: false,
      submitDisabled: true,
      ifSubmit: false,
      practiceTitle: '前端知识自测',
      practiceTime: '60分钟',
      practiceFullMarks: '100分',
      countdown: '剩余时间：',
      /* 题目信息 */
      Ques: [],  //存放分割后的题目
      Tips: {
        tips: '填写答案',
        demand: '(若有多个答案则用单个空格隔开)',
        trueAnswer: '正确答案:',
        show: '我的答案'
      },
      questions: [
        {
          id: '598',
          question: '脚手架与SPA：vue脚手架写法为___，工程化项目时使用的模板为webpack，该模板为SPA应用，全称为___。',
          answer: [
            ['vue-cli'],
            ['single page application']
          ]
        },
        {
          id: '2624',
          question: 'vue指令作用：v-if：___、v-for：___、v-bind：___，v-model：___、v-show：___、v-on：___、v-html：___、v-once：___、v-pre：___',
          answer: [
            ['条件渲染', '条件渲染指令'],
            ['列表渲染', '列表渲染指令'],
            ['动态指令'],
            ['表单绑定', '表单绑定指令'],
            ['条件渲染', '条件渲染指令'],
            ['事件绑定', '事件绑定指令'],
            ['翻译代码', '翻译代码指令'],
            ['单项绑定数据', '单项绑定数据指令'],
            ['跳跃编译', '跳跃编译指令']
          ]
        },
        {
          id: '3833',
          question: '件注册：组件Component是Vue最核心的功能，组件注册分为___和___两种，___可以在全局实例使用，___只能在该实例作用域下有效。',
          answer: [
            ['整体', '全局'],
            ['局部'],
            ['整体', '全局'],
            ['局部']
          ]
        }],
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
      this.createInput()
      this.judgeAnswer()
    },
    handleNextClick() {
      if (this.currIndex < this.questions.length - 1) {
        this.currIndex++
        this.nextDisabled = false
        this.prevDisabled = false
      } else {
        this.nextDisabled = true
      }
      this.createInput()
      this.judgeAnswer()
    },
    handleSubmit() {
      if (this.currIndex === this.questions.length - 1) {
        this.ifSubmit = true
        this.judgeAnswer()
        this.ifJudge = true
        this.currIndex = 0
        this.createInput()

        // let msg = `你提交的答案是：${result}`
        // alert(msg)

        // console.log(this.userAnswers)
        // console.log(this.flag)

      }
    },
    handleTabClick(sid) {
      this.currIndex = sid - 1
      this.createInput()
      this.judgeAnswer()
    },
    createInput() {
      const a = this.questions[this.currIndex].question
      // let Ques= new Array() //定义一数组

      this.Ques = a.split('___') //字符分割
      // for (let i=0;i<this.Ques.length ;i++ )
      // {
      //   console.log(this.Ques[i]) //分割后的字符输出
      // }
    },
    judgeAnswer() {
      let a = new Array()
      for (let i = 0; i < this.Ques.length - 1; i++) {
        a[i] = this.userAnswers[this.currIndex][i]
        this.flag[this.currIndex][i] = false
        if (a[i] !== '' && this.questions[this.currIndex].answer[i].indexOf(a[i]) > -1) {
          this.flag[this.currIndex][i] = true
        }
      }
    },
    initArray() {
      //初始化存放用户答案的二维数组
      for (let i = 0; i < this.questions.length; i++) {
        this.userAnswers[i] = []
        for (let j = 0; j < this.Ques.length; j++)
          this.userAnswers[i][j] = ''
      }
      //初始化存放p判断对错的二维数组
      for (let i = 0; i < this.questions.length; i++) {
        this.flag[i] = []
        for (let j = 0; j < this.Ques.length; j++)
          this.flag[i][j] = ''
      }
    },
  },
  mounted:
    function () {   //自动触发写入的函数
      this.initArray()
      this.createInput()
      this.judgeAnswer()

    },
  components: {
    TopNav,
    Countdown,
  }
}
</script>


<style scoped>
</style>