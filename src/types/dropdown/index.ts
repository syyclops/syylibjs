type DropdownProps = {
  onAction: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  width?: string;
  position?: "left" | "right";
  open: boolean;
  children: JSX.Element | JSX.Element[];
  title: JSX.Element | string;
  cxLayout?: string;
  cxAction?: string;
};

export { DropdownProps };
