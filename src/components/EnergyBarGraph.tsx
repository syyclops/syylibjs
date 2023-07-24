import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import ToolTip from "./ToolTip";
import { ToolTipProps } from "../types/toolTip";

const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const EnergyBarGraph = ({
  title,
  content,
  toolTip,
  position,
}: {
  title: string;
  content: [string, string, string][];
  toolTip: string | JSX.Element[];
  position?: ToolTipProps["position"];
}) => {
  return (
    <div
      className={twMerge(
        classnames(
          "w-full h-[14.875rem] bg-mid-neutral-300 rounded-xl text-light-neutral-100"
        )
      )}
    >
      <div className="pt-3 text-sm font-bold text-center">{title}</div>
      <div className="w-full h-full flex justify-between items-center pb-5 px-6">
        {content.map((c: [string, string, string], i: number) => {
          return (
            <div className="flex flex-col items-center w-[5%] h-[80%]">
              <ToolTip title={toolTip[i]} position={position}>
                <div className="flex gap-2 w-[10%] h-[100%]">
                  <div
                    className="absolute bottom-0 w-[100%] bg-plumb rounded-full"
                    style={{
                      height: c[0],
                    }}
                  />

                  <div
                    className="absolute bottom-0 w-[100%] bg-elec rounded-full"
                    style={{
                      height: c[1],
                    }}
                  />
                  <div
                    className="absolute bottom-0 w-[100%] bg-mech rounded-full"
                    style={{
                      height: c[2],
                    }}
                  />
                </div>
              </ToolTip>
              <div className="text-xs mt-2 mb-4">{months[i]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnergyBarGraph;
