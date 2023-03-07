import User from '$/assets/images/user.png';
import { Footer } from '$/components/Footer';
import { Header } from '$/components/Header';
import { HeadWrapper } from '$/containers/Layouts/HeadWrapper';
import { useRouter } from 'next/router';

import { Layout, Main } from './styles';
import { Props } from './types';

export function BaseLayout({ children, className, pageMetadata }: Props) {
  const router = useRouter();

  const handleSignOut = async () => {
    localStorage.removeItem('token');

    await router.push('/');
  };

  return (
    <HeadWrapper head={pageMetadata}>
      <Layout className={className}>
        <Header onSignOut={() => void handleSignOut()} url={User} />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </HeadWrapper>
  );
}
