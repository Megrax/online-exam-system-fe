<template>
  <div class="home">
    <Entry
      class="mt-20 ml-28"
      :info="startLearning"
    ></Entry>
    <Entry
      class="mt-20 ml-28"
      :info="checkOutInfo"
    ></Entry>
  </div>
</template>

<script>
// @ is an alias to /src
import Entry from '@/components/Entry.vue'

export default {
  name: 'Home',
  data() {
    return {
      startLearning: {
        title: '开始学习',
        tip: '考试前记得多多练习喔',
        firstEntry: '开始练习',
        secondEntry: '开始考试',
        firstLink: '/practice',
        secondLink: '/exam',
        firstBgColor: 'bg-startPractice',
        secondBgColor: 'bg-startExam'
      },
      checkOutInfo: {
        title: '查看信息',
        tip: '在这里了解你的学习情况',
        firstEntry: '自测分析',
        secondEntry: '考试记录',
        firstLink: '/practice-analysis',
        secondLink: '/exam-record',
        firstBgColor: 'bg-practiceAnalysis',
        secondBgColor: 'bg-examRecord'
      }
    }
  },
  components: {
    Entry
  }
}
</script>
