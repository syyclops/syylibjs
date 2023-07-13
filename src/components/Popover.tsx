import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { ToolTipProps } from "../types/toolTip";
import { positions, variants } from "../config/tootlTip";

const Popover = ({
  children,
  content = "",
  variant = "dark",
  position = "bottom-left",
  width = "w-auto",
  cx = "",
  open = false,
  rounded = "rounded-lg",
}: Omit<ToolTipProps, "title"> & {
  content: JSX.Element | string;
  open: boolean;
  rounded?: string;
}) => {
  return (
    <div className="w-fit relative text-white bg-transparent border-none">
      {open && (
        <div
          className={twMerge(
            classnames(
              "absolute p-2 text-xs z-[9999]",
              variants[variant],
              positions[position],
              width,
              rounded,
              "mt-2"
            ),
            "before:border-none",

            cx
          )}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

export default Popover;
