import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { pieStroke } from "../config/pieChart";
import { CircleProps, PieChartProps } from "../types/pieChart";

const RenderProgress = ({
  circle,
  size,
  stroke,
}: {
  circle: CircleProps;
  size: number;
  stroke: number;
}) => {
  const x = size / 2;
  const rad = size / 2 - stroke / 2;
  const circumference = rad * 2 * Math.PI;
  const offset = circumference - (circle.percentage / 100) * circumference;

  return (
    <circle
      style={{
        fill: "transparent",
        transition: "stroke-dashoffset 1s",
        // filter: "drop-shadow(0px 0px 5px #00000060)",
      }}
      className={twMerge(classnames(pieStroke[circle.variant]))}
      cx={`${x}rem`}
      cy={`${x}rem`}
      r={`${rad}rem`}
      strokeWidth={`${stroke}rem`}
      strokeLinecap={"round"}
      strokeDasharray={`${circumference}rem`}
      strokeDashoffset={`${offset}rem`}
    ></circle>
  );
};

const PieChart = ({ circleSize = 3, circles = [] }: PieChartProps) => {
  const size = circleSize;
  const stroke = (size * 12) / 100;

  return (
    <div
      className="relative flex justify-center items-center"
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      <svg
        className="rotate-[-90deg]"
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      >
        {circles.map((circle: CircleProps) => (
          <RenderProgress circle={circle} size={size} stroke={stroke} />
        ))}
      </svg>
    </div>
  );
};

export default PieChart;
