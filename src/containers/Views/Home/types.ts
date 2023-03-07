export type Movie = {
  id: string;
  genre: string;
  availableDate: string;
  title: string;
  thumbnail: string;
};

export type Genre = {
  id: string;
  name: string;
};

export type Props = {
  movies: Movie[];
  genres: Genre[];
};
