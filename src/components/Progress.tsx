// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { ProgressProps } from "../types/progress";
import { variants } from "../config";
import { barSizes, circleStroke } from "../config/progress";

const renderBar = ({
  percent = 0,
  barSize = "sm",
  variant = "primary",
  completedBg = "",
  remainingBg = "",
  fg = "",
  showPercent = true,
}: ProgressProps) => {
  return (
    <div
      className={twMerge(
        classnames(
          barSizes[barSize],
          "w-full bg-mid-neutral-300 rounded-full overflow-hidden"
        ),
        remainingBg
      )}
    >
      <div
        className={twMerge(
          classnames(
            variants[variant],
            "flex justify-center items-center h-full rounded-full text-[60%] font-semibold transition duration-300"
          ),
          completedBg,
          fg
        )}
        style={{
          width: `${percent}%`,
        }}
      >
        {showPercent ? (barSize !== "xs" ? `${percent}%` : "") : ""}
      </div>
    </div>
  );
};

const renderCircle = ({
  circleSize = 100,
  percent = 0,
  variant = "primary",
  completedStroke = "",
  remainingStroke = "",
  fg = "",
  showPercent = true,
}: ProgressProps) => {
  const size = circleSize;
  const stroke = (size * 12) / 100;
  const x = size / 2;
  const rad = size / 2 - stroke / 2;
  const circumference = rad * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: `${size}`,
        height: `${size}`,
      }}
    >
      <svg
        className="rotate-[-90deg]"
        style={{
          width: `${size}`,
          height: `${size}`,
        }}
      >
        <circle
          className={twMerge(classnames("stroke-[#374171]"), remainingStroke)}
          style={{
            fill: "transparent",
            transition: "stroke-dashoffset 1s",
          }}
          cx={`${x}`}
          cy={`${x}`}
          r={`${rad}`}
          strokeWidth={`${stroke}`}
        ></circle>
        <circle
          style={{
            fill: "transparent",
            transition: "stroke-dashoffset 1s",
          }}
          className={twMerge(
            classnames(circleStroke[variant]),
            completedStroke
          )}
          cx={`${x}`}
          cy={`${x}`}
          r={`${rad}`}
          strokeWidth={`${stroke}`}
          strokeLinecap={"round"}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={`${offset}`}
        ></circle>
      </svg>
      {showPercent && (
        <div
          className="absolute font-semibold"
          style={{
            fontSize: `${(size as number) / 5.2}`,
            color: fg ? fg : "white",
          }}
        >
          {percent}%
        </div>
      )}
    </div>
  );
};

const Progress = (props: ProgressProps) => {
  return props.type === "bar" ? renderBar(props) : renderCircle(props);
};

export default Progress;
