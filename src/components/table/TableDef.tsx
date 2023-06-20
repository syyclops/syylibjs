import classNames from "classnames";
import React from "react";
import { TDefProps } from "../../types/table/tdef";
import { twMerge } from "tailwind-merge";

const TableDef = ({ children, divideX = true, cx = "" }: TDefProps) => {
  return (
    <td
      className={twMerge(
        classNames(
          "px-6 py-4",
          "whitespace-nowrap",
          "text-sm",
          divideX ? "border border-[#00000050]" : "border-none"
        ),
        cx
      )}
    >
      {children}
    </td>
  );
};

export default TableDef;
