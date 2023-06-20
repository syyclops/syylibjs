// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { ParagraphProps } from "../types/paragraph";
import { line_clamps } from "../config/paragraph";

const Paragraph = ({ children, clamp, cx = "" }: ParagraphProps) => {
  return (
    <div
      className={twMerge(
        classNames(clamp ? line_clamps[clamp - 1] : "", "text-white"),
        cx
      )}
      title={clamp ? children : undefined}
    >
      {children}
    </div>
  );
};

export default Paragraph;
