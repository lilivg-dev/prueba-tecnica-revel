import { Button } from '$/components/Button';
import { Text } from '$/components/Text';
import { from, useMediaQuery } from '$/styles/media';

import { movie } from './mock';
import { Container, Content, CoverImage, Overlay } from './styles';

export function Fold() {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

  return (
    <Container>
      <Content>
        <Text
          tag="h1"
          variant={isMobile ? 'title4' : isTablet ? 'title3' : 'largeTitle'}
          color="white"
        >
          {movie.title}
        </Text>
        <Text tag="p" variant={isMobile ? 'body2' : 'bodyBig'} color="white">
          {movie.description}
        </Text>
        <Button label="Discover" />
      </Content>
      <Overlay />
      <CoverImage src={movie.image} />
    </Container>
  );
}
