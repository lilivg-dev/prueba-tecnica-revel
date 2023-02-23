import { Button } from '$/components/Button';
import { movie } from '$/containers/Views/Movie/mock';
import { from, useMediaQuery } from '$/styles/media';

import { Container, CoverImage, Overlay, Wrapper } from './styles';

export function Fold() {
  const isTablet = !useMediaQuery(from.tabletLandscape);

  return (
    <Container>
      <Overlay />
      <CoverImage src={movie.image} />
      {!isTablet ? (
        <Wrapper>
          <Button label="Trailer" variant="secondary" />
          {!movie.isComingSoon ? <Button label="Play" /> : null}
        </Wrapper>
      ) : null}
    </Container>
  );
}
