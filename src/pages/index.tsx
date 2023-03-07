import { BaseLayout } from '$/containers/Layouts/BaseLayout';
import HomeView from '$/containers/Views/Home';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function HomePage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      void router.replace('/login');
    }
  }, [router]);

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
