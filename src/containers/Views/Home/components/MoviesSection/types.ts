type Movies = {
  id: string;
  title: string;
  image: string;
  link: string;
};

export type Props = {
  title: string;
  movies: Movies[];
  isComingSoon?: boolean;
  className?: string;
};

export type StyledProps = {
  $isComingSoon: Props['isComingSoon'];
};
