// Author - Varun Bardwaj

import React, { useState } from "react";
import {
  ContentBarType,
  ContentProps,
  ContentType,
  ContentTypeArray,
} from "../types/energy";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { AiOutlinePlus } from "react-icons/ai";
import { EnergyGraphProps } from "../types/energy/graph";

const EnergyBarGraph = ({
  content,
  height = "h-full",
  bg = "bg-dark-neutral-200",
  onAction,
}: EnergyGraphProps) => {
  const [showTooltip, setShowToolTip] = useState<{
    index: string;
    show: boolean;
    data: ContentTypeArray;
  }>({
    index: "",
    show: false,
    data: [],
  });
  return (
    <>
      {showTooltip.show && (
        <div
          className="absolute w-auto z-[9999] w-auto flex gap-2"
          style={{ top: "3rem", left: "3rem" }}
        >
          {showTooltip.data.map((bar: ContentType, iBar: number) => {
            return (
              <div
                key={iBar}
                style={{ height: "1.5rem" }}
                className="flex items-center bg-mid-neutral-300 rounded-lg overflow-hidden gap-2"
              >
                <div className={`w-3 h-full ${bar.bg}`} />
                <div className="text-xs font-bold text-white">
                  {bar.category}
                </div>
                <div className="text-xs font-bold pr-3 text-white">
                  {bar.usage}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div
        className={twMerge(
          classnames(
            "flex w-full h-full rounded-lg text-light-neutral-100 overflow-auto"
          ),
          bg,
          height
        )}
        style={{
          padding: "2.5rem 2.5rem 5rem 2.5rem",
        }}
      >
        {content.map(
          (contentArray: ContentProps, contentArrayIndex: number) => {
            return (
              <div
                key={contentArrayIndex}
                className={`relative ${
                  contentArrayIndex % 2 === 1
                    ? "bg-transparent"
                    : "bg-dark-neutral-100"
                } w-full h-full`}
                style={{
                  border: "1px solid #37417160",
                  minWidth: "12rem",
                }}
              >
                <div
                  className="w-full absolute bottom-[-2rem] text-sm text-center"
                  style={{ bottom: "-2rem" }}
                >
                  {contentArray.label}
                </div>
                <div
                  className="relative w-full h-full flex justify-between"
                  style={{ padding: "0.5rem" }}
                >
                  {(contentArray.data as ContentBarType[]).map(
                    (contentBar: ContentBarType, contentBarIndex: number) => {
                      return (
                        <div
                          key={contentBarIndex}
                          className="relative h-full cursor-pointer"
                          style={{
                            width: "calc(100% / 15 - 0.3rem)",
                          }}
                          onMouseOver={() => {
                            setShowToolTip({
                              show: true,
                              index: `${contentArrayIndex}-${contentBarIndex}}`,
                              data: contentBar.bars,
                            });
                          }}
                          onMouseOut={() => {
                            setShowToolTip({
                              show: false,
                              index: "",
                              data: [],
                            });
                          }}
                          onClick={() => {
                            onAction(contentBar);
                          }}
                        >
                          {contentBar.bars.map((c: ContentType, iC: number) => {
                            return (
                              <div
                                key={iC}
                                className={classnames(
                                  "absolute bottom-0 bg-elec rounded-full",
                                  c.bg
                                )}
                                style={{
                                  width: "100%",
                                  height: c.percent,
                                }}
                              >
                                {showTooltip.show &&
                                  showTooltip.index ===
                                    `${contentArrayIndex}-${contentBarIndex}}` &&
                                  iC === 0 && (
                                    <div
                                      className="absolute"
                                      style={{
                                        marginTop: "-2rem",
                                        marginLeft: "0.01rem",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                      }}
                                    >
                                      {<AiOutlinePlus size={25} />}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                          {showTooltip.show &&
                            showTooltip.index ===
                              `${contentArrayIndex}-${contentBarIndex}}` && (
                              <div
                                className="absolute w-1 ml-[0.1rem]"
                                style={{
                                  borderLeft: "2px dashed white",
                                  top: "-2rem",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  height: "calc(100% + 6.8rem)",
                                }}
                              >
                                <div
                                  className="absolute bottom-0 bg-mid-neutral-300 px-1 py-1 rounded-md flex justify-center items-center text-xs font-bold"
                                  style={{
                                    width: "5rem",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                  }}
                                >
                                  {contentBar.date}
                                </div>
                              </div>
                            )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default EnergyBarGraph;
