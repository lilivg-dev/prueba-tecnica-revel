import { css } from 'styled-components';

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
