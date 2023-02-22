import { from, useMediaQuery } from '$/styles/media';
import RouterLink from 'next/link';

import {
  Container,
  MovieContainer,
  MovieCover,
  MoviesSlider,
  Title,
} from './styles';
import { Props } from './types';

export function MoviesSection({ title, movies, isComingSoon }: Props) {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

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
          <RouterLink key={movie.id} href={movie.link} title={movie.title}>
            <MovieContainer $isComingSoon={isComingSoon}>
              <MovieCover src={movie.image} />
            </MovieContainer>
          </RouterLink>
        ))}
      </MoviesSlider>
    </Container>
  );
}
