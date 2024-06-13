import { ResponsiveLine } from "@nivo/line";
import classnames from "classnames";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LineGraphProps } from "../../types/charts/linegraph";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Action from "../Action";

const LineGraph = ({
  data,
  colors,
  lineChartMargin,
  enableGrids,
  ref,
  // graphWidth,
  axesLeftTickRotate,
  axesBottomTickRotate,
  itemsPerPage = 5,
  cx = "",
}: LineGraphProps) => {

  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const visibleData = data.map((country)=>({
    ...country,
    data: country.data.slice(scrollIndex, scrollIndex + itemsPerPage)
    }))


  return (
    <div
      ref={ref}
      className={twMerge(classnames("w-full h-full bg-[#1C244B] relative"), cx)}
    >
      {/* <div className={twMerge(graphWidth ? graphWidth : "w-full","h-full overflow-y-hidden")}> */}
      <div className="w-full h-full overflow-hidden">
        <ResponsiveLine
          data={data[0].data.length > itemsPerPage ? visibleData : data}
          margin={
            lineChartMargin
              ? lineChartMargin
              : { top: 60, right: 50, bottom: 40, left: 50 }
          }
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
          xScale={{ type: "point" }}
          enableGridX={enableGrids ? enableGrids : false}
          enableGridY={enableGrids ? enableGrids : false}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
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
          pointSize={2}
          pointColor={{ theme: "background" }}
          pointBorderWidth={10}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          tooltip={({ point }) => (
            <div className="bg-[#45518D] flex flex-col rounded-xl overflow-hidden p-3 border border-[#A9A9B8] relative">
              <div className="text-[0.875rem] text-white font-normal">
                {point.serieId}
              </div>
              <div className="text-[0.875rem] text-[#A9A9B8] font-normal">
                {point.data.x}
              </div>
              <div className="text-[0.875rem] text-white font-bold">
                {point.data.y}
              </div>
            </div>
          )}
          theme={{
            grid: {
              line: {
                stroke: "#ffffff",
              },
            },
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
          legends={[
            {
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
        />
      </div>
      {data[0].data.length > itemsPerPage && (
      <>
            <Action
              type="icon"
              onAction={() => {
                setScrollIndex(
                  Math.min(
                    data[0].data.length - itemsPerPage,
                    scrollIndex + itemsPerPage
                  )
                );
              }}
              size="lg"
              clickable={
                scrollIndex + itemsPerPage >= data[0].data.length ? false : true
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
  );
};

export default LineGraph;
