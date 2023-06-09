import React from "react";
import { TBodyProps } from "../../types/table/tbody";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const TableBody = ({ children, onClick, cx = "" }: TBodyProps) => {
  return (
    <tbody
      className={twMerge(
        classnames("bg-dark-neutral-100", "divide-y divide-[#00000050]"),
        cx
      )}
      onClick={() => onClick && onClick()}
    >
      {children}
    </tbody>
  );
};

export default TableBody;
