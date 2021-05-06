import ShowProfile  from '@/components/Showprofile'
import EditProfile  from '@/components/EditProfile'

export default {
  title: 'Profile',
  component: { ShowProfile , EditProfile},
}

const ShowTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ShowProfile },
  template:
    '<show-profile :data="ifEdit" @to-edit="handleToEdit" />',
})

const EditTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EditProfile },
  template:
    '<edit-profile :data="ifEdit" @to-edit="handleToEdit" />',
})

export const Show = ShowTemplate.bind({})
Show.args = {
  ifEdit: false,
}

export const Edit = EditTemplate.bind({})
Edit.args = {
  ifEdit: true,
}