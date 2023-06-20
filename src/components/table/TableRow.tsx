import React from "react";
import { TRowProps } from "../../types/table/trow";
import classnames from "classnames";

const TableRow = ({ children, cx = "" }: TRowProps) => {
  return <tr className={classnames(cx)}>{children}</tr>;
};

export default TableRow;
