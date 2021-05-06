import Entry  from '@/components/Entry'

export default {
  title: 'Entry',
  component: Entry,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Entry },
  template:
    '<Entry class="mt-20 ml-28" :info="info"></Entry>',
})

export const StartLearning = Template.bind({})
StartLearning.args = {
  info: {
    title: '开始学习',
    tip: '考试前记得多多练习喔',
    firstEntry: '开始练习',
    secondEntry: '开始考试',
    firstLink: '/practice',
    secondLink: '/exam',
    firstBgColor: 'bg-startPractice',
    secondBgColor: 'bg-startExam'
  },
}

export const CheckInfo = Template.bind({})
CheckInfo.args = {
  info: {
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