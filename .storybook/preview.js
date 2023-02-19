export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#222222',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
};

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '$/styles/global';
import { themes } from '$/styles/themes';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={themes.light}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
