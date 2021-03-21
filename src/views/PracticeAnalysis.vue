<template>
  <div>
    <ContentDisplay :info='sectionInfo'></ContentDisplay>
  </div>
</template>

<script>
import ContentDisplay from '@/components/ContentDisplay.vue'
import { generateGreeting } from '@/scripts/functions.js'

export default {
  data() {
    return {
      sectionInfo: {
        userName: '张三',
        greeting: '张三，' + generateGreeting(),
        saying: 'Stay hungry, stay foolish.',
        keyWord: '我的自测分析',
        bgColor: 'bg-practiceAnalysis'
      }
    }
  },
  components: {
    ContentDisplay
  }
}
</script>