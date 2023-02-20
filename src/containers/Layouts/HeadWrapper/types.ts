import { ReactNode } from 'react';

export type HeadMetaProps = {
  title: string;
  description: string;
};

export type Props = {
  children: ReactNode;
  head: HeadMetaProps;
};
