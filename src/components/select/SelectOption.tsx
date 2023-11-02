// Author - Varun Bardwaj

import React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { SelectOptionProps } from "../../types/select";

const SelectOption = ({ children, onSelect, name, cx }: SelectOptionProps) => {
  return (
    <button
      role="option"
      onClick={() => {
        onSelect && onSelect(name);
      }}
      className={twMerge(
        classNames(
          "bg-inherit",
          "w-full",
          "px-3",
          "py-2",
          "text-sm",
          "text-left",
          "border-[#ffffff00]",
          "cursor-pointer"
        ),
        cx
      )}
    >
      {children}
    </button>
  );
};

export default SelectOption;
