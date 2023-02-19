import { isLinkProps } from '$/utils/isLinkProps';

import { Component, Container, RouterLink } from './styles';
import { Props, StyledProps } from './types';

export function Button(props: Props) {
  const { href, ...rest } = props;
  const styledProps: StyledProps = {
    $size: props.size ?? 'regular',
    $variant: props.variant ?? 'primary',
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
    >
      {props.label}
    </Component>
  );

  return (
    <Container
      className={props.className}
      $isFullWidth={props.isFullWidth ?? false}
    >
      {href ? <RouterLink href={href}>{component}</RouterLink> : component}
    </Container>
  );
}
