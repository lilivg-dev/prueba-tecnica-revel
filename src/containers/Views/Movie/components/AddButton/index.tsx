import PlusIcon from '$/assets/icons/plus.svg';

import { Container, Text } from './styles';
import { Props } from './types';

export function AddButton({ className, ...props }: Props) {
  return (
    <Container className={className} {...props}>
      <PlusIcon />
      <Text>Add to my list</Text>
    </Container>
  );
}
