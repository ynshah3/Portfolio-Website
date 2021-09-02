import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Transition } from './Transition';

export default {
  title: 'Transition',
  component: Transition
} as Meta;

const Template: Story = () => <Transition />

export const transition = Template.bind({});
