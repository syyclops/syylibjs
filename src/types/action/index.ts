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
    | "dark";
  size?: "xs" | "sm" | "md" | "lg";
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
