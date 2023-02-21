import { Footer } from '$/components/Footer';
import { Header } from '$/components/Header';
import { HeadWrapper } from '$/containers/Layouts/HeadWrapper';

import { Layout, Main } from './styles';
import { Props } from './types';

export function BaseLayout({ children, className, pageMetadata }: Props) {
  return (
    <HeadWrapper head={pageMetadata}>
      <Layout className={className}>
        <Header onSignOut={() => alert('Sign out')} />
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </HeadWrapper>
  );
}
