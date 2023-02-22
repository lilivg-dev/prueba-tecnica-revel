import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

import { StyledProps } from './types';

export const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => addAlpha(theme.colors.white, 0.5)};
  border-radius: 50%;
  outline: 0;

  ${({ $hasImage }) => css`
    width: 2.875rem;
    height: 2.875rem;
    padding: ${!$hasImage ? '0.5rem' : null};
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
