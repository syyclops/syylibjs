type DotProps = {
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
  cx?: string;
};

export { DotProps };
