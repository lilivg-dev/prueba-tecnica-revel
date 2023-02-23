import { resetButtonStyle } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.6875rem 2rem;
`;

export const MenuButton = styled.button`
  ${resetButtonStyle}
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  position: relative;

  :focus-visible,
  :hover {
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.primary, 0.05)},
      0 0 0 4px ${({ theme }) => theme.colors.primary};
  }
`;
