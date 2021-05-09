<template>
  <div>
    <TopNav></TopNav>
    <ContentDisplay :info="sectionInfo"></ContentDisplay>
    <div class="flex flex-row flex-nowrap">
      <Content class="mt-10 ml-36" :info="cardInfo[0]"></Content>
      <Content class="mt-10 ml-36" :info="cardInfo[1]"></Content>
    </div>
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
      cardInfo: [
        {
          title: '单选题专项训练',
          btnTitle: '开始' + '练习',
          btnTarget: '/practice/single-choice'
        },
        {
          title: '填空题专项训练',
          btnTitle: '开始' + '练习',
          btnTarget: '/practice/blank-filling'
        }
      ]
    }
  },
  components: {
    TopNav,
    ContentDisplay,
    Content
  }
}
</script>