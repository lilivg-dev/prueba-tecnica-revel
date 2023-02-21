import { Button, Container } from './styles';
import { Props } from './types';

export function FilterButtons({ actions, className }: Props) {
  return (
    <Container className={className}>
      {actions.map(({ label, onClick, checked }, index) => (
        <Button
          key={index}
          label={label}
          onClick={onClick}
          $checked={checked}
        />
      ))}
    </Container>
  );
}
