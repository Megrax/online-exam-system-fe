import MsgNotification  from '../components/MsgNotification.vue'
import '@/assets/css/utils.css'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/MsgNotification',
  component: MsgNotification,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { MsgNotification },
  props: { args },
  template: '<MsgNotification v-bind="$props"/>',
})

export const Primary = Template.bind({})

Primary.args = {
  /* 👇 The args you need here will depend on your component */
}