// Author - Varun Bardwaj

import { twMerge } from "tailwind-merge";
import React from "react";
import { BubbleProps } from "../types/bubble";
import classNames from "classnames";
import { variants } from "../config";
import { sizes } from "../config/bubble";

const Bubble = ({
  text = "",
  onAction,
  variant = "primary",
  size = "sm",
  tooltip = false,
  bg = "",
  fg = "",
  animate = false,
}: BubbleProps) => {
  return (
    <div
      tabIndex={onAction ? 0 : -1}
      role={onAction ? "button" : "none"}
      className={twMerge(
        classNames(
          sizes[size],
          variants[variant],
          "flex justify-center items-center rounded-full font-semibold"
        ),
        bg,
        fg,
        onAction ? "cursor-pointer" : "",
        animate ? "hover:-translate-y-[0.05rem] transition duration-100" : ""
      )}
      onClick={onAction && onAction}
      title={tooltip ? text : undefined}
      data-testid="bubble"
    >
      {text}
    </div>
  );
};

export default Bubble;
