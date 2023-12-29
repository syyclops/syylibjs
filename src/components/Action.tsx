// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { ActionProps } from "../types/action";
import { sizes, variants } from "../config/action";
import { IconType } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";

const Action = ({
  type,
  children,
  variant,
  leftIcon,
  rightIcon,
  rounded = false,
  onAction,
  size = "sm",
  clickable = true,
  loading = false,
  loadingIcon,
  animate = false,
  cx = "",
  iconSize,
}: ActionProps) => {
  const LeftIcon: IconType = leftIcon!;
  const RightIcon: IconType = rightIcon!;
  const LoadingIcon = loadingIcon!;

  return (
    <button
      className={twMerge(
        classNames(
          type === "icon"
            ? variant === "transparent"
              ? ""
              : "px-2 py-2 opacity-100 transition duration-150"
            : "px-2.5 py-1.5 transition duration-150",
          variant
            ? variants[variant]
            : type === "icon"
            ? variants["transparent"]
            : variants["primary"],
          sizes[size],
          clickable
            ? "hover:opacity-90 cursor-pointer"
            : "opacity-50 cursor-not-allowed",
          rounded ? "rounded-full" : "rounded-lg",
          "relative w-fit flex justify-center items-center font-semibold border-none"
        ),
        cx
      )}
      onClick={onAction}
      disabled={!clickable}
      data-testid="action"
    >
      <>
        {leftIcon && (
          <LeftIcon data-testid="left-icon" className="mr-2" size={iconSize} />
        )}
        {children}
        {rightIcon && (
          <RightIcon
            data-testid="right-icon"
            className="ml-2"
            size={iconSize}
          />
        )}
        {loading && (
          <div
            className={classNames(
              variant
                ? variants[variant]
                : type === "icon"
                ? variants["transparent"]
                : variants["primary"],
              rounded ? "rounded-full" : "rounded-lg",
              "absolute w-full h-full flex justify-center items-center"
            )}
            data-testid="loader"
          >
            <div
              className={classNames(animate ? "animate-spin" : "")}
              data-testid="spinner"
            >
              {loadingIcon ? (
                <LoadingIcon size={iconSize} />
              ) : (
                <BiLoaderAlt size={iconSize} />
              )}
            </div>
          </div>
        )}
      </>
    </button>
  );
};

export default Action;
