import type { Meta, Story } from '@storybook/react';

import { Rating } from '.';
import { Props } from './types';

export default {
  component: Rating,
  title: 'General/Rating',
  args: {
    rating: 4.25,
  },
} as Meta;

const Template: Story<Props> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};
