type DropdownProps = {
  onAction: () => void;
  variant?: "primary" | "secondary" | "dark";
  width?: string;
  position?: "left" | "right";
  open: boolean;
  children: JSX.Element | JSX.Element[];
  title: JSX.Element | string;
};

export { DropdownProps };
