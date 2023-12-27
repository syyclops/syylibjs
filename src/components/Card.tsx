// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { CardProps } from "../types/card";

const Card = ({
  children,
  width = "w-full",
  height = "h-auto",
  cx = "",
}: CardProps) => {
  return (
    <div
      className={twMerge(
        classnames(
          "bg-dark-neutral-100",
          "text-light-neutral-300",
          "border border-mid-neutral-300",
          "rounded-xl",
          width,
          height
        ),
        cx
      )}
      style={{
        border: "1px solid #374171",
      }}
      data-testid="card"
    >
      {children}
    </div>
  );
};

export default Card;
