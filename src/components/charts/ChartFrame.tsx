import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { ChartFrameProps } from "../../types/charts/chartframe";

const LayoutFrame = ({ children, cx = "" }: ChartFrameProps) => {
  return (
    <>
      <div
        className={twMerge(
          classNames(
            "w-full h-full flex flex-col items-center justify-start p-4 bg-[#1C244B]"
          ),
          cx
        )}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutFrame;
