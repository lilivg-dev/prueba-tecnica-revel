import type { Meta, Story } from '@storybook/react';

import { Footer } from '.';
import { Props } from './types';

export default {
  component: Footer,
  title: 'Navigation/Footer',
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
