import { from } from '$/styles/media';
import { wrap } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled from 'styled-components';

export const Container = styled.section`
  ${wrap}
  position: relative;
  z-index: 0;
  min-height: 37.5rem;

  ${from.tabletLandscape} {
    padding-block: 44.4375rem 2rem;
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`;
