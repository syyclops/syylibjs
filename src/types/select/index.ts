type SelectProps = {
  title: string | JSX.Element;
  children: JSX.Element | JSX.Element[];
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
  onAction: () => void;
  open: boolean;
  cxLayout?: string;
  cxSelect?: string;
  onClickAway: () => void;
};

type SelectOptionProps = {
  name: string;
  children: JSX.Element | string;
  onSelect?: (n: string) => void;
  cx?: string;
};

export { SelectProps, SelectOptionProps };
