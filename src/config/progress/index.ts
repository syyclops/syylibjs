import { SizeProps, VariantsProps } from "../../types";

const barSizes: SizeProps = {
  xs: "h-2",
  sm: "h-3",
  md: "h-4",
  lg: "h-5",
};

const circleStroke: VariantsProps = {
  primary: "stroke-primary",
  dark: "stroke-dark-neutral-300",
  secondary: "stroke-secondary",
  success: "stroke-success",
  error: "stroke-error",
  warning: "stroke-warning",
  info: "stroke-info",
  transparent: "stroke-transparent",
};

export { barSizes, circleStroke };
