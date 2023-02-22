import { AddButton } from './components/AddButton';
import { Fold } from './components/Fold';
import { Info } from './components/Info';
import { CAST, genre, rating } from './mock';
import { Container, Content } from './styles';

function MovieView(): JSX.Element {
  return (
    <Container>
      <Fold />
      <Content>
        <AddButton />
        <Info cast={CAST} genre={genre} rating={rating} />
      </Content>
    </Container>
  );
}

export default MovieView;
