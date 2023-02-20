import { Text } from '$/components/Text';
import { resetButtonStyle } from '$/styles/mixins';
import DefaultRouterLink from 'next/link';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const RouterLink = styled(DefaultRouterLink)`
  display: contents;
`;

export const Component = styled(Text)<StyledProps>`
  ${resetButtonStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  white-space: nowrap;
  text-decoration: none;
  padding: ${({ $size }) => ($size === 'regular' ? '1rem 7.625rem' : '1rem')};
  border-radius: 1rem;
  outline: none;
  outline-offset: 0;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;

  &:disabled {
    opacity: 0.4;
  }

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          color: ${theme.colors.black};
          background-color: ${theme.colors.white};

          :hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
          }
        `;
      case 'link':
        return css`
          color: ${theme.colors.white};
          padding: 0;
          border-radius: 0;
          background-color: transparent;

          :hover {
            color: ${theme.colors.primary};
          }
        `;
      default:
      case 'primary':
        return css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};

          :hover {
            color: ${theme.colors.black};
            background-color: ${theme.colors.white};
          }
        `;
    }
  }}
`;

export const Container = styled.div<{ $isFullWidth: boolean }>`
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'fit-content')};

  ${Component} {
    width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'fit-content')};
  }
`;
