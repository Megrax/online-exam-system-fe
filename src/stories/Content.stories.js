import Content  from '@/components/Content'

export default {
  title: 'Components/Content',
  component: Content,
}

const Template = (args, { argTypes }) => ({
  components: { Content },
  props: Object.keys(argTypes),
  template: '<Content class="mt-10 ml-36" :info="cardInfo" />',
})

export const Test = Template.bind({})
Test.args = {
  cardInfo: {
  title: 'web前端开发技术课程小测',
  btnTitle: '开始' + '测验',
  btnTarget: '/test/' + 'e01'
  }
}

export const Exam = Template.bind({})
Exam.args = {
  cardInfo: {
    title: 'web前端开发技术期末考试',
    btnTitle: '开始' + '考试',
    btnTarget: '/test/' + 'e02'
  }
}