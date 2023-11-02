// Author - Varun Bardwaj

import React from "react";
import { TRowProps } from "../../types/table/trow";
import classnames from "classnames";

const TableRow = ({ children, onClick, cx = "" }: TRowProps) => {
  return (
    <tr className={classnames(cx)} onClick={() => onClick && onClick()}>
      {children}
    </tr>
  );
};

export default TableRow;
