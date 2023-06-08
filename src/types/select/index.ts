type SelectProps = {
  selected: number;
  options: SelectOptionProps[];
  variant?: "primary" | "secondary" | "dark";
  width?: string;
  callback: (e: SelectOptionProps) => void;
};

type SelectOptionProps = {
  id: number;
  label: string | JSX.Element;
  value: string;
  title?: string;
};

export { SelectProps, SelectOptionProps };
