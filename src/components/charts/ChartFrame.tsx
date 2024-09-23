import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { ChartFrameType } from "../../types/chartTypes/chartFrameTypes";

const ChartFrame = ({
  children,
  cx = "",
}: ChartFrameType) => {
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

export default ChartFrame;