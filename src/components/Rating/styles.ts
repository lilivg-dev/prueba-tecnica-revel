import DefaultStarIcon from '$/assets/icons/star.svg';
import { addAlpha } from '$/utils/addAlpha';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const StarWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 1.25rem;
  height: 1.25rem;
`;

export const StarBackground = styled(DefaultStarIcon)`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => addAlpha(theme.colors.white, 0.5)};
`;

export const StarForegroundProgress = styled.div<{ $widthPercent?: number }>`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  ${({ $widthPercent }) =>
    css`
      width: ${$widthPercent}%;
    `}
`;

export const StarForeground = styled(DefaultStarIcon)`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  color: ${({ theme }) => theme.colors.yellow};
  width: 1.25rem;
  height: 1.25rem;
`;
