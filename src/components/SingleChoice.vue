<template>
  <main class="flex flex-col flex-nowrap justify-center items-center h-96">
    <ul class="flex flex-row flex-nowrap justify-center items-start w-11/12 min-h-full h-80 mt-24">
      <li class="flex flex-col flex-nowrap items-center justify-around w-48 h-42 pt-4 pb-4 pl-3 pr-3">
        <div>{{ practiceTitle }}</div>
        <div>{{ practiceTime }}</div>
        <div>{{ practiceFullMarks }}</div>
      </li>
      <li class="flex flex-col flex-nowrap justify-around items-center w-5/6 min-h-full ml-32 mr-32">
        <div class="pl-6 pr-5 pt-4">{{ questions[currIndex].question }}</div>
        <ul class="flex flex-col justify-around pt-5 pb-5">
          <li v-for="option in questions[currIndex].options" :key="option.id" class="flex flex-row items-center justify-start w-96 pt-2">
            <input type="radio" :value="option.id" v-model="inputAnswers[currIndex].answer" id="radio">
            <span class="ml-5">{{ option.value }}</span>
          </li>
        </ul>
      </li>
      <li class="flex flex-col flex-nowrap items-center justify-center w-48 h-36">
        <p>{{ countdown }}</p>
        <Countdown time="3600" step="1" format="hh:mm:ss" class="text-2xl mt-4">
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
</template>

<script>
import Countdown from '@choujiaojiao/vue2-countdown'

export default {
  data() {
    return {
      /* 逻辑控制 */
      currIndex: 0,
      inputAnswers: [
        {
          id: 1,
          answer: ''
        },
        {
          id: 2,
          answer: ''
        },
        {
          id: 3,
          answer: ''
        },
        {
          id: 4,
          answer: ''
        },
        {
          id: 5,
          answer: ''
        },
      ],
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
      questions: [
        {
          id: '1',
          name: 'one',
          type: '单选',
          question:
            '在 css 选择器当中，优先级排序正确的是：',
          options: [
            { id: 'A', value: 'id选择器>标签选择器>类选择器' },
            { id: 'B', value: '标签选择器>类选择器>id选择器' },
            { id: 'C', value: '类选择器>标签选择器>id选择器' },
            { id: 'D', value: 'id选择器>类选择器>标签选择器' },
          ],
          answer: 'D'
        },
        {
          id: '2',
          name: 'two',
          type: '单选',
          question:
            '关于HTML语义化，以下哪个说法是正确的？',
          options: [
            { id: 'A', value: '语义化的HTML有利于机器的阅读，如PDA手持设备、搜索引擎爬虫；但不利于人的阅读' },
            { id: 'B', value: 'Table 属于过时的标签，遇到数据列表时，需尽量使用 div 来模拟表格' },
            { id: 'C', value: '语义化是HTML5带来的新概念，此前版本的HTML无法做到语义化' },
            { id: 'D', value: 'header、article、address都属于语义化明确的标签' },
          ],
          answer: 'D',
        },
        {
          id: '3',
          name: 'three',
          type: '单选',
          question:
            '放在HTML里的哪一部分JavaScripts会在页面加载的时候被执行？',
          options: [
            { id: 'A', value: '文件头部位置' },
            { id: 'B', value: '文件尾' },
            { id: 'C', value: '<head>标签部分' },
            { id: 'D', value: '<body>标签部分' },
          ],
          answer: 'D',
        },
        {
          id: '4',
          name: 'four',
          type: '单选',
          question:
            'JavaScript 的基本组成不包括以下哪个选项',
          options: [
            { id: 'A', value: 'DOM' },
            { id: 'B', value: 'BOM' },
            { id: 'C', value: 'ECMAScript' },
            { id: 'D', value: 'jQuery' },
          ],
          answer: 'D',
        },
        {
          id: '5',
          name: 'five',
          type: '单选',
          question:
            '在javascript里，下列选项中不属于数组方法的是：',
          options: [
            { id: 'A', value: 'sort()' },
            { id: 'B', value: 'length()' },
            { id: 'C', value: 'concat()' },
            { id: 'D', value: 'reverse()' },
          ],
          answer: 'B',
        },
      ]
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
      if (this.currIndex + 1 < this.questions.length) {
        this.currIndex++
        this.nextDisabled = false
        this.prevDisabled = false
      } else {
        this.nextDisabled = true
      }
    },
    handleSubmit() {
      let result = []
      for (const answer of this.inputAnswers) {
        result.push(answer.answer)
      }
      let msg = `你提交的答案是：${result}`
      alert(msg)
    }
  },
  components: {
    Countdown
  }
}
</script>