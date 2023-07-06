import React from "react";
import classnames from "classnames";
import { variants } from "../config/pmcalendar";
import { VariantProps } from "../types/pmcalendar";
import { RULProps, DisciplineProps } from "../types/rul";

const RUL = ({ header, content, footer, onAction }: RULProps) => {
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
          <div className="flex flex-col justify-end h-[95%] p-0.5">
            <div className="absolute text-light-neutral-300 left-0 translate-x-[-50%] -bottom-6 text-xs font-normal">
              {new Date().getFullYear()}
            </div>
            <div className="absolute text-light-neutral-300 right-0 translate-x-[50%] -bottom-6 text-xs font-normal">
              {new Date().getFullYear() + 5}
            </div>
            {content[0].disciplines.length > 0 &&
              content[0].disciplines.map((c: DisciplineProps) => (
                <button
                  key={c.content}
                  className={classnames(
                    "relative",
                    "flex",
                    "justify-between",
                    "items-center",
                    "w-full",
                    "h-1/4",
                    "mb-0.5",
                    "rounded-full",
                    "border-none",
                    "text-left",
                    "text-[0.65rem]",
                    "font-bold",
                    "px-2",
                    "cursor-pointer",
                    variants[c.discipline as keyof VariantProps]
                  )}
                  onClick={() =>
                    onAction({
                      index: 0,
                      discipline: c.discipline,
                      content: c.content,
                      cost: c.cost,
                    })
                  }
                >
                  <div>{c.content}</div>
                  <div>${Number(c.cost).toLocaleString("en-US")}</div>
                </button>
              ))}
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
          <div className="absolute text-light-neutral-300 right-0 translate-x-[50%] -bottom-6 text-xs font-normal">
            {new Date().getFullYear() + 10}
          </div>
          <div className="flex flex-col justify-end h-[95%] p-0.5">
            {content[1].disciplines.length > 0 &&
              content[1].disciplines.map((c: DisciplineProps) => (
                <button
                  key={c.content}
                  className={classnames(
                    "relative",
                    "flex",
                    "justify-between",
                    "items-center",
                    "w-full",
                    "h-1/4",
                    "mb-0.5",
                    "rounded-full",
                    "border-none",
                    "text-left",
                    "text-[0.65rem]",
                    "font-bold",
                    "px-2",
                    "cursor-pointer",
                    variants[c.discipline as keyof VariantProps]
                  )}
                  onClick={() =>
                    onAction({
                      index: 1,
                      discipline: c.discipline,
                      content: c.content,
                      cost: c.cost,
                    })
                  }
                >
                  <div>{c.content}</div>
                  <div>${Number(c.cost).toLocaleString("en-US")}</div>
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
          <div className="absolute text-light-neutral-300 right-0 translate-x-[50%] -bottom-6 text-xs font-normal">
            {new Date().getFullYear() + 15}
          </div>
          <div className="flex flex-col justify-end h-[95%] p-0.5">
            {content[2].disciplines.length > 0 &&
              content[2].disciplines.map((c: DisciplineProps) => (
                <button
                  key={c.content}
                  className={classnames(
                    "relative",
                    "flex",
                    "justify-between",
                    "items-center",
                    "w-full",
                    "h-1/4",
                    "mb-0.5",
                    "rounded-full",
                    "border-none",
                    "text-left",
                    "text-[0.65rem]",
                    "font-bold",
                    "px-2",
                    "cursor-pointer",
                    variants[c.discipline as keyof VariantProps]
                  )}
                  onClick={() =>
                    onAction({
                      index: 2,
                      discipline: c.discipline,
                      content: c.content,
                      cost: c.cost,
                    })
                  }
                >
                  <div>{c.content}</div>
                  <div>${Number(c.cost).toLocaleString("en-us")}</div>
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

export default RUL;
