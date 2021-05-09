<template>
  <div class="flex flex-col justify-center items-center">
    <TopNav></TopNav>
    <transition name="fade">
      <Loading class="mt-40" v-if="!fetchSuccess"></Loading>
    </transition>
    <div v-if="fetchSuccess">
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
              <span>{{ questions[currIndex].sid }}</span>
              <i>.</i>
              <span>{{ questions[currIndex].question }}</span>
            </div>
            <ul class="flex flex-col justify-around pt-5 pb-5">
              <li
                v-for="option in questions[currIndex].options"
                :key="option.id"
                class="flex flex-row items-center justify-start w-96 mt-2 pl-4"
                :class="{
                  'right-answer': option.id === answers[currIndex],
                  'wrong-answer':
                    option.id === checkedAnswers[currIndex].answer &&
                    option.id !== answers[currIndex],
                }"
              >
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    :value="option.id"
                    v-model="userAnswers[currIndex].answer"
                    id="radio"
                  />
                  <span class="ml-5">
                    <span>{{ option.id }}</span>
                    <i>.</i>
                    <span class="ml-3">{{ option.value }}</span>
                  </span>
                </label>
              </li>
            </ul>
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
            @click="handlePrevClick"
          >
            {{ prevQ }}
          </button>
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            :class="{
              'btn-disabled':
                nextDisabled || currIndex === questions.length - 1,
            }"
            @click="handleNextClick"
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
import Loading from '@/components/Loading'
import TopNav from '@/components/TopNav.vue'

export default {
  data() {
    return {
      /* 逻辑控制 */
      fetchSuccess: false,
      currIndex: 0,
      userAnswers: [],
      checkedAnswers: [],
      /* 基础构件 */
      prevQ: '上一题',
      nextQ: '下一题',
      submit: '提交',
      prevDisabled: false,
      nextDisabled: false,
      submitDisabled: true,
      practiceTitle: '单选题练习',
      practiceTime: '60分钟',
      practiceFullMarks: '100分',
      countdown: '剩余时间：',
      /* 题目信息 */
      questions: [],
      answers: []
    }
  },
  mounted() {
    const url = 'http://101.37.116.37:8000/api/get-10-random-single-choice-questions'
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
        data = this.addSeriesId(data, data.length)
        this.generateUserAnswers()
        this.generateCheckedAnswers()
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
        // let msg = `你提交的答案是：${result}`
        // alert(msg)
        this.showRightAnswers()
        this.checkedAnswers = [...this.userAnswers]
        this.currIndex = 0
      }
    },
    handleTabClick(sid) {
      this.currIndex = sid - 1
    },
    addSeriesId(questions, len) {
      for (let index = 1; index <= len; index++) {
        questions[index - 1]['sid'] = index
      }
      return questions
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
    },
    generateCheckedAnswers() {
      for (let index = 0; index < this.questions.length; index++) {
        this.checkedAnswers.push('')
      }
    },
    showRightAnswers() {
      for (const [index, question] of this.questions.entries()) {
        this.answers[index] = question.answer
      }
    },
  },
  components: {
    TopNav,
    Countdown,
    Loading
  }
}
</script>