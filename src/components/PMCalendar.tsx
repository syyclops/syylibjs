// Author - Varun Bardwaj

import React from "react";
import classnames from "classnames";
import { variants } from "../config/pmcalendar";
import {
  DisciplineProps,
  PMCalendarProps,
  VariantProps,
} from "../types/pmcalendar";

const PMCalendar = ({
  header,
  index,
  content,
  onAction,
  footer,
  highlight,
  isLoading = false,
}: PMCalendarProps) => {
  return (
    <div
      className={classnames(
        "w-full h-auto rounded-xl overflow-hidden border border-mid-neutral-200 p-[0.05rem]"
      )}
      style={{
        border: "1px solid #45518D",
      }}
    >
      <div
        className={classnames(
          "w-full h-12",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-center items-center",
          "font-bold"
        )}
      >
        <div>{header}</div>
      </div>
      <div
        className={classnames(
          "flex justify-between",
          "w-full h-40",
          "bg-dark-neutral-300",
          "px-[10%]"
        )}
      >
        <div
          className={classnames(
            "relative w-1/3 h-[75%]",
            "border-l border-l-mid-neutral-200"
          )}
          style={{
            borderLeft: "1px solid #45518D",
          }}
        >
          {!isLoading ? (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              {content[index * 3].disciplines.length > 0 &&
                content[index * 3].disciplines.map(
                  (c: DisciplineProps, i: number) => {
                    return (
                      <button
                        key={c.content}
                        className={classnames(
                          "relative",
                          "w-full",
                          "h-1/4",
                          "mb-0.5",
                          "rounded-full",
                          "border-none",
                          "text-left",
                          "text-sm",
                          "font-bold",
                          "px-2",
                          "cursor-pointer",
                          variants[c.discipline as keyof VariantProps],
                          highlight &&
                            highlight.monthIndex === 0 &&
                            highlight.disciplineIndex === i
                            ? "!border-warning"
                            : ""
                        )}
                        style={{
                          border: "3px solid #ffffff00",
                        }}
                        onClick={() =>
                          onAction({
                            month: content[index * 3].month,
                            discipline: c.discipline,
                            content: c.content,
                          })
                        }
                      >
                        {c.content}
                      </button>
                    );
                  }
                )}
            </div>
          ) : (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
            </div>
          )}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300">
            {content[index * 3].month}
          </div>
          <div className="absolute bottom-0 -left-1 w-2 h-2 bg-mid-neutral-200 rounded-full" />
        </div>
        <div
          className={classnames(
            "relative w-1/3 h-[75%]",
            "border-l border-l-mid-neutral-200"
          )}
          style={{
            borderLeft: "1px solid #45518D",
          }}
        >
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300">
            {content[index * 3 + 1].month}
          </div>

          {!isLoading ? (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              {content[index * 3 + 1].disciplines.length > 0 &&
                content[index * 3 + 1].disciplines.map(
                  (c: DisciplineProps, i: number) => (
                    <button
                      key={c.content}
                      className={classnames(
                        "relative",
                        "w-full",
                        "h-1/4",
                        "mb-0.5",
                        "rounded-full",
                        "border-none",
                        "text-left",
                        "text-sm",
                        "font-bold",
                        "px-2",
                        "cursor-pointer",
                        variants[c.discipline as keyof VariantProps],
                        highlight &&
                          highlight.monthIndex === 1 &&
                          highlight.disciplineIndex === i
                          ? "!border-warning"
                          : ""
                      )}
                      style={{
                        border: "3px solid #ffffff00",
                      }}
                      onClick={() =>
                        onAction({
                          month: content[index * 3 + 1].month,
                          discipline: c.discipline,
                          content: c.content,
                        })
                      }
                    >
                      {c.content}
                    </button>
                  )
                )}
            </div>
          ) : (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
            </div>
          )}
          <div className="absolute bottom-0 -left-1 w-2 h-2 bg-mid-neutral-200 rounded-full" />
        </div>
        <div
          className={classnames(
            "relative w-1/3 h-[75%]",
            "border-x border-x-mid-neutral-200"
          )}
          style={{
            borderRight: "1px solid #45518D",
            borderLeft: "1px solid #45518D",
          }}
        >
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300">
            {content[index * 3 + 2].month}
          </div>

          {!isLoading ? (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              {content[index * 3 + 2].disciplines.length > 0 &&
                content[index * 3 + 2].disciplines.map(
                  (c: DisciplineProps, i: number) => (
                    <button
                      key={c.content}
                      className={classnames(
                        "relative",
                        "w-full",
                        "h-1/4",
                        "mb-0.5",
                        "rounded-full",
                        "border-none",
                        "text-left",
                        "text-sm",
                        "font-bold",
                        "px-2",
                        "cursor-pointer",
                        variants[c.discipline as keyof VariantProps],
                        highlight &&
                          highlight.monthIndex === 2 &&
                          highlight.disciplineIndex === i
                          ? "!border-warning"
                          : ""
                      )}
                      style={{
                        border: "3px solid #ffffff00",
                      }}
                      onClick={() =>
                        onAction({
                          month: content[index * 3 + 2].month,
                          discipline: c.discipline,
                          content: c.content,
                        })
                      }
                    >
                      {c.content}
                    </button>
                  )
                )}
            </div>
          ) : (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
              <div
                className={classnames(
                  "relative",
                  "w-full",
                  "h-1/4",
                  "mb-0.5",
                  "rounded-full",
                  "border-none",
                  "text-left",
                  "text-sm",
                  "font-bold",
                  "px-2",
                  "cursor-pointer",
                  "bg-dark-neutral-100",
                  "animate-pulse"
                )}
              />
            </div>
          )}
          <div className="absolute bottom-0 -left-1 w-2 h-2 bg-mid-neutral-200 rounded-full" />
          <div className="absolute bottom-0 -right-1 w-2 h-2 bg-mid-neutral-200 rounded-full" />
        </div>
      </div>
      <div
        className={classnames(
          "w-full h-12",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-center items-center",
          "font-bold"
        )}
      >
        {footer}
      </div>
    </div>
  );
};

export default PMCalendar;
