import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home
} as Meta;

const Template: Story = () => <Home />

export const home = Template.bind({});
