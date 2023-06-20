import { IconType } from "react-icons";

type InputProps = {
  type: "text" | "password" | "email";
  variant?: "primary" | "secondary" | "dark" | "light";
  value: string;
  onType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
