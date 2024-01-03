// Author - Varun Bardwaj

import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TabProps } from "../../types/tabs/tab";

const Tab = ({ index, title, onAction, selected, cx = "" }: TabProps) => {
  return (
    <div
      className={twMerge(
        classNames(
          "flex justify-center items-center",
          "w-fit h-full",
          selected ? "bg-mid-neutral-200" : "",
          selected ? "" : "hover:bg-mid-neutral-200/[0.2] hover:rounded-lg",
          "text-light-neutral-100",
          "px-3 py-3",
          selected ? "rounded-lg" : "",
          "text-xs",
          "font-bold",
          "cursor-pointer"
        ),
        cx
      )}
      onClick={() => {
        onAction(index);
      }}
      data-testid={`tab-${index}`}
    >
      {title}
    </div>
  );
};

export default Tab;
