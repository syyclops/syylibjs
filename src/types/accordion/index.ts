type AccordionProps = {
  title: string | JSX.Element;
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
  width?: string;
  rounded?: boolean;
  cxLayout?: string;
  cxTitle?: string;
  cxContent?: string;
  hideIcon?: boolean;
};

export { AccordionProps };
