import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => addAlpha(theme.colors.white, 0.5)};
  border-radius: 50%;
  outline: 0;

  :focus {
    box-shadow: 0 1px 2px ${({ theme }) => addAlpha(theme.colors.primary, 0.05)},
      0 0 0 4px ${({ theme }) => theme.colors.primary};
  }
`;

export const Container = styled.div<StyledProps>`
  position: relative;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ $hasImage }) => css`
    ${AvatarContainer} {
      width: 2.875rem;
      height: 2.875rem;
      padding: ${!$hasImage ? '0.5rem' : null};
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
