import React from 'react';
import Input, { InputProps } from './Input';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Element/Input',
  component: Input,
  args: {
    disabled: false,
    error: false,
    loading: false,
    large: false,
  },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  loading: false,
  placeholder: "I'm ready",
};
