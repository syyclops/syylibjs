type ToggleProps = {
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  size?: "xs" | "sm" | "md" | "lg";
  onAction: (state: boolean) => void;
  on: boolean;
};

type SizeProps = {
  xs: ToggleSizeProps;
  sm: ToggleSizeProps;
  md: ToggleSizeProps;
  lg: ToggleSizeProps;
};

type ToggleSizeProps = {
  toggle: string;
  switch: string;
};

export { ToggleProps, SizeProps };
