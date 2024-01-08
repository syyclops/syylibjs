// Author - Varun Bardwaj

import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { ToolTipProps } from "../types/toolTip";
import { positions, variants } from "../config/tootlTip";

const Popover = ({
  children,
  content = "",
  variant = "dark",
  position = "bottom-left",
  width = "w-auto",
  cx = "",
  open = false,
  rounded = "rounded-lg",
  onClickAway,
}: Omit<ToolTipProps, "title"> & {
  content: JSX.Element | string;
  open: boolean;
  rounded?: string;
  onClickAway: () => void;
}) => {
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
      className="w-fit relative text-white bg-transparent border-none"
      ref={ref}
      data-testid="popover"
    >
      {open && (
        <div
          className={twMerge(
            classnames(
              "absolute p-2 text-xs z-[9999]",
              variants[variant],
              positions[position],
              width,
              rounded,
              "mt-2"
            ),
            "before:border-none",
            cx
          )}
          data-testid="content"
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

export default Popover;
