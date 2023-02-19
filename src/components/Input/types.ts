import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'email' | 'password';
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
  errorMessage?: string;
  required?: boolean;
};

export type StyledProps = {
  $hasError: boolean;
  $isPasswordType: boolean;
};
