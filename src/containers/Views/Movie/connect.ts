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
  const [isLoading, setIsLoading] = useState(false);
  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    void fetchApi(`/api/movies/${movieId ?? ''}`).then((res: Movie) =>
      setMovie(res),
    );
    if (movieId && !Array.isArray(movieId)) {
      void fetchApi('/api/user/list').then((res: string[]) =>
        setIsInMyList(res.includes(movieId)),
      );
    }
  }, [movieId]);

  useEffect(() => {
    if (movie) {
      void fetchApi(`/api/genres/${movie.genre ?? ''}`).then((res: Genre) =>
        setGenre(res),
      );
    }
  }, [movie]);

  const handleMyList = async () => {
    setIsLoading(true);
    if (!isInMyList) {
      const response = await fetchApi('/api/user/list', {
        method: 'POST',
        body: JSON.stringify({ id: movieId }),
      });

      setIsInMyList(true);
    } else {
      const response = await fetchApi(`/api/user/list/${movieId ?? ''}`, {
        method: 'DELETE',
      });

      setIsInMyList(false);
    }
    setIsLoading(false);
  };

  const date = new Date();

  const movieAvailableDate = new Date(movie?.availableDate ?? '');

  const isAvailable = isBefore(movieAvailableDate, date);

  return {
    movie,
    genre,
    isAvailable,
    handleMyList,
    isLoading,
    isInMyList,
  };
}
