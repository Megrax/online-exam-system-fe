import Loading from '@/components/Loading'

export default {
    title: 'Loading',
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