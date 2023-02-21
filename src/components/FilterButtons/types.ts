export type ButtonProps = {
  label: string;
  onClick: () => void;
  checked?: boolean;
};
export type Props = {
  actions: ButtonProps[];
  className?: string;
};

export type FastFilter = {
  label: string;
  value: string;
};
