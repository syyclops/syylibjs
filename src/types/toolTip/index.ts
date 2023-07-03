type ToolTipProps = {
  children: string | JSX.Element;
  title: string | JSX.Element;
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  position?:
    | "top-center"
    | "top-left"
    | "top-right"
    | "right-center"
    | "right-top"
    | "right-bottom"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "left-center"
    | "left-top"
    | "left-bottom";
  width?: string;
  cx?: string;
};

type PositionProps = {
  "top-center": string;
  "top-left": string;
  "top-right": string;
  "right-center": string;
  "right-top": string;
  "right-bottom": string;
  "bottom-center": string;
  "bottom-left": string;
  "bottom-right": string;
  "left-center": string;
  "left-top": string;
  "left-bottom": string;
};

export { ToolTipProps, PositionProps };
