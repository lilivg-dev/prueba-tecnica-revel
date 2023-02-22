import { BaseLayout } from '$/containers/Layouts/BaseLayout';
import MovieView from '$/containers/Views/Movie';

function MoviesPage(): JSX.Element {
  return (
    <BaseLayout pageMetadata={{ title: 'Movies', description: '' }}>
      <MovieView />
    </BaseLayout>
  );
}

export default MoviesPage;
