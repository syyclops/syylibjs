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
}: ToggleProps) => {
  const [slide, setSlide] = useState(false);

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
        setSlide(!slide);
        onAction(!slide);
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
          !slide ? "translate-x-[1%]" : "translate-x-[90%]",
          sizes[size].switch
        )}
      />
    </div>
  );
};

export default Toggle;
