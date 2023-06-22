// Author - Varun Bardwaj

import React, { useState } from "react";
import classNames from "classnames";
import { ToggleProps } from "../types/toggle";
import { variants } from "../config";
import { sizes } from "../config/toggle";

const Toggle = ({
  variant = "primary",
  size = "sm",
  onAction,
  on = false,
}: ToggleProps) => {
  return (
    <div
      className={classNames(
        "relative",
        "rounded-full",
        "cursor-pointer",
        "flex items-center",
        variants[variant],
        sizes[size].toggle
      )}
      onClick={() => {
        onAction(!on);
      }}
    >
      <div
        className={classNames(
          "absolute",
          "bg-white",
          "rounded-full",
          "m-[0.1rem]",
          "transition",
          "duration-150",
          !on ? "translate-x-[1%]" : "translate-x-[90%]",
          sizes[size].switch
        )}
      />
    </div>
  );
};

export default Toggle;
