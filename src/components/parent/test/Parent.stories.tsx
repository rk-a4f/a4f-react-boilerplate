import React from 'react';
import { action } from '@storybook/addon-actions';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Parent from '../Parent';

export default {
  title: 'components/Parent',
  component: Parent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Parent>;

const Template: ComponentStory<typeof Parent> = (args) => <Parent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '제목',
  onTitleClick: action('onTitleClick'),
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: '설명',
  onDescriptionClick: action('onDescriptionClick'),
};
