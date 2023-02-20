import type { Meta, Story } from '@storybook/react';

import { Header } from '.';
import { Props } from './types';

export default {
  component: Header,
  title: 'Navigation/Header',
  args: {
    onLogout: () => null,
  },
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
