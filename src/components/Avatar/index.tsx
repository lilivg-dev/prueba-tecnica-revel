import UserIcon from '$/assets/icons/user.svg';

import { Container, Image } from './styles';
import { Props } from './types';

export function Avatar({ className, url }: Props) {
  return (
    <Container $hasImage={!!url} className={className}>
      {url ? <Image src={url} alt="" /> : <UserIcon />}
    </Container>
  );
}
