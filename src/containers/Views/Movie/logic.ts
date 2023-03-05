import { from, useMediaQuery } from '$/styles/media';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useLogic = () => {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

  const router = useRouter();
  const { movieId } = router.query;

  const [isChecked, setIsChecked] = useState(false);

  const handleAddToList = () => {
    setIsChecked(!isChecked);
  };

  return { isMobile, isTablet, handleAddToList, isChecked, movieId };
};
