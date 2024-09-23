
import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { LabelList, Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, LegendProps } from "recharts"
import { RadialChartTypes } from "../../types/chartTypes/radialChartTypes";

const RadialChart = ({
  data,
  ref,
  startAngle,
  endAngle,
  innerRadius,
  outerRadius,
  barSize,
  accessibilityLayer,
  barCategoryGap,
  barGap,
  margin,
  maxBarSize,
  radialBarDataKey,
  cornerRadius,
  barBackground,
  labelPosition,
  labelDataKey,
  labelFontSize,
  labelFontWeight,
  labelColor,
  customTooltip,
  tooltipContentStyle,
  tooltipCursor,
  customLegend,
  legendLayout,
  legendVerticalAlign,
  legendWrapperStyle,
  labelEnable = true,
  legendEnable = true,
  tooltipEnable = true,

  cxLayout = "",
}: RadialChartTypes) => {

  return (
    <div
      ref={ref}
      className={twMerge(classnames("w-full h-full bg-[#1C244B] p-2"), cxLayout)}
    >
      { data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
            data={data}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius ? innerRadius : '30%'}
            outerRadius={outerRadius ? outerRadius : '100%'}
            barSize={barSize}
            accessibilityLayer={accessibilityLayer}
            barCategoryGap={barCategoryGap}
            barGap={barGap}
            margin={margin}
            maxBarSize={maxBarSize}
          >
            <RadialBar dataKey={radialBarDataKey} background={barBackground} cornerRadius={cornerRadius}>
              {labelEnable && (
              <LabelList 
                position={labelPosition  ? labelPosition : "insideStart"}
                dataKey={labelDataKey}
                fontSize={labelFontSize ? labelFontSize : 11}
                fill={labelColor ? labelColor : 'white'}
                fontWeight={labelFontWeight}
              />
              )}
            </RadialBar>
            {tooltipEnable && (<Tooltip cursor={tooltipCursor} content={customTooltip} contentStyle={tooltipContentStyle}/>)}
            {legendEnable && (<Legend
              layout={legendLayout}
              verticalAlign={legendVerticalAlign}
              wrapperStyle={legendWrapperStyle}
              content={customLegend}
            />
            )}
          </RadialBarChart>
          </ResponsiveContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#fff] text-[0.875rem] font-medium">No graph data present.</div>
      </div>
      )}
    </div>
  );
};

export default RadialChart;