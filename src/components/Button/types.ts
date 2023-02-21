import { XOR } from '$/utils/types';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';
import { UrlObject } from 'url';

type CommonProps = {
  label: string | ReactElement;
  isFullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'small' | 'regular';
  className?: string;
};

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'color'
> &
  CommonProps;

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'color' | 'href'
> &
  CommonProps & { href: string | UrlObject };

export type Props = XOR<ButtonProps, AnchorProps>;

export type StyledProps = {
  $variant: CommonProps['variant'];
  $size: CommonProps['size'];
  $isFullWidth: CommonProps['isFullWidth'];
};
