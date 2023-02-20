import { pageTitle } from '$/utils/pageTitle';
import Head from 'next/head';

import { Props } from './types';

export function HeadWrapper({ children, head }: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle(head.title)}</title>
        <meta name="description" content={head.description} />
      </Head>
      {children}
    </>
  );
}
