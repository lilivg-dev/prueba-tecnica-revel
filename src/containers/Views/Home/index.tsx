import { Fold } from './components/Fold';
import { MoviesSection } from './components/MoviesSection';
import { ACTIONS, COMING_SOON_MOVIES, GENRE_MOVIES, MY_LIST } from './mock';
import { Container, Content, FilterButtons } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Fold />
      <Content>
        <FilterButtons actions={ACTIONS} />
        <MoviesSection title="comedy" movies={GENRE_MOVIES} />
        <MoviesSection title="drama" movies={GENRE_MOVIES} />
        <MoviesSection title="thrillers" movies={GENRE_MOVIES} />
        <MoviesSection
          title="coming soon"
          movies={COMING_SOON_MOVIES}
          isComingSoon
        />
        <MoviesSection title="my list" movies={MY_LIST} />
      </Content>
    </Container>
  );
}

export default HomeView;
