<template>
  <div class="home absolute">
    <TopNav></TopNav>
    <main>
      <Entry class="mt-20 ml-28" :info="startLearning"></Entry>
      <Entry class="mt-20 ml-28" :info="checkOutInfo"></Entry>
    </main>
    <a href="http://101.37.116.37:8000/">
      <aside
        class="fixed right-24 bottom-24 flex justify-center items-center w-12 h-12 rounded-full shadow-lg bg-startPractice"
      >
        <span class="icon-upload text-white text-xl"></span>
      </aside>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Entry from '@/components/Entry.vue'
import TopNav from '@/components/TopNav.vue'

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

    TopNav,
    Entry
  }
}
</script>
