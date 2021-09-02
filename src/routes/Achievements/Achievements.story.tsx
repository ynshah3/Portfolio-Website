import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Achievements } from './Achievements';

export default {
  title: 'Pages/Achievements',
  component: Achievements
} as Meta;

const Template: Story = () => <Achievements />

export const achievements = Template.bind({});
