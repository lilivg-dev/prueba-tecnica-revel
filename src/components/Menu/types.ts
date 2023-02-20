import { MouseEvent } from 'react';

export type Props = {
  className?: string;
  onSignOut: () => void;
  onMouseEnter: (event: MouseEvent) => void;
  onMouseLeave: (event: MouseEvent) => void;
};
