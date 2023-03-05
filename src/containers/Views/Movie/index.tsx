import { Button } from '$/components/Button';
import { Text } from '$/components/Text';

import { AddButton } from './components/AddButton';
import { Fold } from './components/Fold';
import { Info } from './components/Info';
import { useLogic } from './logic';
// import { movie } from './mock';
import { ButtonsWrapper, Container, Content, Title } from './styles';
import { Props } from './types';

function MovieView({ movies, genres }: Props): JSX.Element {
  const { isMobile, isTablet, handleAddToList, movieId } = useLogic();

  const movie = movies.find((item) => item.id === movieId);

  const genre = genres.find((item) => item.id === movie?.genre);
  const genreName = genre?.name;

  const date = new Date();

  const movieAvailableDate = new Date(movie?.availableDate ?? '');

  const isAvailable = date >= movieAvailableDate;

  return (
    <Container>
      <Fold
        image={movie?.poster}
        isComingSoon={movie?.availableDate ? true : false}
      />
      <Content>
        {isTablet ? (
          <ButtonsWrapper>
            <Button label="Trailer" variant="secondary" />
            {isAvailable ? <Button label="Play" /> : null}
          </ButtonsWrapper>
        ) : null}

        <AddButton
          onClick={handleAddToList}
          checked={movie?.highlighted ?? false}
        />
        <Info
          cast={movie?.cast ?? ''}
          genre={genreName ?? ''}
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
