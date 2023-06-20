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
  cx = "",
}: Omit<
  ActionProps,
  | "clickable"
  | "loading"
  | "loadingIcon"
  | "animate"
  | "onAction"
  | "variant"
  | "children"
> &
  DropdownProps) => {
  return (
    <div
      className={twMerge(
        classnames(
          "relative",
          variants[variant],
          rounded ? "rounded-full" : "rounded-md"
        ),
        cx
      )}
    >
      <Action
        type={type}
        onAction={() => onAction()}
        size={size}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rounded={rounded}
        cx={classnames("relative hover:opacity-100 bg-inherit w-full h-full")}
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
