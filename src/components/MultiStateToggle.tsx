import React, { useState } from "react";
import classNames from "classnames";
import { MultiStateToggleProps } from "../types/multiStateToggle";

const MultiStateToggle = ({
  state,
  onAction,
  size = 'lg',
  colors = {low:'#099A45', high:'#DC9100', critical:'#D22D48'}
}: MultiStateToggleProps) => {
  
  const getBackgroundColor = () => {
    switch (state) {
      case 'low':
        return colors.low;
      case 'high':
        return colors.high;
      case 'critical':
      default:
        return colors.critical;
    }
  };

  const width = size === 'xs' ? 25 : size === 'sm' ? 35 : size === 'lg' ? 45 : size === 'xl' ? 55 : 65;
  const height = size === 'xs' ? 15 : size === 'sm' ? 18 : size === 'lg' ? 22 : size === 'xl' ? 26 : 30; 
  const switchWidth = `${width}px`;
  const switchHeight = `${height}px`;
  const toggleSize = `${height - 5}px`;

  const getTranslateValue = () => {
    switch (state) {
      case 'low':
        return width - height; // Right position
      case 'high':
        return (width - height) / 2; // Center position
      case 'critical':
      default:
        return 0; // Left position should be 0 (no translation)
    }
  };

  return (
    <div
      className="flex items-center rounded-full cursor-pointer bg-white p-[2.5px]"
      onClick={onAction}
      style={{
        width: switchWidth,
        height: switchHeight,
      }}
    >
      <div
        className="rounded-full shadow-md"
        style={{
          backgroundColor: getBackgroundColor(),
          width: toggleSize,
          height: toggleSize,
          transform: `translateX(${getTranslateValue()}px)`,
          transition: 'transform 200ms ease-in-out'
        }}
      />
    </div>
  );
};

export default MultiStateToggle;