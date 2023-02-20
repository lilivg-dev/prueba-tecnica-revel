import { HeadWrapper } from '$/containers/Layouts/HeadWrapper';

import { Layout, Main } from './styles';
import { Props } from './types';

export function LoginLayout({ children, className, pageMetadata }: Props) {
  return (
    <HeadWrapper head={pageMetadata}>
      <Layout className={className}>
        <Main>{children}</Main>
      </Layout>
    </HeadWrapper>
  );
}
