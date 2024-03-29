// Author - Varun Bardwaj

import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";
import { SelectProps } from "../../types/select";
import { variants } from "../../config";

const Select = ({
  title = "",
  children,
  variant = "primary",
  width = "w-[8rem]",
  open = false,
  onAction,
  onClickAway,
  cxLayout,
  cxSelect,
}: SelectProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function handleClickAway(event: MouseEvent) {
      if (ref.current) {
        if (
          !ref.current.contains(event.target as Node) &&
          open &&
          onClickAway
        ) {
          onClickAway();
        }
      }
    }

    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, open, onClickAway]);

  return (
    <div
      className={twMerge(
        classnames(
          "relative",
          width,
          variants[variant],
          open ? "rounded-t-lg" : "rounded-lg",
          "text-white",
          "text-sm"
        ),
        cxLayout
      )}
      ref={ref}
      data-testid="select"
    >
      <button
        role="select"
        className={twMerge(
          classnames(
            "bg-inherit",
            "relative",
            "flex",
            "justify-between",
            "items-center",
            "text-left",
            "transition duration-300",
            "border-[#ffffff00]",
            "font-semibold",
            "cursor-pointer",
            "w-full",
            "h-full",
            "px-3",
            "py-2",
            "rounded-lg"
          ),
          cxSelect
        )}
        onClick={() => onAction()}
      >
        <div className="w-[90%] mr-2 line-clamp-1" title="Select">
          {title}
        </div>
        <div
          className={classnames(
            "text-xs",
            "transition duration-75",
            open ? "-rotate-90" : "rotate-90"
          )}
        >
          <FaChevronRight />
        </div>
      </button>
      {open && (
        <div
          className={twMerge(
            classnames(
              "absolute",
              "z-[9999]",
              "left-0",
              "max-h-[18.75rem]",
              "overflow-y-auto",
              "w-full",
              "rounded-b-lg",
              "bg-inherit"
            ),
            cxLayout
          )}
          data-testid="select-popup"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Select;
