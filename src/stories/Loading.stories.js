import Loading from '@/components/Loading/index'

export default {
    title: 'Components/Loading',
    component: Loading
}

const Template = (args) => ({
    components: { Loading },
    props: {args},
    template: '<Loading v-bind="$props" />'
})

export  const Primary = Template.bind({})

Primary.args = {

}