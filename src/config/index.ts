import { SizeProps, VariantsProps } from "../types";

const variants: VariantsProps = {
  primary: "bg-primary text-white",
  "primary-light": "bg-primary-light text-dark-neutral-300",
  dark: "bg-dark-neutral-100 text-white",
  darker: "bg-dark-neutral-200 text-white",
  darkest: "bg-dark-neutral-300 text-white",
  "mid-100": "bg-mid-neutral-100 text-white",
  "mid-200": "bg-mid-neutral-200 text-white",
  "mid-300": "bg-mid-neutral-300 text-white",
  light: "bg-mid-neutral-300 text-white",
  lighter: "bg-mid-neutral-200 text-white",
  lightest: "bg-mid-neutral-100 text-white",
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
