import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Login from './Login';

export default {
  title: 'Page/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

export const 로그인: ComponentStory<typeof Login> = () => <Login />;
