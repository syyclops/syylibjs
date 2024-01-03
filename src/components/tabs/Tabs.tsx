// Author - Varun Bardwaj

import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TabsProps } from "../../types/tabs/tabs";

const Tabs = ({
  children,
  justifyBetween,
  wrap,
  cx = "",
}: TabsProps) => {
  return (
    <div
      className={twMerge(
        classNames(
          "flex w-fit min-h-12",
          justifyBetween ? "justify-between" : "justify-start",
          "items-center",
          wrap ? "flex-wrap" : "overflow-x-auto",
          "px-1 py-1",
          "rounded-xl",
          "border border-mid-neutral-200"
        ),
        cx
      )}
      style={{
        border: "1px solid #45518D",
      }}
      data-testid="tabs"
    >
      {children}
    </div>
  );
};

export default Tabs;
