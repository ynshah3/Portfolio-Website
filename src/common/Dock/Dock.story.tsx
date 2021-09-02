import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dock } from './Dock';

const children = <></>;

export default {
  title: 'Common/Dock',
  component: Dock
} as Meta;

const Template: Story = () => (
  <Dock>{children}</Dock>
);

export const dock = Template.bind({});
