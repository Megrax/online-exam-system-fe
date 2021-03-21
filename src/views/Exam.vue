<template>
  <div>
    <ContentDisplay :info='sectionInfo'></ContentDisplay>
    <div class="flex flex-row flex-nowrap">
      <Content class="mt-10 ml-36" :info='cardInfo1'></Content>
      <Content class="mt-10 ml-36" :info='cardInfo2'></Content>
    </div>
  </div>
</template>

<script>
import ContentDisplay from '@/components/ContentDisplay.vue'
import Content from '@/components/Content.vue'
import { generateGreeting } from '@/scripts/functions.js'

export default {
  data() {
    return {
      sectionInfo: {
        userName: '张三',
        greeting: '张三，' + generateGreeting(),
        saying: 'Stay hungry, stay foolish.',
        keyWord: '考试',
        searchWord: '搜索我的' + '考试',
        bgColor: 'bg-startExam'
      },
      cardInfo1: {
        title: 'web前端开发技术课程小测',
        btnTitle: '开始' + '考试'
      },
      cardInfo2: {
        title: 'web前端开发技术期末考试',
        btnTitle: '开始' + '考试'
      }
    }
  },
  components: {
    ContentDisplay,
    Content
  }
}
</script>
