import { useRouterState } from '$/hooks/useRouterState';

import { ButtonProps, FastFilter } from './types';

export const useSegmentedButtons = ({
  options,
  defaultOption = options[0],
  onSelectFilter,
  routerKey = 'filter',
}: {
  options: FastFilter[];
  defaultOption?: FastFilter;
  onSelectFilter?: () => void;
  routerKey?: string;
}) => {
  const [selectedValue, setSelectedValue] = useRouterState(
    routerKey,
    defaultOption?.value || '',
  );

  const normalizeFastFilter = (selected?: string): FastFilter | undefined => {
    const found = options?.find(({ value }) => selected === value);
    return found ? found : defaultOption;
  };

  const current = normalizeFastFilter(selectedValue);

  const buttonsProps: ButtonProps[] = !options
    ? []
    : options.map(({ value, label }) => ({
        label,
        onClick: () => {
          void setSelectedValue(value);
          onSelectFilter?.();
        },
        checked: selectedValue
          ? value === selectedValue
          : value === defaultOption?.value,
      }));

  return {
    buttonsProps,
    current,
  };
};
