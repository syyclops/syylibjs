// Author - Varun Bardwaj

import React from "react";
import classnames from "classnames";
import { alignment, elements } from "../config/title";
import { TitleProps } from "../types/title";
import { twMerge } from "tailwind-merge";

const Title = ({ element, text, align, color = "", cx = "" }: TitleProps) => {
  return (
    <div
      role="heading"
      className={twMerge(
        classnames(elements[element], align ? alignment[align] : "", color),
        "line-clamp-1",
        cx
      )}
      title={text}
    >
      {text}
    </div>
  );
};

export default Title;
