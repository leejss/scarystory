import React from 'react';
import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Element/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button varitant="primary">Primary Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button varitant="secondary">Secondary Button</Button>
);

export const Danger: ComponentStory<typeof Button> = () => (
  <Button varitant="danger">Danger Button</Button>
);
