import type { Meta, Story } from '@storybook/react';

import { Menu } from '.';
import { Props } from './types';

export default {
  component: Menu,
  title: 'General/Menu',
} as Meta;

const Template: Story<Props> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
