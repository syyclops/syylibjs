import { VariantsProps } from "../../types";
import { PositionProps } from "../../types/toolTip";

const variants: VariantsProps = {
  primary: "bg-primary text-light-neutral-100 border-primary",
  secondary: "bg-secondary text-light-neutral-100 border-secondary",
  dark: "bg-dark-neutral-100 text-light-neutral-100 border-dark-neutral-100",
  darker: "bg-dark-neutral-200 text-light-neutral-100 border-dark-neutral-200",
  darkest: "bg-dark-neutral-300 text-light-neutral-100 border-dark-neutral-300",
  light: "bg-light-neutral-300 text-dark-neutral-200 border-light-neutral-300",
  lighter:
    "bg-light-neutral-200 text-dark-neutral-200 border-light-neutral-200",
  lightest:
    "bg-light-neutral-100 text-dark-neutral-200 border-light-neutral-100",
};

const positions: PositionProps = {
  "top-center":
    "bottom-[100%] mb-3 left-[50%] translate-x-[-50%] before:content-[''] before:absolute before:left-1/2 before:top-[100%] before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-inherit rounded-lg",
  "top-left":
    "bottom-[100%] mb-3 left-0 before:content-[''] before:absolute before:left-0 before:top-[100%] before:-translate-x-0 before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-inherit rounded-t-lg rounded-br-lg",
  "top-right":
    "bottom-[100%] mb-3 right-0 before:content-[''] before:absolute before:right-0 before:top-[100%] before:-translate-x-0 before:border-8 before:border-x-transparent before:border-b-transparent before:border-t-inherit rounded-t-lg rounded-bl-lg",
  "right-center":
    "top-1/2 left-[100%] ml-3 -translate-y-[50%] before:content-[''] before:absolute before:right-[100%] before:top-[50%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-inherit rounded-lg",
  "right-top":
    "top-0 left-[100%] ml-3 -translate-y-0 before:content-[''] before:absolute before:right-[100%] before:top-0 before:-translate-y-0 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-inherit rounded-r-lg rounded-bl-lg",
  "right-bottom":
    "bottom-0 left-[100%] ml-3 -translate-y-0 before:content-[''] before:absolute before:right-[100%] before:bottom-0 before:-translate-y-0 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-inherit rounded-r-lg rounded-tl-lg",
  "left-center":
    "top-1/2 right-[100%] mr-3 translate-y-[50%] -ml-3 -translate-y-[50%] before:content-[''] before:absolute before:left-[100%] before:top-[50%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-inherit rounded-lg",
  "left-top":
    "top-0 right-[100%] mr-3 translate-y-0 -ml-3 -translate-y-0 before:content-[''] before:absolute before:left-[100%] before:top-0 before:-translate-y-0 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-inherit rounded-b-lg rounded-tl-lg",
  "left-bottom":
    "bottom-0 right-[100%] mr-3 translate-y-0 -ml-3 -translate-y-0 before:content-[''] before:absolute before:left-[100%] before:bottom-0 before:-translate-y-0 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-inherit rounded-t-lg rounded-bl-lg",
  "bottom-center":
    "top-[100%] mt-3 left-[50%] -translate-x-[50%] before:content-[''] before:absolute before:left-1/2 before:bottom-[100%] before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-inherit rounded-lg",
  "bottom-left":
    "top-[100%] mt-3 left-0 -translate-x-0 before:content-[''] before:absolute before:left-0 before:bottom-[100%] before:-translate-x-0 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-inherit rounded-b-lg rounded-tr-lg",
  "bottom-right":
    "top-[100%] mt-3 right-0 -translate-x-0 before:content-[''] before:absolute before:right-0 before:bottom-[100%] before:-translate-x-0 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-inherit rounded-b-lg rounded-tl-lg",
};

export { variants, positions };
