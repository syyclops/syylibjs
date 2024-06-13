import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ChartTitleProps } from "../../types/charts/charttitle";

const ChartTitle = ({ children, cx = "" }: ChartTitleProps) => {
  return (
    <div className={twMerge(classnames("w-full text-white bg-[#1C244B] p-2"), cx)}>
      {children}
    </div>
  );
};

export default ChartTitle;
