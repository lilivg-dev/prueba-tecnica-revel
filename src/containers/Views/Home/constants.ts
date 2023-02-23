export enum FilterChoice {
  Comedy = 'comedy',
  Drama = 'drama',
  Thrillers = 'thrillers',
  All = 'all',
}

export const DEFAULT_FILTER_TAG = FilterChoice.All;

export const FILTER_DEFAULT = {
  label: 'All',
  value: FilterChoice.All,
};

export const FILTER_CHOICES = [
  FILTER_DEFAULT,

  {
    label: 'Comedy',
    value: FilterChoice.Comedy,
  },

  {
    label: 'Drama',
    value: FilterChoice.Drama,
  },

  {
    label: 'Thrillers',
    value: FilterChoice.Thrillers,
  },
];
