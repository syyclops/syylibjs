import classnames from "classnames";
import React from "react";
import { THeadProps } from "../../types/table/thead";
import { twMerge } from "tailwind-merge";

const TableHead = ({
  children,
  divideX = true,
  onClick,
  cx = "",
  colspan = 1,
}: THeadProps) => {
  return (
    <th
      className={twMerge(
        classnames(
          "px-6 py-3",
          "text-left",
          divideX ? "border border-[#00000050]" : "",
          "text-sm",
          "font-medium",
          "tracking-wider"
        ),
        cx
      )}
      colSpan={colspan}
      onClick={() => onClick && onClick()}
      scope="col"
    >
      {children}
    </th>
  );
};

export default TableHead;
