import React from "react";
import classnames from "classnames";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { variants } from "../config/pmcalendar";
import {
  ContentProps,
  DisciplineProps,
  PMCalendarProps,
  VariantProps,
} from "../types/pmcalendar";

const PMCalendar = ({
  header,
  index,
  content,
  onNav,
  footer,
  onAction,
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
        <button
          className={classnames(
            "border-[#00000000] mr-3 bg-transparent",
            index === 0 ? "cursor-not-allowed opacity-20" : "cursor-pointer"
          )}
          disabled={index === 0}
          onClick={() => onNav("prev")}
        >
          <FiChevronLeft />
        </button>
        <div>{header[index]}</div>
        <button
          className={classnames(
            "border-[#00000000] ml-3 bg-transparent",
            header.length === 1 || index >= header.length - 1
              ? "cursor-not-allowed opacity-20"
              : "cursor-pointer"
          )}
          disabled={header.length === 1 || index >= header.length - 1}
          onClick={() => onNav("next")}
        >
          <FiChevronRight />
        </button>
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
          <div className="flex flex-col justify-end h-[95%] p-0.5">
            {content[index * 3].disciplines.length > 0 &&
              content[index * 3].disciplines.map((c: DisciplineProps) => (
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
                    variants[c.discipline as keyof VariantProps]
                  )}
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
              ))}
          </div>
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

          <div className="flex flex-col justify-end h-[95%] p-0.5">
            {content[index * 3 + 1].disciplines.length > 0 &&
              content[index * 3 + 1].disciplines.map((c: DisciplineProps) => (
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
                    variants[c.discipline as keyof VariantProps]
                  )}
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
              ))}
          </div>
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

          <div className="flex flex-col justify-end h-[95%] p-0.5">
            {content[index * 3 + 2].disciplines.length > 0 &&
              content[index * 3 + 2].disciplines.map((c: DisciplineProps) => (
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
                    variants[c.discipline as keyof VariantProps]
                  )}
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
              ))}
          </div>
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
