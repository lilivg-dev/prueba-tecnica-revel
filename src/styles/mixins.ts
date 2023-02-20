import { css } from 'styled-components';

const APP_CONTAINER_WIDTH = 80; // In rem

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

export const maxContent = css`
  width: 100%;
  max-width: ${APP_CONTAINER_WIDTH}rem;
`;
