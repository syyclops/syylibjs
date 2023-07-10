import classnames from "classnames";
import React from "react";
import { THeaderProps } from "../../types/table/theader";
import { twMerge } from "tailwind-merge";

const TableHeader = ({
  sticky = false,
  children,
  onClick,
  cx = "",
}: THeaderProps) => {
  return (
    <thead
      className={twMerge(
        classnames(
          "bg-dark-neutral-200",
          sticky ? "sticky -top-[0.01rem]" : ""
        ),
        cx
      )}
      onClick={() => onClick && onClick()}
    >
      {children}
    </thead>
  );
};

export default TableHeader;
