import { Label } from "../../components/Label"
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/Label',
    component: Label,
    argTypes:{
        size:{control: 'select'},
        color:{control: 'select'},
        customColor: {control: 'color'}
    }
} as ComponentMeta<typeof Label>
const Tenmplate: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Default = Tenmplate.bind({})
Default.args = {
    text: 'Hello World',
    size: 'normal',
}

export const Basic = Tenmplate.bind({})
Basic.args = {
    text: 'Basic',
    size: 'h1',
}