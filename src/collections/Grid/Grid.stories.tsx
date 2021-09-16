import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Grid, { Card } from './Grid';

export default {
  title: 'Collections/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
);
export const Default = Template.bind({});

