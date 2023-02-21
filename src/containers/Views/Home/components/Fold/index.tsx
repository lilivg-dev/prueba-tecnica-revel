import { Button } from '$/components/Button';

import { Container, MainTitle, Subtitle, Wrapper } from './styles';

export function Fold() {
  return (
    <Container>
      <Wrapper>
        <MainTitle>The Last of Us</MainTitle>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra lacus quam, in molestie dolor consectetur in. Praesent
          ullamcorper fringilla pharetra....
        </Subtitle>
        <Button label="Discover" />
      </Wrapper>
    </Container>
  );
}
