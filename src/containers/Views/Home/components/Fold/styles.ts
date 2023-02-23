import { from } from '$/styles/media';
import { wrap } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled from 'styled-components';

export const Container = styled.div`
  ${wrap}
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  padding-block: 9rem 12.25rem;
  min-height: 37.5rem;

  ${from.tabletLandscape} {
    min-height: auto;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => addAlpha(theme.colors.black, 0.2)};
  z-index: 2;
`;

export const CoverImage = styled.img`
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  margin-inline: auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 35.1875rem;
`;
