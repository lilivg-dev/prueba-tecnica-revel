import type { Meta, Story } from '@storybook/react';

import { Avatar } from '.';
import { Props } from './types';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80';

export default {
  component: Avatar,
  title: 'General/Avatar',
} as Meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithImage = Template.bind({});
WithImage.args = {
  url: IMAGE_URL,
};
