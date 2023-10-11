import React from "react";
import { IconType } from "react-icons";

type InputProps = {
  type: "text" | "password" | "email";
  variant?: "primary" | "secondary" | "dark" | "light";
  value: string;
  onType: (
    e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }
  ) => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  height?: string;
  width?: string;
  rounded?: boolean;
  cxLayout?: string;
  cxInput?: string;
};

type VariantsProps = {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
};

export type { InputProps, VariantsProps };
