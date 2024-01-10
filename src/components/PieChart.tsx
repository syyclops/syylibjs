// Author - Varun Bardwaj

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
      }}
      className={twMerge(classnames(pieStroke[circle.variant]))}
      cx={`${x}`}
      cy={`${x}`}
      r={`${rad}`}
      strokeWidth={`${stroke}`}
      strokeLinecap={"round"}
      strokeDasharray={`${circumference}`}
      strokeDashoffset={`${offset}`}
      data-testid={`circle-${circle.variant}`}
    ></circle>
  );
};

const PieChart = ({ circleSize = 100, circles = [] }: PieChartProps) => {
  const size = circleSize;
  const stroke = (size * 12) / 100;

  return (
    <div
      className="relative flex justify-center items-center"
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
        data-testid="circle-svg"
      >
        {circles.map((circle: CircleProps, i: number) => (
          <RenderProgress key={i} circle={circle} size={size} stroke={stroke} />
        ))}
      </svg>
    </div>
  );
};

export default PieChart;
