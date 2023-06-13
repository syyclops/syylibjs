import React, { useState } from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";
import { SelectProps } from "../types/select";
import { variants } from "../config";

const Select = ({
  selected = 0,
  options = [],
  variant = "primary",
  callback,
  width = "w-[8rem]",
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [opts] = useState<SelectProps["options"]>([
    { id: 0, label: "Select", value: "Select" },
    ...options,
  ]);
  return (
    <button
      role="select"
      className={twMerge(
        classnames(
          "relative",
          "flex",
          "justify-between",
          "items-center",
          "px-3",
          "py-2",
          "text-white",
          "transition duration-300",
          "text-sm",
          "text-left",
          "border-none",
          "font-semibold",
          "cursor-pointer",
          open ? "rounded-t-lg" : "rounded-lg",
          variants[variant],
          width
        )
      )}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="w-[90%] mr-2 line-clamp-1" title="Select">
        {opts[selected].label}
      </div>
      <div
        className={classnames(
          "text-xs",
          "transition duration-75",
          open ? "rotate-90" : ""
        )}
      >
        <FaChevronRight />
      </div>
      {open && (
        <div
          className={classnames(
            "absolute",
            "z-[9999]",
            "top-[2.2rem]",
            "left-0",
            "w-full",
            "max-h-[150px]",
            "overflow-y-auto",
            open ? "rounded-b-lg" : ""
          )}
        >
          {opts.map((option: any, i: number) => {
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
                    "hover:border-l-4 hover:border-l-[#00000050]",
                    "cursor-pointer",
                    variants[variant]
                  ),
                  selected === option.id
                    ? "border-l-4 border-l-[#00000080] pointer-events-none cursor-default"
                    : "border-l-4 border-l-[#00000000]"
                )}
                onClick={() => {
                  selected !== option.id && callback(option);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && selected !== option.id) {
                    callback(option);
                  }
                }}
                style={{
                  borderLeft:
                    selected === option.id
                      ? "4px solid #00000080"
                      : "4px solid #00000000",
                }}
                title={option.title}
              >
                <div className="line-clamp-1"> {option.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </button>
  );
};

export default Select;
