import { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  checked: boolean;
  className?: string;
};
