import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { ActionProps } from "../types/action";
import { UxAction } from "..";
import { DropdownProps } from "../types/dropdown";
import { variants } from "../config";

const Dropdown = ({
  type,
  children,
  callback,
  options = [],
  variant = "primary",
  leftIcon,
  rightIcon,
  size = "sm",
  width = "w-[8rem]",
  position = "left",
  rounded = false,
}: Omit<
  ActionProps,
  | "clickable"
  | "loading"
  | "loadingIcon"
  | "animate"
  | "onAction"
  | "cx"
  | "variant"
> &
  DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <UxAction
      type={type}
      onAction={() => setOpen(!open)}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      rounded={rounded}
      cx="relative hover:opacity-100"
    >
      <>
        {children}
        {open && (
          <div
            className={classnames(
              "absolute",
              "z-[9999]",
              "max-h-[150px]",
              "overflow-y-auto",
              "rounded-lg",
              width,
              position === "left" ? "left-0" : "right-0",
              type !== "icon" ? "top-[2.2rem]" : "top-[2.05rem]"
            )}
          >
            {options.map((option: any, i: number) => {
              return (
                <div
                  key={i}
                  tabIndex={0}
                  role="option"
                  className={twMerge(
                    classnames(
                      "w-full",
                      "px-2 py-2",
                      "text-left",
                      "transition duration-500",
                      "border-l-4 border-l-[#00000000]",
                      "hover:border-l-4 hover:border-l-[#00000080]",
                      "cursor-pointer",
                      "text-sm",
                      "font-semibold",
                      variants[variant]
                    )
                  )}
                  onClick={() => {
                    callback(option);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      callback(option);
                    }
                  }}
                  style={{
                    borderLeft: "4px solid #00000000",
                  }}
                  title={option.title}
                >
                  <div className="line-clamp-1"> {option.label}</div>
                </div>
              );
            })}
          </div>
        )}
      </>
    </UxAction>
  );
};

export default Dropdown;
