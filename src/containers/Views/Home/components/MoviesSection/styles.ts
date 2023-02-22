import { Text } from '$/components/Text';
import { from } from '$/styles/media';
import { hideScrollbar, moviesWrap } from '$/styles/mixins';
import { addAlpha } from '$/utils/addAlpha';
import styled from 'styled-components';

import { StyledProps } from './types';

export const Container = styled.section`
  padding-inline: -1rem;

  ${from.tabletPortrait} {
    padding-inline: -2rem;
  }

  ${from.laptop} {
    padding-inline: -7.5rem;
  }

  ${from.desktop} {
    padding-inline: -8.125rem;
  }
`;

export const Title = styled(Text)`
  text-transform: capitalize;
  margin-block-end: 2rem;

  ${from.mobile} {
    margin-block-end: 1.5rem;
  }
`;

export const MoviesSlider = styled.div`
${hideScrollbar}
${moviesWrap}
display: flex;
gap: 1.5rem;
align-items; center;
flex-wrap: nowrap;
overflow-x: scroll;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
padding-inline-end: 1rem;
`;

export const MovieContainer = styled.div<StyledProps>`
  position: relative;
  flex: 0 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  width: ${({ $isComingSoon }) => ($isComingSoon ? '25rem' : '16.3125rem')};
  height: ${({ $isComingSoon }) => ($isComingSoon ? '16.25rem' : '24.125rem')};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => addAlpha(theme.colors.black, 0.29)};
  z-index: 1;
`;

export const MovieCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
