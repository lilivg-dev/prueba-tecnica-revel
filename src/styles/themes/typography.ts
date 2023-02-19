import { css } from 'styled-components';

export const typography = {
  largeTitle: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 8rem;
    line-height: 1.02;
  `,
  title1: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 4.875rem;
    line-height: 1.16;
  `,
  title2: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 4.75rem;
    line-height: 1;
  `,
  title3: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 3.75rem;
    line-height: 1.16;
  `,
  title4: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 3.375rem;
    line-height: 1;
  `,
  title5: css`
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 2.5rem;
    line-height: 1.15;
  `,
  bodyBig: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 1.5rem;
    line-height: 1.16;
  `,
  body1: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 1.125rem;
    line-height: 1.16;
  `,
  body2: css`
    font-weight: ${({ theme }) => theme.weights.regular};
    font-size: 1rem;
    line-height: 1.18;
  `,
};
