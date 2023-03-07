import { paths } from '$/globals/paths';

export const useLogic = () => {
  const getMovieRouterLink = (movie: string) => ({
    pathname: paths.user.movie,
    query: { movieId: movie },
  });

  return { getMovieRouterLink };
};
