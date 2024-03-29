// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import ToolTip from "./ToolTip";
import { ContentType, ContentProps, ContentTypeArray } from "../types/energy";
import { EnergyBarProps } from "../types/energy/bar";

const EnergyBarWidget = ({
  header,
  content,
  footer,
  onAction,
  cx = "",
}: EnergyBarProps) => {
  return (
    <div
      className={twMerge(
        classnames(
          "w-full h-17rem border border-mid-neutral-200 bg-dark-neutral-300 rounded-lg text-light-neutral-100"
        ),
        cx
      )}
      style={{
        border: "1px solid #45518D",
      }}
    >
      <div
        className={classnames(
          "w-full h-[3rem]",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-between items-center",
          "font-bold",
          "rounded-t-lg"
        )}
        style={{
          padding: "0px 0.7rem",
        }}
        data-testid="header"
      >
        {header}
      </div>
      <div
        className="w-full flex justify-between px-4 mt-2"
        style={{ height: "11rem" }}
        data-testid="widget"
      >
        {content.map((contentArray: ContentProps, contentIndex: number) => {
          return (
            <div className="relative w-[5%] h-[80%]" key={`${contentIndex}`}>
              {(contentArray.data as ContentTypeArray).map(
                (c: ContentType, i: number) => {
                  return (
                    <div
                      className="w-full absolute bottom-0"
                      style={{
                        height: c.percent,
                      }}
                      key={i}
                      data-testid="bars"
                    >
                      <ToolTip
                        title={c.tooltip!}
                        position={
                          contentIndex <= content.length / 2 - 1
                            ? "right-top"
                            : "left-top"
                        }
                      >
                        <div
                          className={`w-full h-full ${c.bg} rounded-full`}
                          onClick={() => {
                            onAction({ data: contentArray, clusterData: c });
                          }}
                          data-testid="actions"
                        />
                      </ToolTip>
                    </div>
                  );
                }
              )}
              <div
                className="flex justify-center items-end w-full text-xs"
                style={{
                  position: "absolute",
                  top: "105%",
                }}
                data-testid="labels"
              >
                {contentArray.label}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={classnames(
          "w-full h-[3rem]",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-between items-center",
          "font-bold",
          "rounded-b-lg"
        )}
        style={{
          padding: "0rem 0.7rem",
        }}
      >
        {footer}
      </div>
    </div>
  );
};

export default EnergyBarWidget;
