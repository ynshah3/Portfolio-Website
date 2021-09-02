import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { About } from './About';

export default {
  title: 'Pages/About',
  component: About
} as Meta;

const Template: Story = () => <About />

export const about = Template.bind({});
