import { HeadMetaProps } from '$/containers/Layouts/HeadWrapper/types';
import type { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  pageMetadata: HeadMetaProps;
  className?: string;
};
