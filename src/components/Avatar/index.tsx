import UserIcon from '$/assets/icons/user.svg';

import { AvatarContainer, Container, Image } from './styles';
import { Props } from './types';

export function Avatar({ className, url }: Props) {
  return (
    <Container $hasImage={!!url} className={className}>
      <AvatarContainer tabIndex={0}>
        {url ? <Image src={url} alt="" /> : <UserIcon />}
      </AvatarContainer>
    </Container>
  );
}
