// Author - Varun Bardwaj

import React from "react";
import { CollapseProps } from "../types/collapse";
import { variants } from "../config";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";

const Collapse = ({
  content,
  variant = "dark",
  isOpen = false,
  cx = "",
}: CollapseProps) => {
  return (
    <div
      className={twMerge(
        classnames(
          "overflow-hidden",
          variants[variant],
          isOpen ? "h-full p-2" : "h-0"
        ),
        cx
      )}
    >
      {content}
    </div>
  );
};

export default Collapse;
