import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Portfolio } from './Portfolio';

export default {
  title: 'Pages/Portfolio',
  component: Portfolio
} as Meta;

const Template: Story = () => <Portfolio />

export const portfolio = Template.bind({});
