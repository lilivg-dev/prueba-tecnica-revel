import { useSegmentedButtons } from '$/components/FilterButtons/logic';

import { FILTER_CHOICES, FILTER_DEFAULT } from './constants';

export const useLogic = () => {
  const {
    buttonsProps: segmentedButtonsFilters,
    current: segmentedButtonsCurrentFilter,
  } = useSegmentedButtons({
    options: FILTER_CHOICES,
    defaultOption: FILTER_DEFAULT,
  });

  return { segmentedButtonsFilters, segmentedButtonsCurrentFilter };
};
