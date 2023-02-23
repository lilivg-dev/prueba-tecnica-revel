import { Text as DefaultText } from '$/components/Text';
import { resetButtonStyle } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled from 'styled-components';

export const Container = styled.button`
  ${resetButtonStyle}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  margin-block-end: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  :hover {
    > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  :focus-visible {
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.white, 0.05)},
      0 0 0 4px ${({ theme }) => theme.colors.white};
  }
`;

export const Text = styled(DefaultText).attrs({
  tag: 'span',
  variant: 'body2',
  weight: 'bold',
})`
  font-family: 'RobotoCondensed';
`;
