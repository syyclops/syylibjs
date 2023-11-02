// Author - Varun Bardwaj

import classNames from "classnames";
import React from "react";
import { TDefProps } from "../../types/table/tdef";
import { twMerge } from "tailwind-merge";

const TableDef = ({
  children,
  divideX = true,
  onClick,
  colSpan = 1,
  cx = "",
}: TDefProps) => {
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
      colSpan={colSpan}
      onClick={() => onClick && onClick()}
    >
      {children}
    </td>
  );
};

export default TableDef;
