import { isLinkProps } from '$/utils/isLinkProps';

import { Component, RouterLink } from './styles';
import { Props, StyledProps } from './types';

export function Button(props: Props) {
  const { href, ...rest } = props;
  const styledProps: StyledProps = {
    $size: props.size ?? 'regular',
    $variant: props.variant ?? 'primary',
    $isFullWidth: props.isFullWidth ?? false,
  };

  const component = (
    <Component
      {...rest}
      {...styledProps}
      tag={isLinkProps(props) ? 'span' : 'button'}
      variant={props.size === 'regular' ? 'bodyBig' : 'body1'}
      {...(!isLinkProps(props) && {
        disabled: props.disabled,
        type: props.type ?? 'button',
      })}
      className={props.className}
      $isFullWidth={props.isFullWidth ?? false}
    >
      {props.label}
    </Component>
  );

  return (
    <>{href ? <RouterLink href={href}>{component}</RouterLink> : component}</>
  );
}
