import { forwardRef } from 'react';

import { Container } from './styles';
import { Props } from './types';

export const Text = forwardRef<HTMLElement, Props>(function TextComponent(
  { tag, weight, variant, color = 'white', children, className, ...props },
  ref,
) {
  return (
    <Container
      ref={ref}
      as={tag}
      $color={color}
      $weight={weight}
      $variant={variant}
      className={className}
      {...props}
    >
      {children}
    </Container>
  );
});
