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
          </li>
          <li
            class="flex flex-col flex-nowrap justify-around items-center w-5/6 min-h-full ml-32 mr-32 border shadow-md"
          >
            <div class="pl-6 pr-5 pt-4">
              <span>{{ questionCount + 1 }}</span>
              <i>.</i>
              <span>{{ questions[questionCount].question }}</span>
            </div>
            <ul class="flex flex-col justify-around pt-5 pb-5">
              <li
                v-for="option in questions[questionCount].options"
                :key="option.id"
                class="flex flex-row items-center justify-start w-96 mt-2 pl-4"
                :class="{
                  'right-answer':
                    questionJudge[questionCount] &&
                    option.id === answers[questionCount],
                  'wrong-answer':
                    questionJudge[questionCount] &&
                    option.id === userAnswers[questionCount].answer &&
                    option.id !== answers[questionCount],
                }"
              >
                <label class="cursor-pointer">
                  <input
                    type="radio"
                    :value="option.id"
                    v-model="userAnswers[questionCount].answer"
                    id="radio"
                    @change="handleSelect"
                    name="answer"
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
          ></li>
        </ul>
        <div
          class="flex flex-row flex-nowrap justify-around items-center w-11/12 h-24 mt-8"
        >
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            :class="{ 'btn-disabled': questionCount === 0 }"
            @click="handlePrevClick"
          >
            {{ prevQ }}
          </button>
          <button
            class="flex items-center justify-center w-32 h-10 bg-practiceAnalysis text-white"
            @click="handleNextClick"
          >
            {{ nextQ }}
          </button>
        </div>
      </main>
    </div>
    <notifications position="top center" width="150" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import TopNav from '@/components/TopNav.vue'


export default {
  data() {
    return {
      /* 逻辑控制 */
      fetchSuccess: false,
      questionCount: 0,
      userAnswers: [],
      checkedAnswers: [],
      questionJudge: new Array(10), // 存储相应索引的题目是否批改 true: 显示批改结果 false: 不显示
      /* 基础构件 */
      prevQ: '上一题',
      nextQ: '下一题',
      submit: '提交',
      prevDisabled: false,
      nextDisabled: false,
      submitDisabled: true,
      practiceTitle: '单选题专项练习',
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
        this.pushIntoUserAnswers()
        this.generateCheckedAnswers()
        this.questionJudge.fill(false)
        this.storeAnswers()
      })
  },
  methods: {
    getQuestion() {
      this.questionCount++
      if (this.questions.length - 5 < this.questionCount) {
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
            this.questions = [...this.questions, ...data]
            this.questionJudge.push(...new Array(10).fill(false))
            this.storeAnswers()
          })
      }
      this.pushIntoUserAnswers()
    },
    handleSelect() {
      this.questionJudge[this.questionCount] = true
    },
    checkAnswer() {

    },
    handlePrevClick() {
      if (this.questionCount > 0) {
        this.questionCount--
      } else {
        this.$notify({
          text: '已经是第一题了!',
          type: 'warn',
          duration: 1000
        })
      }
    },
    handleNextClick() {
      this.getQuestion()
      this.nextDisabled = false
      this.prevDisabled = false
    },
    pushIntoUserAnswers() {
      let obj = {
        id: this.questions[this.questionCount].id,
        answer: ''
      }
      this.userAnswers.push(obj)
    },
    generateCheckedAnswers() {
      for (let index = 0; index < this.questions.length; index++) {
        this.checkedAnswers.push('')
      }
    },
    storeAnswers() {
      for (const [index, question] of this.questions.entries()) {
        this.answers[index] = question.answer.substr(0, 1) // API 给的 answer 中有时会以 ‘\r’结尾，所以统一取第一个字符
      }
    },
  },
  components: {
    TopNav,
    Loading
  }
}
</script>