import ContentDisplay  from '@/components/ContentDisplay'
import { generateGreeting } from '@/scripts/functions.js'

export default {
  title: 'Components/ContentDisplay',
  component: ContentDisplay,
}

const Template = (args, { argTypes }) => ({
  components: { ContentDisplay },
  props: Object.keys(argTypes),
  template: '<content-display :info="sectionInfo" />',
})

export const Practice = Template.bind({})
Practice.args = {
  sectionInfo: {
    userName: '张三',
    greeting: '张三，' + generateGreeting(),
    saying: 'Stay hungry, stay foolish.',
    keyWord: '练习',
    searchWord: '搜索我的' + '练习',
    bgColor: 'bg-startPractice'
  }
}

export const PracticeAnalysis = Template.bind({})
PracticeAnalysis.args = {
  sectionInfo: {
    userName: '张三',
    greeting: '张三，' + generateGreeting(),
    saying: 'Stay hungry, stay foolish.',
    keyWord: '我的自测分析',
    bgColor: 'bg-practiceAnalysis'
  }
}

export const Exam = Template.bind({})
Exam.args = {
  sectionInfo: {
    userName: '张三',
    greeting: '张三，' + generateGreeting(),
    saying: 'Stay hungry, stay foolish.',
    keyWord: '考试',
    searchWord: '搜索我的' + '考试',
    bgColor: 'bg-startExam'
  }
}

export const ExamRecord = Template.bind({})
ExamRecord.args = {
  sectionInfo: {
    userName: '张三',
    greeting: '张三，' + generateGreeting(),
    saying: 'Stay hungry, stay foolish.',
    keyWord: '考试结果统计',
    bgColor: 'bg-examRecord'
  }
}

