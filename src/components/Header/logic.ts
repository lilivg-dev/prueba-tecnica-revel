import { useRef, useState } from 'react';

export const useLogic = () => {
  const timeOutRef = useRef<number | undefined>();
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const handleOnMouseLeave = () => {
    timeOutRef.current = window.setTimeout(() => {
      setMenuDropDownOpen(false);
    }, 400);
  };

  const handleOnMouseEnter = () => {
    setMenuDropDownOpen(true);
    clearTimeout(timeOutRef.current);
  };
  return {
    isMenuDropDownOpen,
    handleOnMouseEnter,
    handleOnMouseLeave,
    timeOutRef,
    setMenuDropDownOpen,
  };
};
