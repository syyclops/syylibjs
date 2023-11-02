// Author - Varun Bardwaj

import classnames from "classnames";
import React from "react";
import { TableProps } from "../../types/table";
import { twMerge } from "tailwind-merge";

const Table = ({ children, cx = "" }: TableProps) => {
  return (
    <table
      className={twMerge(
        classnames(
          "min-w-full",
          "text-light-neutral-100",
          "bg-dark-neutral-300",
          "table-fixed",
          "relative",
          "m-0"
        ),
        cx
      )}
    >
      {children}
    </table>
  );
};

export default Table;
