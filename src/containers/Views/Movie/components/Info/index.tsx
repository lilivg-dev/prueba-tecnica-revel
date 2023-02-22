import { Rating } from '$/components/Rating';

import { CastWrap, Container, Row, Text, Title } from './styles';
import { Props } from './types';

export function Info({ rating, cast, genre }: Props) {
  return (
    <Container>
      <Row>
        <Title>Rating:</Title>
        <Rating rating={rating} />
      </Row>
      <Row>
        <Title>Cast:</Title>
        <CastWrap>
          {cast.map((actor) => (
            <Text key={actor}>{actor}</Text>
          ))}
        </CastWrap>
      </Row>
      <Row>
        <Title>Genre:</Title>
        <Text>{genre}</Text>
      </Row>
    </Container>
  );
}
