import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ChartTitleType } from "../../types/chartTypes/chartTitleTypes";

const ChartTitle = ({
  children,
  cx = "",
}: ChartTitleType) => {
  return (
    <div
      className={twMerge(classnames("w-full text-white bg-[#1C244B] p-2"), cx)}
    >
      {children}
    </div>
  );
};

export default ChartTitle;