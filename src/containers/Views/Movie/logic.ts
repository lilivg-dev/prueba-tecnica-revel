import { from, useMediaQuery } from '$/styles/media';
import { useState } from 'react';

export const useLogic = () => {
  const isMobile = !useMediaQuery(from.mobile);
  const isTablet = !useMediaQuery(from.tabletLandscape);

  const [isChecked, setIsChecked] = useState(false);

  const handleAddToList = () => {
    setIsChecked(!isChecked);
  };

  return { isMobile, isTablet, handleAddToList, isChecked };
};
