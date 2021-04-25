import MsgNotification  from '../components/MsgNotification.vue'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MsgNotification',
  component: MsgNotification,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { MsgNotification },
  props: { args },
  template: '<MsgNotification v-bind="$props"/>',
})

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
}