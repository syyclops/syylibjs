import { IconType } from "react-icons";

type ToastProps = {
  variant?: "error" | "success" | "warning" | "info";
  message: string;
  timeout?: number;
  open: boolean;
  onClose: () => void;
  position?: "static" | "fixed" | "absolute" | "relative" | "sticky";
  placement?: PlacementProps;
};

type VariantsProps = {
  error: string;
  success: string;
  warning: string;
  info: string;
};

type IconProps = {
  error: IconType;
  success: IconType;
  warning: IconType;
  info: IconType;
};

type PlacementProps = {
  horizontal: "left" | "center" | "right";
  vertical: "top" | "bottom";
};

type AlignProps = {
  left: string;
  center: string;
  right: string;
  top: string;
  bottom: string;
};

export { ToastProps, VariantsProps, IconProps, PlacementProps, AlignProps };
