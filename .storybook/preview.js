export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
