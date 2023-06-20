// Author - Varun Bardwaj

import classNames from "classnames";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { sizes, variants } from "../config/checkbox";
import { twMerge } from "tailwind-merge";
import { CheckboxProps } from "../types/checkbox";

const Checkbox = ({
  variant = "primary",
  checked = false,
  size = "sm",
  onAction,
  rounded = false,
  cx = "",
}: CheckboxProps) => {
  return (
    <button
      role="checkbox"
      className={twMerge(
        classNames(
          "relative",
          variants[variant],
          sizes[size],
          rounded ? "rounded-full" : "rounded-sm",
          "cursor-pointer",
          "border-none",
          "p-0 m-0"
        ),
        cx
      )}
      onClick={onAction}
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <BsCheck color={checked ? "" : "#00000000"} />
      </div>
    </button>
  );
};

export default Checkbox;
