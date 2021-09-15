import React from 'react';
import Button, { ButtonProps } from './Button';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Element/Button',
  component: Button,
  args: {
    round: false,
    size: 'medium',
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  varitant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  varitant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  varitant: 'danger',
};
