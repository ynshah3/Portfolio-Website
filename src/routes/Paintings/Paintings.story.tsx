import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paintings } from './Paintings';

export default {
  title: 'Pages/Paintings',
  component: Paintings
} as Meta;

const Template: Story = () => <Paintings />

export const paintings = Template.bind({});
