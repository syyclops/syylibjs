type BadgeProps = {
  text: string;
  variant?: "primary" | "secondary" | "error" | "success" | "warning" | "info";
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
