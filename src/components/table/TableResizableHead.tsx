import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TableResizableHeadProps } from "../../types/table/tResizableHead";

const TableResizableHead = ({
  cx = "",
  id,
  children,
  divideX,
  onClick,
  resizerCX,
  colspan,
}: TableResizableHeadProps) => {
  const handleDrag = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    columnId: any
  ) => {
    const table = (e.target as HTMLElement).closest("table");
    if (!table) return;
    const column = table.querySelector(`th#${columnId}`) as HTMLElement;
    if (!column) return;

    const startX = e.pageX;
    const startWidth = column.offsetWidth;

    document.onmousemove = (e) => {
      const diffX = e.pageX - startX;
      const newWidth = startWidth + diffX;
      column.style.width = `${newWidth}px`;

      const cells = table.querySelectorAll(`td[data-column="${columnId}"]`);
      cells.forEach((cell) => {
        (cell as HTMLElement).style.width = `${newWidth}px`;
      });
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  return (
    <th
      id={`column-${id}`}
      className={twMerge(
        classnames(
          "relative",
          "px-6 py-3",
          "text-left",
          divideX === true ? "border border-[#00000050]" : "",
          "text-sm",
          "font-medium",
          "tracking-wider",
          "!min-w-0",
          "select-none"
        ),
        cx
      )}
      colSpan={colspan}
      onClick={() => onClick && onClick()}
      scope="col"
      data-testid="head"
    >
      <div
        className={twMerge(
          classnames(
            "absolute right-0 bottom-0 w-[4px] h-full bg-black/20 hover:bg-black/50 cursor-col-resize rounded-full transition-colors duration-300"
          ),
          resizerCX
        )}
        onMouseDown={(e) => handleDrag(e, `column-${id}`)}
      ></div>
      {children}
    </th>
  );
};

export default TableResizableHead;
