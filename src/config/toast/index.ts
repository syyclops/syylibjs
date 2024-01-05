import { FiCheckCircle, FiAlertCircle, FiInfo } from "react-icons/fi";
import { AiOutlineWarning } from "react-icons/ai";
import { AlignProps, IconProps } from "../../types/toast";
import { variants } from "..";

const icons: IconProps = {
  error: FiAlertCircle,
  success: FiCheckCircle,
  warning: AiOutlineWarning,
  info: FiInfo,
  dark: FiInfo,
  darker: FiInfo,
  darkest: FiInfo,
  light: FiInfo,
  lighter: FiInfo,
  lightest: FiInfo,
};

const placements: AlignProps = {
  left: "left-10",
  center: "left-1/2 -translate-x-1/2",
  right: "right-10",
  top: "top-0 mt-5",
  bottom: "bottom-0 mb-5",
};

export { variants, icons, placements };
