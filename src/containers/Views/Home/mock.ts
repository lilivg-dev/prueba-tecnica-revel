// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

export const ACTIONS = [
  { label: 'All', onClick: () => {}, checked: true },
  { label: 'Comedy', onClick: () => {} },
  { label: 'Drama', onClick: () => {} },
  { label: 'Thrillers', onClick: () => {} },
];

const movie = {
  title: 'Movie title',
  image: 'https://api.lorem.space/image/movie?w=261&h=386',
  link: '/',
};

const comingSoonMovie = {
  title: 'Movie title',
  image: 'https://api.lorem.space/image/movie?w=400',
  link: '/',
};

export const GENRE_MOVIES = new Array(8)
  .fill(movie)
  .map((i: typeof movie) => ({ ...i, id: nanoid() }));

export const COMING_SOON_MOVIES = new Array(8)
  .fill(comingSoonMovie)
  .map((i: typeof comingSoonMovie) => ({ ...i, id: nanoid() }));

export const MY_LIST = new Array(2)
  .fill(movie)
  .map((i: typeof movie) => ({ ...i, id: nanoid() }));
