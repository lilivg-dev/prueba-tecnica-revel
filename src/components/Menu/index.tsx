import { Container } from './styles';
import { Props } from './types';
import { Button } from '../Button';

export function Menu({
  className,
  onSignOut,
  onMouseLeave,
  onMouseEnter,
}: Props) {
  return (
    <Container
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Button label="Sign Out" onClick={onSignOut} />
    </Container>
  );
}
