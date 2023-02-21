import { Button as DefaultButton } from '$/components/Button';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled(DefaultButton).attrs({
  variant: 'secondary',
  size: 'small',
})<{ $checked?: boolean }>`
  ${({ theme, $checked }) =>
    !!$checked &&
    css`
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    `}
`;
