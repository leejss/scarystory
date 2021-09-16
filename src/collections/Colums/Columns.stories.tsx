import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Columns, Column } from './Columns';

export default {
  title: 'Collections/Columns',
  component: Columns,
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args}>
    <Column>col1</Column>
    <Column>col1</Column>
    <Column>col1</Column>
    <Column>col1</Column>
  </Columns>
);
export const Default = Template.bind({});
Default.args = {
  columns: 6,
};
