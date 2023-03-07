import { from, useMediaQuery } from '$/styles/media';
import RouterLink from 'next/link';

import { useLogic } from './logic';
import {
  Container,
  MovieContainer,
  MovieCover,
  MoviesSlider,
  Overlay,
  Title,
} from './styles';
import { Props } from './types';

export function MoviesSection({ title, movies, isComingSoon }: Props) {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

  const { getMovieRouterLink } = useLogic();

  return (
    <Container>
      <Title
        tag="h2"
        variant={isMobile ? 'title5' : isTablet ? 'title3' : 'title1'}
        color="white"
      >
        {title}
      </Title>
      <MoviesSlider>
        {movies.map((movie) => (
          <RouterLink
            key={movie.id}
            href={getMovieRouterLink(movie.id)}
            title={movie.title}
          >
            <MovieContainer $isComingSoon={isComingSoon}>
              <Overlay />
              <MovieCover src={movie.thumbnail} />
            </MovieContainer>
          </RouterLink>
        ))}
      </MoviesSlider>
    </Container>
  );
}
