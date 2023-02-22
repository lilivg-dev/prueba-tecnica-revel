import type { Meta, Story } from '@storybook/react';

import { AddButton } from '.';
import { Props } from './types';

export default {
  component: AddButton,
  title: 'General/AddButton',
} as Meta;

const TemplateAllVariants: Story<Props> = (args) => <AddButton {...args} />;

export const Default = TemplateAllVariants.bind({});
