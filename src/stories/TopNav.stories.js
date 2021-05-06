import TopNav from '../components/TopNav'

export default {
    title: 'TopNav',
    component: TopNav
}

const Template = (args) => ({
    components: { TopNav },
    props: {args},
    template: '<TopNav v-bind="$props" />'
})

export  const Primary = Template.bind({})

Primary.args = {

}