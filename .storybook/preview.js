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
import appThemes from '$/styles/themes';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={appThemes.light}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
