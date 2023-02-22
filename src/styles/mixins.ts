import { css } from 'styled-components';

import { from } from './media';

export const resetButtonStyle = css`
  display: flex;
  padding: 0;
  background: transparent;
  border: none;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
`;

export const wrap = css`
  width: 100%;
  padding-inline: 1rem;

  ${from.tabletPortrait} {
    padding-inline: 2rem;
  }

  ${from.laptop} {
    padding-inline: 7.5rem;
  }

  ${from.desktop} {
    padding-inline: 8.125rem;
  }
`;

export const moviesWrap = css`
  width: 100%;
  padding-inline-end: 1rem;

  ${from.tabletPortrait} {
    padding-inline-end: 2rem;
  }

  ${from.laptop} {
    padding-inline-end: 7.5rem;
  }

  ${from.desktop} {
    padding-inline-end: 8.125rem;
  }
`;

export const hideScrollbar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
