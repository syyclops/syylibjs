type DropdownProps = {
  options: DropdownOptionProps[];
  callback: (e: DropdownOptionProps) => void;
  variant?: "primary" | "secondary";
  width?: string;
  position?: "left" | "right";
};

type DropdownOptionProps = {
  label: string | JSX.Element;
  value: string;
  title?: string;
};

export { DropdownProps, type DropdownOptionProps };
