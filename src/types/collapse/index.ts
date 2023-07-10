type CollapseProps = {
  content: string | JSX.Element;
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  isOpen: boolean;
  cx?: string;
};

export { CollapseProps };
