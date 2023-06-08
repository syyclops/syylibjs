import { SizeProps, VariantsProps } from "../types";

const variants: VariantsProps = {
  primary: "bg-primary text-white",
  dark: "bg-dark-neutral-200 text-white",
  secondary: "bg-secondary text-white",
  transparent: "bg-transparent text-white",
  error: "bg-error text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
};

const sizes: SizeProps = {
  xs: "text-[0.8rem] leading-[1rem]",
  sm: "text-[0.85rem] leading-[1.3rem]",
  md: "text-[0.9rem] leading-[1.5rem]",
  lg: "text-[0.95rem] leading-[1.7rem]",
};

export { variants, sizes };
