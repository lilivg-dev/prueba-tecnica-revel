import { Button } from '$/components/Button';
import { Text } from '$/components/Text';

import { AddButton } from './components/AddButton';
import { Fold } from './components/Fold';
import { Info } from './components/Info';
import { useLogic } from './logic';
import { movie } from './mock';
import { ButtonsWrapper, Container, Content, Title } from './styles';

function MovieView(): JSX.Element {
  const { isMobile, isTablet, handleAddToList, isChecked } = useLogic();

  return (
    <Container>
      <Fold />
      <Content>
        {isTablet ? (
          <ButtonsWrapper>
            <Button label="Trailer" variant="secondary" />
            {!movie.isComingSoon ? <Button label="Play" /> : null}
          </ButtonsWrapper>
        ) : null}

        <AddButton onClick={handleAddToList} checked={isChecked} />
        <Info cast={movie.cast} genre={movie.genre} rating={movie.rating} />
        <Title
          tag="h1"
          variant={isMobile ? 'title4' : isTablet ? 'title3' : 'largeTitle'}
          color="white"
        >
          {movie.title}
        </Title>
        <Text tag="p" variant={isMobile ? 'body2' : 'bodyBig'} color="white">
          {movie.description}
        </Text>
      </Content>
    </Container>
  );
}

export default MovieView;
