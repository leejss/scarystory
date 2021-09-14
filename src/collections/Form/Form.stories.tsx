import React from 'react';
import Form from './Form';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Collections/Form',
  component: Form,
  subcomponents: {
    Label: Form.Label,
    Input: Form.Input,
    Control: Form.Control,
  },
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = () => {
  return (
    <Form>
      <Form.Control>
        <Form.Label>Label</Form.Label>
        <Form.Input />
      </Form.Control>
    </Form>
  );
};
