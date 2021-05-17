<template>
  <div class="flex flex-col justify-center items-center">
    <TopNav></TopNav>
    <transition name="fade">
      <Loading
          class="mt-40"
          v-if="!fetchSuccess"
      ></Loading>
    </transition>
    <div v-if="fetchSuccess">
      <main class="flex flex-col flex-nowrap justify-center items-center h-96">
        <ul class="flex flex-row flex-nowrap justify-center items-start w-11/12 min-h-full h-80 mt-48">
          <li class="flex flex-col flex-nowrap items-center justify-around w-48 h-42 pt-4 pb-4 pl-3 pr-3 border shadow-md">
            <div>{{ practiceTitle }}</div>
          </li>
          <li class="flex flex-col flex-nowrap justify-around items-center w-5/6 min-h-full ml-32 mr-32 border shadow-md">
            <div class="pl-6 pr-5 pt-4 ">
              <div>
                <span>
                  <span>{{questionCount + 1 }}</span>
                  <i>.</i>
                  {{Ques[0]}}
                </span>
                <span v-for="(Que,Num) in Ques.slice(1)" :key="Que">
                  <span class="ml-1">({{Num+1}})</span>
                  <input
                      type="text"
                      v-model="userAnswers[questionCount][Num]"
                      class="outline-none border-2 w-20 h-7"
                      :class="{
                        'border-red-400': !flag[questionCount][Num] && ifJudge[questionCount] || userAnswers[questionCount][Num]==='' && ifJudge[questionCount],
                        'border-green-500': flag[questionCount][Num] && ifJudge[questionCount]
                      }"
                  >
                  {{Que}}
                </span>
              </div>
              <div v-if="ifJudge[questionCount]" class="pt-10 flex-nowrap justify-around ">
                <span>{{Tips.tips}}</span>
                <div class="w-96 h-44 overflow-x-auto overflow-y-auto  ml-32 mt-2">
                  <div v-for="(answer,num) in questions[questionCount].answer" :key="answer" class="ml-6 mt-0.5">
                    <span class="mr-1">({{num+1}})</span>
                    <label v-for="equal_answer in answer" :key="equal_answer" >
                      <span>{{equal_answer}};</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex flex-row flex-nowrap justify-around items-center w-11/12 h-24 mt-8">
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              :class="{'btn-disabled': (prevDisabled || questionCount === 0)}"
              @click="handlePrevClick();"
          >{{ prevQ }}</button>
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              :class="{'btn-disabled': (nextDisabled)}"
              @click="handleNextClick();"
          >{{ nextQ }}</button>
          <button
              class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
              @click="handleSubmit"
          >{{ submit }}</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      /* 逻辑控制 */
      fetchSuccess: false,
      questionCount: 0,
      userAnswers: [[]],
      flag:[[]],
      ifJudge:[],
      /* 基础构件 */
      prevQ: '上一题',
      nextQ: '下一题',
      submit: '查看答案',
      prevDisabled: false,
      nextDisabled: false,
      practiceTitle: '前端知识自测',
      /* 题目信息 */
      Ques:[],  //存放分割后的题目
      Tips: {
        tips:'正确答案:',
      },
      questions: [],
      // questions: [
      //   {
      //     sid:1,
      //     question:'脚手架与SPA：vue脚手架写法为___，工程化项目时使用的模板为webpack，该模板为SPA应用，全称为___。',
      //     answer:[
      //         ['vue-cli'],
      //         ['single page application']
      //     ]
      //   },
      //   {
      //     sid:2,
      //     question:'vue指令作用：v-if：___、v-for：___、v-bind：___，v-model：___、v-show：___、v-on：___、v-html：___、v-once：___、v-pre：___',
      //     answer:[
      //         ['条件渲染','条件渲染指令'],
      //         ['列表渲染','列表渲染指令'],
      //         ['动态指令'],
      //         ['表单绑定','表单绑定指令'],
      //         ['条件渲染','条件渲染指令'],
      //         ['事件绑定','事件绑定指令'],
      //         ['翻译代码','翻译代码指令'],
      //         ['单项绑定数据','单项绑定数据指令'],
      //         ['跳跃编译','跳跃编译指令']
      //     ]
      //   },
      //   {
      //     sid:3,
      //     question:'件注册：组件Component是Vue最核心的功能，组件注册分为___和___两种，___可以在全局实例使用，___只能在该实例作用域下有效。',
      //     answer:[
      //         ['整体', '全局'],
      //         ['局部'],
      //         ['整体', '全局'],
      //         ['局部']
      //     ]
      //   }],
    }
  },
  mounted:
      function () {   //自动触发写入的函数
        const url = 'http://feeling.cheerful.today:3000/blank-filling'
        fetch(url)
            .then(res => {
              if (res.ok) {
                this.fetchSuccess = true
                return res.json()
              } else {
                this.fetchSuccess = false
              }
            })
            .then(data => {
              this.questions = data
              this.initArray()
              this.createInput()
              this.judgeAnswer()
            })
      },
  methods: {
    getQuestion() {
      this.questionCount++
      if (this.questions.length - 5 < this.questionCount) {
        const url = 'http://feeling.cheerful.today:3000/blank-filling'
        fetch(url)
            .then(res => {
              if (res.ok) {
                this.fetchSuccess = true
                return res.json()
              } else {
                this.fetchSuccess = false
              }
            })
            .then(data => {
              this.questions = [...this.questions, ...data]
              this.initArray()
              this.createInput()
              this.judgeAnswer()
            })
      }
    },
    handlePrevClick() {
      if (this.questionCount - 1 >= 0) {
        this.questionCount--
        this.prevDisabled = false
        this.nextDisabled = false
      } else {
        this.prevDisabled = true
      }
      this.createInput()
    },
    handleNextClick() {
        this.getQuestion()
        this.nextDisabled = false
        this.prevDisabled = false
        this.createInput()

    },
    handleSubmit() {
      this.createInput()
      this.judgeAnswer()
      this.ifJudge[this.questionCount] = true

      // let msg = `你提交的答案是：${result}`
      // alert(msg)

      // console.log(this.userAnswers)
      // console.log(this.flag)
    },
    createInput(){
      const a=this.questions[this.questionCount].question
      // let Ques= new Array() //定义一数组

      this.Ques=a.split('___') //字符分割
      // for (let i=0;i<this.Ques.length ;i++ )
      // {
      //   console.log(this.Ques[i]) //分割后的字符输出
      // }
    },
    judgeAnswer(){
      let a= new Array()
      for(let i=0;i<this.Ques.length-1;i++) {
        a[i] = this.userAnswers[this.questionCount][i]
        this.flag[this.questionCount][i] = false
        if(a[i] !== '' && this.questions[this.questionCount].answer[i].indexOf(a[i])>-1){
          this.flag[this.questionCount][i] = true
        }
      }
    },
    initArray(){
      //初始化存放用户答案的二维数组
      for (let i=0;i<this.questions.length;i++)
      {
        this.userAnswers[i]=[]
        for(let j=0;j<this.Ques.length;j++)
          this.userAnswers[i][j]=''
      }
      //初始化存放p判断对错的二维数组
      for (let i=0;i<this.questions.length;i++)
      {
        this.flag[i]=[]
        for(let j=0;j<this.Ques.length;j++)
          this.flag[i][j]=''
      }

      for (let i=0;i<this.questions.length;i++)
      {
        this.ifJudge[i] = false
      }

    },
  },
  components: {
    TopNav,
    Loading
  }
}
</script>


<style scoped>
</style>
