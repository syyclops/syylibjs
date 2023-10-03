// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { ActionProps } from "../../types/action";
import Action from "../../components/Action";
import { DropdownProps } from "../../types/dropdown";
import { variants } from "../../config";

const Dropdown = ({
  type,
  title,
  open = false,
  children,
  onAction,
  variant = "primary",
  leftIcon,
  rightIcon,
  size = "sm",
  width = "w-[8rem]",
  position = "left",
  rounded = false,
  cxLayout = "",
  cxAction = "",
  onClickAway,
}: Omit<
  ActionProps,
  | "clickable"
  | "loading"
  | "loadingIcon"
  | "animate"
  | "onAction"
  | "variant"
  | "children"
  | "cx"
> &
  DropdownProps) => {
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
          variants[variant],
          rounded ? "rounded-full" : "rounded-md"
        ),
        cxLayout
      )}
      ref={ref}
    >
      <Action
        type={type}
        onAction={() => onAction()}
        size={size}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rounded={rounded}
        cx={twMerge(
          classnames("relative hover:opacity-100 bg-inherit w-full h-full"),
          cxAction
        )}
      >
        {title}
      </Action>
      {open && (
        <div
          className={classnames(
            "absolute",
            "z-[9999]",
            "max-h-[300px]",
            "overflow-y-auto",
            "rounded-md",
            width,
            position === "left" ? "left-0" : "right-0",
            "mt-[5px]",
            "bg-inherit"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
