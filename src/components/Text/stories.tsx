import type { Meta, Story } from '@storybook/react';

import { Text } from '.';
import { Props } from './types';

export default {
  title: 'General/Text',
  args: { as: 'h1', variant: 'largeTitle' },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'a', 'span'],
      control: { type: 'select' },
    },
    weight: {
      options: ['regular', 'bold'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'white'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'bodyBig',
        'body1',
        'body2',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Text {...args}>The last of us</Text>;

export const Default = Template.bind({});
Default.args = {};
