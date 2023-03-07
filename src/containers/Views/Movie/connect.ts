import { fetchApi } from '$/utils/fetchApi';
import { isBefore } from 'date-fns';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Movie } from './types';
import { Genre } from '../Home/types';

export function useConnect() {
  const {
    query: { movieId },
  } = useRouter();
  const [movie, setMovie] = useState<Movie>();
  const [genre, setGenre] = useState<Genre>();

  useEffect(() => {
    void fetchApi(`/api/movies/${movieId ?? ''}`).then((res: Movie) =>
      setMovie(res),
    );
  }, [movieId]);

  useEffect(() => {
    if (movie) {
      void fetchApi(`/api/genres/${movie.genre ?? ''}`).then((res: Genre) =>
        setGenre(res),
      );
    }
  }, [movie]);

  const date = new Date();

  const movieAvailableDate = new Date(movie?.availableDate ?? '');

  const isAvailable = isBefore(movieAvailableDate, date);

  return {
    movie,
    genre,
    isAvailable,
  };
}
