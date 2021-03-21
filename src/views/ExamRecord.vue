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
        keyWord: '考试结果统计',
        bgColor: 'bg-examRecord'
      }
    }
  },
  components: {
    ContentDisplay
  }
}
</script>