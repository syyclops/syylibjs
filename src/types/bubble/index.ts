type BubbleProps = {
  text: string;
  tooltip?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  size?: "xs" | "sm" | "md" | "lg";
  onAction?: () => void;
  bg?: string;
  fg?: string;
  animate?: boolean;
};

export { BubbleProps };
