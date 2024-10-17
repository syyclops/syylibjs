import { Chart, ChartItem, registerables } from "chart.js";
import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import Action from "../Action";
import { IoMdClose } from "react-icons/io";
import { ChartGraphType } from "../../types/chartTypes/chartGraphTypes";

// Register the required components
Chart.register(...registerables);
Chart.register(zoomPlugin);

type DataPropsPrimitive = {
  labels: any[],
  datasets: any[]
};

type DataPropsObject = {
  datasets: any[]
};

const ChartGraph = ({
  data,
  type = "line",
  chartId,
  options,
  ref,
  customLegends = {enable:true, colorRef:"borderColor", closeIcon:false},
  customPlugins=[],
  onLegendClose,
  gridColors={color1: '', color2: ''},
  cxLegends = "",
  cxGraph = "",
  cxLayout = "",
}: ChartGraphType) => {
  const [legendClose, setLegendClose]= useState<string>("");
  const chartRef = useRef<Chart | null>(null);

  // Custom plugin to color x-axis grid spaces of LineChart
  const withoutOffsetGridBackgroundPlugin = {
      id: 'gridBackgroundPlugin',
      beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          const xAxis = chart.scales['x'];
          const yAxis = chart.scales['y'];
  
          const xGridLineSpaces = xAxis.ticks.length;
          const colors = gridColors.color1 && gridColors.color1 !== '' && gridColors.color2 && gridColors.color2 !== '' ? [gridColors.color1, gridColors.color2] : ['#141B3A', '#1C244B'];
  
          for (let i = 0; i < xGridLineSpaces; i++) {
              const left = i === 0 ? xAxis.left : xAxis.getPixelForTick(i - 1);
              const right = i === xGridLineSpaces - 1 ? xAxis.right : xAxis.getPixelForTick(i);
              const colorIndex = i % colors.length;
              ctx.fillStyle = colors[colorIndex];
              ctx.fillRect(left, yAxis.bottom, right - left, yAxis.top - yAxis.bottom);
          }
  
          // Handle the last grid space separately if it is a half space
          const lastLeft = xAxis.getPixelForTick(xGridLineSpaces - 1);
          const lastRight = xAxis.right;
          if (lastLeft < lastRight) {
              const lastColorIndex = (xGridLineSpaces - 1) % colors.length;
              const lastColor = colors[(lastColorIndex + 1) % colors.length];
              ctx.fillStyle = lastColor;
              ctx.fillRect(lastLeft, yAxis.bottom, lastRight - lastLeft, yAxis.top - yAxis.bottom);
          }
      }
  };

const withoffsetGridBackgroundPlugin = {
  id: "alternatingBackgroundPlugin",
  beforeDraw: function (chart:any) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    const xScale = chart.scales["x-axis-0"] || chart.scales.x; // depending on Chart.js version

    // Calculate the width of each bar
    const barWidth = xScale.width / xScale.ticks.length;

    const years = chart.data.labels;
    const color1 = gridColors.color1 && gridColors.color1 !== '' ? gridColors.color1 : "#141B3A"; // Replace with your dark color
    const color2 = gridColors.color2 && gridColors.color2 !== '' ? gridColors.color2 : "#1C244B"; // Replace with your light color

    // Save the current canvas state
    ctx.save();

    // Clip the canvas to the chart area
    ctx.beginPath();
    ctx.rect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
    ctx.clip();

    years.forEach((year: any, index: number) => {
      const xStart = Math.max(xScale.getPixelForTick(index) - barWidth / 2, chartArea.left);
      const xEnd = Math.min(xScale.getPixelForTick(index) + barWidth / 2, chartArea.right);

      ctx.fillStyle = index % 2 === 0 ? color1 : color2;
      ctx.fillRect(
        xStart,
        chartArea.top,
        xEnd - xStart,
        chartArea.bottom - chartArea.top
      );
    });

    // Restore the canvas state to its original state
    ctx.restore();
  },
};
    
      useEffect(()=>{
        if(onLegendClose){
          onLegendClose(legendClose)
        }
      },[legendClose])

      useEffect(() => {
          if(data){
          const ctx = document.getElementById(chartId) as ChartItem | null;
  
          if (ctx) {
              if (chartRef.current) {
                  chartRef.current.destroy();
              }
  
              chartRef.current = new Chart(ctx, {
                  type: type,
                  data: data,
                  // plugins: [lineGridBackgroundPlugin],
                  plugins: [options.scales.x.offset && options.scales.x.grid.offset ? withoffsetGridBackgroundPlugin : withoutOffsetGridBackgroundPlugin, ...customPlugins],
                  options: options ? options : {
                      plugins: {
                        zoom: {
                          pan: {
                              enabled: true,
                              mode:'x',
                            },
                          zoom: {
                            wheel: {
                              enabled: true,
                            },
                            pinch: {
                              enabled: true,
                            },
                            mode: 'x',
                          }
                        }
                      }
                    }
              });
          }
        }
  
          return () => {
              if (chartRef.current) {
                  chartRef.current.destroy();
              }
          };
      }, [data]);  

  return (
    <div
      ref={ref}
      className={twMerge(classnames("w-full h-full pt-[2.1rem] relative"), cxLayout)}
    >
      { data.datasets.length > 0 ? (
      <div className={twMerge(classnames("w-full h-full bg-[#1C244B] p-2"), cxGraph)}>
        <canvas id={chartId} className={`w-full h-full`} />
      </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center border border-white-500">
        No graph data present.
      </div>
      )}
      {customLegends.enable && data.datasets.length > 0 && (
      <div className={twMerge(classnames("w-full flex flex-row items-center justify-start gap-2 absolute z-[1] left-0 top-0 pb-0.5 overflow-x-auto thin-scrollbar"), cxLegends)}>
        {data.datasets &&
          data.datasets.length > 0 &&
          data.datasets.map((points, i) => (
            <div className="flex items-center justify-start bg-[#45518D] rounded-lg gap-2 pr-3">
              <div
                style={{ backgroundColor: customLegends.colorRef === "borderColor" ? points.borderColor : points.backgroundColor }}
                className={`w-[1rem] h-[1.5rem] rounded-tl-lg rounded-bl-lg border-r border-dark-neutral-100`}
              ></div>
              <div
                title={points.label}
                className="max-w-[10rem] text-white text-[0.875rem] truncate"
              >
                {points.label}
              </div>
              {customLegends.closeIcon && (
              <div>
              <Action
                type="icon"
                onAction={() => {
                  setLegendClose(points.label)
                }}
                variant="transparent"
                size="lg"
              >
               <IoMdClose/>
              </Action>
              </div>
              )}
            </div>
          ))}
      </div>
      )}
    </div>
  );
};

export default ChartGraph;