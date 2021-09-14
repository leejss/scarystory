import React from 'react';
import Input from './Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Element/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => {
  return <Input />;
};
