import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Login from '../../../pages/Login/Login';
import { Center } from '../Center';
import Split from './Split';

export default {
  title: 'Collections/Split',
  component: Split,
} as ComponentMeta<typeof Split>;

const Template: ComponentStory<typeof Split> = (args) => (
  <Center>
    <Split {...args}>
      <div
        style={{
          display: 'flex',
          justifyContent: ' center',
          alignContent: 'center',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1631285293016-cd0097f1e39e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <Login />
    </Split>
  </Center>
);
export const Default = Template.bind({});
Default.args = {
  gutter: 'medium',
  fraction: '1/2',
};
