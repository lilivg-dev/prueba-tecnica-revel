import PlusIcon from '$/assets/icons/plus.svg';
import StarIcon from '$/assets/icons/star.svg';

import { Container, Text } from './styles';
import { Props } from './types';

export function AddButton({ className, checked, ...props }: Props) {
  return (
    <Container className={className} {...props}>
      {checked ? <StarIcon /> : <PlusIcon />}
      {checked ? <Text>Remove from my list</Text> : <Text>Add to my list</Text>}
    </Container>
  );
}
