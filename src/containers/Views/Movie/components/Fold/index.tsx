import { Button } from '$/components/Button';
import { from, useMediaQuery } from '$/styles/media';

import { BackButton, Container, CoverImage, Overlay, Wrapper } from './styles';
import { Props } from './types';

export function Fold({ image, isAvailable }: Props) {
  const isTablet = !useMediaQuery(from.tabletLandscape);

  return (
    <Container>
      <Overlay />
      <CoverImage src={image} />
      <BackButton href="/" label="Back" />
      {!isTablet ? (
        <Wrapper>
          <Button label="Trailer" variant="secondary" />
          {isAvailable ? <Button label="Play" /> : null}
        </Wrapper>
      ) : null}
    </Container>
  );
}
