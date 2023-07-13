type BadgeProps = {
  text: string;
  variant?:
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "warning"
    | "info"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  bg?: string;
  fg?: string;
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: boolean;
};

type SizeProps = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export { BadgeProps, SizeProps };
