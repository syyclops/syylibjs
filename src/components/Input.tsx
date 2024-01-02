// Author - Manish

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { InputProps } from "../types/input";
import { variants } from "../config/input";
import { IconType } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

const Input = ({
  variant = "light",
  value,
  type,
  placeholder,
  width = "w-[17rem]",
  height = "h-[2.625rem]",
  rounded,
  leftIcon,
  rightIcon,
  onClick,
  onKeyDown,
  onFocus,
  onBlur,
  onType,
  cxLayout = "",
  cxInput = "",
}: InputProps) => {
  const LeftIcon: IconType = leftIcon!;
  const RightIcon: IconType = rightIcon!;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={twMerge(
        classNames(
          variants[variant],
          rounded ? "rounded-full" : "rounded-lg",
          width,
          height,
          "flex items-center justify-between overflow-hidden cursor-text",
          "text-sm",
          "text-light-neutral-300"
        ),
        cxLayout
      )}
      onClick={() => {
        inputRef.current!.focus();
        onClick && onClick();
      }}
      data-testid="input-holder"
    >
      {leftIcon && (
        <div
          data-testid="left-icon"
          className="h-full flex items-center pl-3 pb-[3px]"
        >
          <LeftIcon />
        </div>
      )}
      <input
        ref={inputRef}
        spellCheck={false}
        value={value}
        type={type}
        onKeyDown={onKeyDown}
        onChange={onType}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder ? placeholder : "Start typing..."}
        className={twMerge(
          classNames(
            variants[variant],
            rounded ? "rounded-full" : "rounded-lg",
            "h-full w-full font-normal pl-3 not-italic leading-[18px] border-none outline-none pb-[3px]"
          ),
          cxLayout,
          cxInput
        )}
        data-testid="input"
      />
      {(rightIcon || value !== "") && (
        <div
          data-testid="right-icon"
          className={`h-full flex items-center pl-2 pr-3 pb-[3px] ${
            value !== "" ? "cursor-pointer" : ""
          }`}
          onClick={() => value !== "" && onType({ target: { value: "" } })}
        >
          {value !== "" ? <AiOutlineClose /> : rightIcon && <RightIcon />}
        </div>
      )}
    </div>
  );
};

export default Input;
