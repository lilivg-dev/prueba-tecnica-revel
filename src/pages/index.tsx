import { BaseLayout } from '$/containers/Layouts/BaseLayout';
import HomeView from '$/containers/Views/Home';

function HomePage(): JSX.Element {
  return (
    <BaseLayout
      pageMetadata={{
        title: 'Home',
        description: 'This is MediaHouse home page',
      }}
    >
      <HomeView />
    </BaseLayout>
  );
}

export default HomePage;
