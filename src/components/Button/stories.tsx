import type { Meta, Story } from '@storybook/react';

import { Button } from '.';
import { Props } from './types';

export default {
  component: Button,
  title: 'General/Button',
  args: {
    disabled: false,
    isFullWidth: false,
    label: 'My button',
  },
} as Meta;

const TemplateAllVariants: Story<Props> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <Button {...args} />
    <Button {...args} variant="secondary" />
    <Button {...args} variant="link" />
  </div>
);

export const Default = TemplateAllVariants.bind({});

export const Small = TemplateAllVariants.bind({});
Small.args = {
  size: 'small',
};

export const AsLink = TemplateAllVariants.bind({});
AsLink.args = {
  href: '/',
  target: '_self',
};

export const Fullwidth = TemplateAllVariants.bind({});
Fullwidth.args = {
  isFullWidth: true,
};

export const Disabled = TemplateAllVariants.bind({});
Disabled.args = {
  disabled: true,
};
