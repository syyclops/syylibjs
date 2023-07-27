import { IconType } from "react-icons";

type ActionProps = {
  type: "button" | "icon";
  children: string | JSX.Element;
  onAction: () => void;
  variant?:
    | "primary"
    | "transparent"
    | "secondary"
    | "error"
    | "success"
    | "warning"
    | "info"
    | "dark"
    | "darker"
    | "darkest"
    | "mid-100"
    | "mid-200"
    | "mid-300"
    | "light"
    | "lighter"
    | "lightest";
  size?: "xs" | "sm" | "md" | "lg";
  iconSize?: number;
  leftIcon?: IconType;
  rightIcon?: IconType;
  clickable?: boolean;
  loading?: boolean;
  loadingIcon?: IconType;
  animate?: boolean;
  rounded?: boolean;
  cx?: string;
};

export { ActionProps };
