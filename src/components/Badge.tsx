// Author - Varun Bardwaj

import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { sizes, variants } from "../config/badge";
import { BadgeProps } from "../types/badge";

const Badge = ({
  text,
  variant = "primary",
  bg = "",
  fg = "",
  rounded,
  size = "sm",
}: BadgeProps) => {
  return (
    <div
      className={twMerge(
        classNames(
          variants[variant],
          rounded ? "rounded-full" : "rounded-sm",
          size ? sizes[size] : "text-xs",
          "py-1 px-2 text-center font-semibold w-fit"
        ),
        bg,
        fg
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
