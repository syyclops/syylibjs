import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ChartContentType } from "../../types/chartTypes/chartContentTypes";

const ChartContent = ({
  children,
  cx = "",
}: ChartContentType) => {
  return (
    <div
      className={twMerge(
        classnames("w-full h-full bg-[#1C244B] p-2"),
        cx
      )}
    >
      {children}
    </div>
  );
};

export default ChartContent;