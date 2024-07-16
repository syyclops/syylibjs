import { SizeProps, VariantsProps } from "../types";

const outlinedVariants: VariantsProps = {
  primary: "border-primary hover:border-primary hover:bg-primary text-white",
  "primary-light":
    "border-primary-light hover:border-primary-light hover:bg-primary-light text-dark-neutral-300",
  dark: "border-dark-neutral-100 hover:border-dark-neutral-100 hover:bg-dark-neutral-100 text-white",
  darker:
    "border-dark-neutral-200 hover:border-dark-neutral-200 hover:bg-dark-neutral-200 text-white",
  darkest:
    "border-dark-neutral-300 hover:border-dark-neutral-300 hover:bg-dark-neutral-300 text-white",
  "mid-100":
    "border-mid-neutral-100 hover:border-mid-neutral-100 hover:bg-mid-neutral-100 text-white",
  "mid-200":
    "border-mid-neutral-200 hover:border-mid-neutral-200 hover:bg-mid-neutral-200 text-white",
  "mid-300":
    "border-mid-neutral-300 hover:border-mid-neutral-300 hover:bg-mid-neutral-300 text-white",
  light:
    "border-mid-neutral-300 hover:border-mid-neutral-300 hover:bg-mid-neutral-300 text-white",
  lighter:
    "border-mid-neutral-200 hover:border-mid-neutral-200 hover:bg-mid-neutral-200 text-white",
  lightest:
    "border-mid-neutral-100 hover:border-mid-neutral-100 hover:bg-mid-neutral-100 text-white",
  secondary:
    "border-secondary hover:border-secondary hover:bg-secondary text-white",
  transparent:
    "border-transparent hover:border-transparent hover:bg-transparent text-white",
  error: "border-error hover:border-error hover:bg-error text-white",
  success: "border-success hover:border-success hover:bg-success text-white",
  warning: "border-warning hover:border-warning hover:bg-warning text-white",
  info: "border-info hover:border-info hover:bg-info text-white",
};

const variants: VariantsProps = {
  primary:
    "bg-primary text-white border-primary hover:bg-primary-hover hover:border-primary-hover",
  "primary-light":
    "bg-primary-light text-dark-neutral-300 border-primary-light hover:bg-primary-light-hover hover:border-primary-light-hover",
  dark: "bg-dark-neutral-100 text-white border-dark-neutral-100 hover:bg-dark-neutral-100-hover hover:border-dark-neutral-100-hover",
  darker:
    "bg-dark-neutral-200 text-white border-dark-neutral-200 hover:bg-dark-neutral-200-hover hover:border-dark-neutral-200-hover",
  darkest:
    "bg-dark-neutral-300 text-white border-dark-neutral-300 hover:bg-dark-neutral-300-hover hover:border-dark-neutral-300-hover",
  "mid-100":
    "bg-mid-neutral-100 text-white border-mid-neutral-100 hover:bg-mid-neutral-100-hover hover:border-mid-neutral-100-hover",
  "mid-200":
    "bg-mid-neutral-200 text-white border-mid-neutral-200 hover:bg-mid-neutral-200-hover hover:border-mid-neutral-200-hover",
  "mid-300":
    "bg-mid-neutral-300 text-white border-mid-neutral-300 hover:bg-mid-neutral-300-hover hover:border-mid-neutral-300-hover",
  light:
    "bg-mid-neutral-300 text-white border-mid-neutral-300 hover:bg-mid-neutral-300-hover hover:border-mid-neutral-300-hover",
  lighter:
    "bg-mid-neutral-200 text-white border-mid-neutral-200 hover:bg-mid-neutral-200-hover hover:border-mid-neutral-200-hover",
  lightest:
    "bg-mid-neutral-100 text-white border-mid-neutral-100 hover:bg-mid-neutral-100-hover hover:border-mid-neutral-100-hover",
  secondary:
    "bg-secondary text-white border-secondary hover:bg-secondary-hover hover:border-secondary-hover",
  transparent: "bg-transparent text-white",
  error:
    "bg-error text-white border-error hover:bg-error-hover hover:border-error-hover",
  success:
    "bg-success text-white border-success hover:bg-success-hover hover:border-success-hover",
  warning:
    "bg-warning text-white border-warning hover:bg-warning-hover hover:border-warning-hover",
  info: "bg-info text-white border-info hover:bg-info-hover hover:border-info-hover",
};

const sizes: SizeProps = {
  xs: "text-[0.8rem] leading-[1rem]",
  sm: "text-[0.85rem] leading-[1.3rem]",
  md: "text-[0.9rem] leading-[1.5rem]",
  lg: "text-[0.95rem] leading-[1.7rem]",
};

export { outlinedVariants, variants, sizes };
