<template>
  <div>
    <TopNav></TopNav>
    <ContentDisplay :info="sectionInfo"></ContentDisplay>
    <Content class="mt-10 ml-36" :info="cardInfo"></Content>
  </div>
</template>

<script>
import ContentDisplay from '@/components/ContentDisplay.vue'
import Content from '@/components/Content.vue'
import TopNav from '@/components/TopNav.vue'
import { generateGreeting } from '@/scripts/functions.js'

export default {
  data() {
    return {
      sectionInfo: {
        userName: '张三',
        greeting: '张三，' + generateGreeting(),
        saying: 'Stay hungry, stay foolish.',
        keyWord: '练习',
        searchWord: '搜索我的' + '练习',
        bgColor: 'bg-startPractice'
      },
      cardInfo: {
        title: '前端知识自测',
        btnTitle: '开始' + '测验',
        btnTarget: '/test/' + 'p01'
      }
    }
  },
  components: {
    TopNav,
    ContentDisplay,
    Content
  }
}
</script>