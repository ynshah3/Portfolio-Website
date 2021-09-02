import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dock } from './Dock';

export default {
  title: 'Common/Dock',
  component: Dock
} as Meta;

const Template: Story = () => (
  <Dock><></></Dock>
);

export const dock = Template.bind({});
