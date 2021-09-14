import React from 'react';
import Button from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button varitant="primary">Primary Button</Button>
);
