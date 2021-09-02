import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Contact } from './Contact';

export default {
  title: 'Pages/Contact',
  component: Contact
} as Meta;

const Template: Story = () => <Contact />

export const contact = Template.bind({});
