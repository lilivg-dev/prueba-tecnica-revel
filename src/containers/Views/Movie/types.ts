import { Genre } from '$/containers/Views/Home/types';

export type Movie = {
  id: string;
  highlighted: boolean;
  rating: number;
  poster: string;
  cast: string;
  description: string;
  genre: string;
  availableDate: string;
  title: string;
};

export type Props = {
  movies: Movie[];
  genres: Genre[];
};
