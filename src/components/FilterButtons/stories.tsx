import type { Meta, Story } from '@storybook/react';

import { FilterButtons } from '.';
import { Props } from './types';

export default {
  component: FilterButtons,
  title: 'General/FilterButtons',
  args: {
    actions: [
      { label: 'All', onClick: () => {}, checked: true },
      { label: 'Comedy', onClick: () => {} },
      { label: 'Drama', onClick: () => {} },
      { label: 'Thrillers', onClick: () => {} },
    ],
  },
} as Meta;

const Template: Story<Props> = (args) => <FilterButtons {...args} />;

export const Default = Template.bind({});
Default.args = {};
