import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { ToolTipProps } from "../types/toolTip";
import { positions, variants } from "../config/tootlTip";

const ToolTip = ({
  children,
  title = "",
  variant = "dark",
  position = "bottom-center",
  width = "w-auto",
  cx = "",
}: ToolTipProps) => {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      className="w-full h-full relative cursor-pointer text-white bg-transparent border-none p-0"
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onMouseOut={() => setHover(false)}
    >
      {hover && (
        <div
          className={twMerge(
            classnames(
              "absolute p-2 text-xs z-[9999]",
              variants[variant],
              positions[position],
              width
            ),
            cx
          )}
        >
          {title}
        </div>
      )}
      {children}
    </button>
  );
};

export default ToolTip;
