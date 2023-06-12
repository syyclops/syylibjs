type ToggleProps = {
  variant?: "primary" | "secondary" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  onAction: (state: boolean) => void;
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
