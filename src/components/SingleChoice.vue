<template>
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
            <span>{{ questions[currIndex].id }}</span>
            <i>.</i>
            <span>{{ questions[currIndex].question }}</span>
          </div>
          <ul class="flex flex-col justify-around pt-5 pb-5">
            <li v-for="option in questions[currIndex].options" :key="option.id" class="flex flex-row items-center justify-start w-96 pt-2">
              <label class="cursor-pointer">
                <input type="radio" :value="option.id" v-model="userAnswers[currIndex].answer" id="radio">
                <span class="ml-5">
                  <span>{{ option.id }}</span>
                  <i>.</i>
                  <span class="ml-3">{{ option.value }}</span>
                </span>
              </label>
            </li>
          </ul>
        </li>
        <li class="flex flex-col flex-nowrap items-center justify-center w-48 h-36">
          <p>{{ countdown }}</p>
          <Countdown :time="3600" :step="1" format="hh:mm:ss" class="text-2xl mt-4">
            <template slot-scope="{ time }">{{ time }}</template>
          </Countdown>
        </li>
      </ul>
      <div class="flex flex-row flex-nowrap justify-around items-center w-11/12 h-24 mt-8">
        <button class="flex items-center justify-center w-32 h-10 bg-startPractice text-white" :class="{'btn-disabled': (prevDisabled || currIndex === 0)}" @click="handlePrevClick">{{ prevQ }}</button>
        <button class="flex items-center justify-center w-32 h-10 bg-startPractice text-white" :class="{'btn-disabled': (nextDisabled || currIndex === questions.length - 1 )}" @click="handleNextClick">{{ nextQ }}</button>
        <button class="flex items-center justify-center w-32 h-10 bg-startPractice text-white" :class="{'btn-disabled': currIndex !== questions.length - 1 }" @click="handleSubmit">{{ submit }}</button>
      </div>
    </main>
    <ul class="flex flex-row flex-nowrap gap-x-2 justify-center items-center w-screen mt-52">
      <li @click="handleTabClick(question.id)" v-for="question in questions" :key="question.id" class="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer" :class="{ 'btn-selected': (parseInt(question.id) === currIndex + 1) }">{{ question.id }}</li>
    </ul>
  </div>
</template>

<script>
import Countdown from '@choujiaojiao/vue2-countdown'

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
      practiceTitle: '前端知识自测',
      practiceTime: '60分钟',
      practiceFullMarks: '100分',
      countdown: '剩余时间：',
      /* 题目信息 */
      questions: []
    }
  },
  mounted() {
    const url = 'http://localhost:3000/crowds'
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.questions = json
        this.generateUserAnswers()
      })

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
          result.push(answer.answer)
        }
        let msg = `你提交的答案是：${result}`
        alert(msg)
      }
    },
    handleTabClick(id) {
      this.currIndex = id - 1
    },
    generateUserAnswers() {
      let obj = {
        id: 0,
        answer: ''
      }
      for (const item of this.questions) {
        obj = {
          id: 0,
          answer: ''
        }
        obj.id = item.id
        this.userAnswers.push(obj)
      }
    }
  },
  components: {
    Countdown
  }
}
</script>