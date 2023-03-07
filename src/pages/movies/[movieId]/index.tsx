import { BaseLayout } from '$/containers/Layouts/BaseLayout';
import { Genre } from '$/containers/Views/Home/types';
import MovieView from '$/containers/Views/Movie';
import { Movie } from '$/containers/Views/Movie/types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const moviesRes = await fetch('https://kata.conducerevel.com/films/movies', {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3NTYzMmY3LTBhYjktNDY5MS1hZTQzLWVkZDlmN2YyNjBhMyIsImlhdCI6MTY3NzkzNTI3Mn0.HWD0ahXivJlXGKZKHSPt1lVcwXHNiSVv63FGrW-hWoc',
    },
  });

  const movies = (await moviesRes.json()) as Movie[];

  const genresRes = await fetch('https://kata.conducerevel.com/films/genres', {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU3NTYzMmY3LTBhYjktNDY5MS1hZTQzLWVkZDlmN2YyNjBhMyIsImlhdCI6MTY3NzkzNTI3Mn0.HWD0ahXivJlXGKZKHSPt1lVcwXHNiSVv63FGrW-hWoc',
    },
  });
  const genres = (await genresRes.json()) as Genre[];

  return {
    props: {
      movies,
      genres,
    },
  };
};

interface Props {
  movies: Movie[];
  genres: Genre[];
}

function MoviesPage({ movies, genres }: Props): JSX.Element {
  return (
    <BaseLayout pageMetadata={{ title: 'Movies', description: '' }}>
      <MovieView movies={movies} genres={genres} />
    </BaseLayout>
  );
}

export default MoviesPage;
