import { Text } from '$/components/Text';
import { resetButtonStyle } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
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
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'fit-content')};
  min-width: ${({ $size }) => ($size === 'small' ? '7.8125rem' : 'auto')};
  border-radius: 1rem;
  outline: none;
  outline-offset: 0;
  transition: color 0.3s ease, background-color 0.3s ease;

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

          :focus-visible {
            box-shadow: 0 1px 2px ${addAlpha(theme.colors.primary, 0.05)},
              0 0 0 4px ${theme.colors.primary};
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

          :focus-visible {
            box-shadow: 0 1px 2px ${addAlpha(theme.colors.primary, 0.05)},
              0 0 0 4px ${theme.colors.primary};
            border-radius: 0.25rem;
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

          :focus-visible {
            box-shadow: 0 1px 2px ${addAlpha(theme.colors.white, 0.05)},
              0 0 0 4px ${theme.colors.white};
          }
        `;
    }
  }}
`;
