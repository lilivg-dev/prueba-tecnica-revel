import { fetchApi } from '$/utils/fetchApi';
import { isBefore } from 'date-fns';
import { useEffect, useState } from 'react';

import { Genre, Movie } from './types';

export function useConnect() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>();

  useEffect(() => {
    void fetchApi('/api/movies').then((res: Movie[]) => setMovies(res));
    void fetchApi('/api/genres').then((res: Genre[]) => setGenres(res));
  }, []);

  const comedyMovies = movies.filter(
    (movie) =>
      movie.genre ===
      (genres?.find((genre) => genre.name.toLowerCase() === 'comedy')?.id ??
        ''),
  );

  const dramaMovies = movies.filter(
    (movie) =>
      movie.genre ===
      (genres?.find((genre) => genre.name.toLowerCase() === 'drama')?.id ?? ''),
  );

  const thrillerMovies = movies.filter(
    (movie) =>
      movie.genre ===
      (genres?.find((genre) => genre.name.toLowerCase() === 'thrillers')?.id ??
        ''),
  );

  const isMovieComingSoon = (movie: Movie) => {
    const date = new Date();

    const movieAvailableDate = new Date(movie?.availableDate ?? '');

    const isAvailable = isBefore(movieAvailableDate, date);

    return !isAvailable;
  };

  const comingSoonMovies = movies.filter(isMovieComingSoon);

  return {
    comedyMovies,
    dramaMovies,
    thrillerMovies,
    comingSoonMovies,
  };
}
