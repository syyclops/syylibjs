// Author - Varun Bardwaj

import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { sizes, variants } from "../config/badge";
import { BadgeProps } from "../types/badge";

const Badge = ({
  size = "sm",
  variant = "primary",
  text,
  bg = "",
  fg = "",
  rounded,
}: BadgeProps) => {
  return (
    <div
      className={twMerge(
        classNames(
          variants[variant],
          rounded ? "rounded-full" : "rounded-sm",
          sizes[size],
          "py-1 px-2 text-center font-semibold w-fit"
        ),
        bg,
        fg
      )}
      data-testid="badge"
    >
      {text}
    </div>
  );
};

export default Badge;
