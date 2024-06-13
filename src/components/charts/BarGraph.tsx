import { ResponsiveBar } from "@nivo/bar";
import classnames from "classnames";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Action from "../Action";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BarGraphProps } from "../../types/charts/bargraph";

const BarGraph = ({
  data,
  keys,
  indexBy,
  groupedMode,
  colors,
  borderRadius,
  barChartMargin,
  barInnerPadding,
  barPadding,
  enableGrids,
  ref,
  // graphWidth,
  axesLeftTickRotate,
  axesBottomTickRotate,
  itemsPerPage = 8,
  cx = "",
}: BarGraphProps) => {

  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const visibleData = data.slice(scrollIndex, scrollIndex + itemsPerPage);

  return (
    <div
      ref={ref}
      className={twMerge(classnames("w-full h-full bg-[#1C244B] relative"), cx)}
    >
      {/* <div className={twMerge(graphWidth ? graphWidth : "w-full","h-full overflow-y-hidden")}> */}
      <div className="w-full h-full overflow-hidden">
        <ResponsiveBar
          data={data.length > itemsPerPage ? visibleData : data}
          keys={keys}
          indexBy={indexBy}
          margin={
            barChartMargin
              ? barChartMargin
              : { top: 40, right: 40, bottom: 40, left: 45 }
          }
          padding={barPadding ? barPadding : 0.1}
          innerPadding={barInnerPadding ? barInnerPadding : 2}
          enableGridX={enableGrids ? enableGrids : false}
          enableGridY={enableGrids ? enableGrids : false}
          borderRadius={borderRadius ? borderRadius : 3}
          groupMode={groupedMode ? groupedMode : "grouped"}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={
            colors
              ? colors
              : [
                  "#F9E858",
                  "#FF73B6",
                  "#4ECB83",
                  "#FF9900",
                  "#003A7D",
                  "#D83034",
                  "#FF9D3A",
                  "#770099",
                  "#008DFF",
                  "#FFCC00",
                ]
          }
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          tooltip={({ id, value, color, indexValue }) => (
            <div className="bg-[#45518D] flex flex-col rounded-xl overflow-hidden p-3 border border-[#A9A9B8] relative">
              <div className="text-[0.875rem] text-white font-normal">{id}</div>
              <div className="text-[0.875rem] text-[#A9A9B8] font-normal">
                {indexValue}
              </div>
              <div className="text-[0.875rem] text-white font-bold">
                {value}
              </div>
            </div>
          )}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: axesBottomTickRotate ? axesBottomTickRotate : 0,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: axesLeftTickRotate ? axesLeftTickRotate : 0,
            truncateTickAt: 0,
          }}
          label={(d) => ""}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "top-left",
              direction: "row",
              justify: false,
              translateX: 20,
              translateY: -55,
              itemsSpacing: 10,
              itemWidth: 140,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              itemBackground: "#45518D",
              itemTextColor: "white",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          layers={["grid", "axes", "bars", "markers", "legends"]}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#ffffff",
                },
              },
              legend: {
                text: {
                  fill: "#ffffff",
                },
              },
            },
          }}
          ariaLabel="bar chart"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + ` in ${indexBy}: ` + e.indexValue
          }
        />
        {data.length > itemsPerPage && (
          <>
            <Action
              type="icon"
              onAction={() => {
                setScrollIndex(
                  Math.min(
                    data.length - itemsPerPage,
                    scrollIndex + itemsPerPage
                  )
                );
              }}
              size="lg"
              clickable={
                scrollIndex + itemsPerPage >= data.length ? false : true
              }
              cx="absolute z-[100] bottom-0 right-0 text-white px-0 bg-transparent hover:bg-primary"
            >
              <IoIosArrowForward style={{ fontSize: "1.4rem" }} />
            </Action>
            <Action
              type="icon"
              onAction={() => {
                setScrollIndex(Math.max(0, scrollIndex - itemsPerPage));
              }}
              size="lg"
              clickable={scrollIndex === 0 ? false : true}
              cx="absolute z-[100] bottom-0 left-0 text-white px-0 bg-transparent hover:bg-primary"
            >
              <IoIosArrowBack style={{ fontSize: "1.4rem" }} />
            </Action>
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default BarGraph;
