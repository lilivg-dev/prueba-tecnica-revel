import { Movie } from '$/containers/Views/Home/types';

export type Props = {
  title: string;
  movies: Movie[];
  isComingSoon?: boolean;
  className?: string;
};

export type StyledProps = {
  $isComingSoon: Props['isComingSoon'];
};
