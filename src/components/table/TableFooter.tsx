import React from "react";
import { TFooterProps } from "../../types/table/tfooter";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const TableFooter = ({ children, cx = "" }: TFooterProps) => {
  return (
    <tfoot
      className={twMerge(
        classnames(
          "bg-dark-neutral-200",
        ),
        cx
      )}
    >
      {children}
    </tfoot>
  );
};

export default TableFooter;
