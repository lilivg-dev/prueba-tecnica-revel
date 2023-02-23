import { Fold } from './components/Fold';
import { MoviesSection } from './components/MoviesSection';
import { FilterChoice } from './constants';
import { useLogic } from './logic';
import { COMING_SOON_MOVIES, GENRE_MOVIES, MY_LIST } from './mock';
import { Container, Content, FilterButtons } from './styles';

function HomeView(): JSX.Element {
  const { segmentedButtonsFilters, segmentedButtonsCurrentFilter } = useLogic();

  return (
    <Container>
      <Fold />
      <Content>
        <FilterButtons actions={segmentedButtonsFilters} />
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Comedy ? (
          <MoviesSection title="comedy" movies={GENRE_MOVIES} />
        ) : null}
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Drama ? (
          <MoviesSection title="drama" movies={GENRE_MOVIES} />
        ) : null}
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Thrillers ? (
          <MoviesSection title="thrillers" movies={GENRE_MOVIES} />
        ) : null}
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
