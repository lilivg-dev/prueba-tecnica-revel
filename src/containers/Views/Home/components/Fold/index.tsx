import { Button } from '$/components/Button';
import { Text } from '$/components/Text';
import { from, useMediaQuery } from '$/styles/media';

import { Container, Wrapper } from './styles';

export function Fold() {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

  return (
    <Container>
      <Wrapper>
        <Text
          tag="h1"
          variant={isMobile ? 'title4' : isTablet ? 'title3' : 'largeTitle'}
          color="white"
        >
          The Last of Us
        </Text>
        <Text tag="p" variant={isMobile ? 'body2' : 'bodyBig'} color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra lacus quam, in molestie dolor consectetur in. Praesent
          ullamcorper fringilla pharetra....
        </Text>
        <Button label="Discover" />
      </Wrapper>
    </Container>
  );
}
