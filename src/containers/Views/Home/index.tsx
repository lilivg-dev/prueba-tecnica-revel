import { Fold } from './components/Fold';
import { MoviesSection } from './components/MoviesSection';
import { useConnect } from './connect';
import { FilterChoice } from './constants';
import { useLogic } from './logic';
import { Container, Content, FilterButtons } from './styles';

function HomeView(): JSX.Element {
  const { segmentedButtonsFilters, segmentedButtonsCurrentFilter } = useLogic();

  const { comedyMovies, dramaMovies, thrillerMovies, comingSoonMovies } =
    useConnect();

  return (
    <Container>
      <Fold />
      <Content>
        <FilterButtons actions={segmentedButtonsFilters} />
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Comedy ? (
          <MoviesSection title="comedy" movies={comedyMovies} />
        ) : null}
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Drama ? (
          <MoviesSection title="drama" movies={dramaMovies} />
        ) : null}
        {segmentedButtonsCurrentFilter?.value === FilterChoice.All ||
        segmentedButtonsCurrentFilter?.value === FilterChoice.Thrillers ? (
          <MoviesSection title="thrillers" movies={thrillerMovies} />
        ) : null}
        <MoviesSection
          title="coming soon"
          movies={comingSoonMovies}
          isComingSoon
        />
        <MoviesSection title="my list" movies={comedyMovies} />
      </Content>
    </Container>
  );
}

export default HomeView;
