type ToggleProps = {
  onAction: (state: boolean) => void;
  on: boolean;
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
