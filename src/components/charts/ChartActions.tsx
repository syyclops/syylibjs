import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ChartActionProps } from "../../types/charts/chartaction";

const ChartActions = ({ children, cx = "" }: ChartActionProps) => {
  return (
    <div className={twMerge(classnames("w-full flex flex-wrap bg-[#1C244B] p-2"), cx)}>
      {children}
    </div>
  );
};

export default ChartActions;
