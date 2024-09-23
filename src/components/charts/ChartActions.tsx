import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ChartActionType } from "../../types/chartTypes/chartActionsTypes";

const ChartActions = ({
  children,
  cx = "",
}: ChartActionType) => {
  return (
    <div
      className={twMerge(
        classnames("w-full flex flex-wrap bg-[#1C244B] p-2"),
        cx
      )}
    >
      {children}
    </div>
  );
};

export default ChartActions;