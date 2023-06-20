// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { DotProps } from "../types/dot";
import { sizes } from "../config/dot";
import { variants } from "../config";

const Dot = ({ size = "sm", variant = "primary", cx }: DotProps) => {
  return (
    <div
      className={twMerge(
        classnames(sizes[size], variants[variant], "rounded-full"),
        cx
      )}
    />
  );
};

export default Dot;
