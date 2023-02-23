import { Text } from '$/components/Text';
import { resetButtonStyle, visuallyHidden } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled(Text)`
  ${visuallyHidden}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<StyledProps>`
  width: 100%;
  padding: 0.625rem 0.875rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${({ theme }) => addAlpha(theme.colors.white, 0.1)};
  border: ${({ $hasError, theme }) =>
    $hasError
      ? css`
  1px solid ${theme.colors.error}
  `
      : css`
  1px solid ${theme.colors.primary};
  `};
  border-radius: 0.5rem;

  ${({ $isPasswordType }) =>
    $isPasswordType &&
    css`
      padding-inline-end: 2.5rem;
    `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  :focus-visible-visible {
    border-color: ${({ $hasError, theme }) =>
      $hasError
        ? css`
            ${theme.colors.error}
          `
        : css`
            ${theme.colors.primary};
          `};
    outline: none;
    box-shadow: ${({ $hasError, theme }) =>
      $hasError
        ? css`
      0 0 0 4px ${theme.colors.error}
        `
        : css`
  0 1px 2px ${addAlpha(theme.colors.primary, 0.06)},
          0 1px 3px ${addAlpha(theme.colors.primary, 0.1)},
          0 0 0 4px ${addAlpha(theme.colors.primary, 0.2)}`};
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const PasswordToggler = styled.button`
  ${resetButtonStyle}
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  outline: none;
  outline-offset: 0;
  transform: translateY(-50%);
  inset-block-start: 50%;
  inset-inline-end: 0.875rem;
  transition: color 0.3s ease, background-color 0.3s ease, outline 0.3s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:active,
  &:focus-visible-visible {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:focus-visible-visible {
    outline: 0.125rem solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.error};
`;

export const ErrorIcon = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  color: ${({ theme }) => theme.colors.error};
  transform: translateY(-50%);
  inset-block-start: 50%;
  inset-inline-end: 0.875rem;
`;
