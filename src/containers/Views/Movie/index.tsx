import { Button } from '$/components/Button';
import { Text } from '$/components/Text';

import { AddButton } from './components/AddButton';
import { Fold } from './components/Fold';
import { Info } from './components/Info';
import { useConnect } from './connect';
import { useLogic } from './logic';
import { ButtonsWrapper, Container, Content, Title } from './styles';

function MovieView(): JSX.Element {
  const { isMobile, isTablet, handleAddToList } = useLogic();
  const { movie, genre, isAvailable } = useConnect();

  return (
    <Container>
      <Fold image={movie?.poster} isAvailable={isAvailable} />
      <Content>
        {isTablet ? (
          <ButtonsWrapper>
            <Button label="Trailer" variant="secondary" />
            {!isAvailable ? <Button label="Play" /> : null}
          </ButtonsWrapper>
        ) : null}

        <AddButton
          onClick={handleAddToList}
          checked={movie?.highlighted ?? false}
        />
        <Info
          cast={movie?.cast ?? ''}
          genre={genre?.name ?? ''}
          rating={movie?.rating ?? 0}
        />
        <Title
          tag="h1"
          variant={isMobile ? 'title4' : isTablet ? 'title3' : 'largeTitle'}
          color="white"
        >
          {movie?.title}
        </Title>
        <Text tag="p" variant={isMobile ? 'body2' : 'bodyBig'} color="white">
          {movie?.description}
        </Text>
      </Content>
    </Container>
  );
}

export default MovieView;
