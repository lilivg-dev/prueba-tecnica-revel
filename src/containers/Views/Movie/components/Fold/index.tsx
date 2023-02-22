import { Button } from '$/components/Button';

import { Container, Wrapper } from './styles';

export function Fold() {
  return (
    <Container>
      <Wrapper>
        <Button label="Trailer" variant="secondary" />
        <Button label="Play" />
      </Wrapper>
    </Container>
  );
}
