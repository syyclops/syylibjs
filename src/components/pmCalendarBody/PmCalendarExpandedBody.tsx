import React from "react";
import classnames from "classnames";
import { variants } from "../../config/pmcalendar";

type ContentProps = {
    month: string;
    disciplines: DisciplineProps[];
  };

  type DisciplineProps = {
    discipline: string;
    content: string;
  };

  type PMActionProps = {
    month: string;
    discipline: string;
    content: string;
  };

  type VariantProps = {
    architectural: string;
    electrical: string;
    mechanical: string;
    plumbing: string;
  };

const PmCalendarExpandedBody = ({content, index, highlight, onAction, isLoading}:{content:ContentProps[], index:number, highlight?:{ monthIndex: number; disciplineIndex: number }, onAction:(a: PMActionProps) => void, isLoading:boolean}) =>{
    return(
        <>
        {["Q1", "Q2", "Q3", "Q4"].map((data,ind)=>(
        <>
        <div
        className={classnames(
          "flex justify-between",
          "w-full h-40",
          "bg-dark-neutral-300",
          "px-[10%]",
          // ind === 0 ? "border-0" : "border-t border-t-[#45518D]",
          "relative"
        )}
        style={{
          borderTop: ind === 0 ? "0px" :"1px solid #45518D",
        }}
      >
        <div className={classnames("absolute", "z-[10]", "left-3 top-0.5", "text-white", "font-bold")}>{data}</div>
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
              {content[ind * 3].disciplines.length > 0 &&
                content[ind * 3].disciplines.map(
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
                            month: content[ind * 3].month,
                            discipline: c.discipline,
                            content: c.content,
                          })
                        }
                        data-testid={`content-${ind * 3}-${i}`}
                      >
                        {c.content}
                      </button>
                    );
                  }
                )}
            </div>
          ) : (
            <div
              className="flex flex-col justify-end h-[95%] p-0.5"
              data-testid={`loader-0`}
            >
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
          <div
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300"
            data-testid={`month-${ind * 3}`}
          >
            {content[ind * 3].month}
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
          <div
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300"
            data-testid={`month-${ind * 3 + 1}`}
          >
            {content[ind * 3 + 1].month}
          </div>

          {!isLoading ? (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              {content[ind * 3 + 1].disciplines.length > 0 &&
                content[ind * 3 + 1].disciplines.map(
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
                          month: content[ind * 3 + 1].month,
                          discipline: c.discipline,
                          content: c.content,
                        })
                      }
                      data-testid={`content-${ind * 3 + 1}-${i}`}
                    >
                      {c.content}
                    </button>
                  )
                )}
            </div>
          ) : (
            <div
              className="flex flex-col justify-end h-[95%] p-0.5"
              data-testid={`loader-1`}
            >
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
          <div
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-light-neutral-300"
            data-testid={`month-${ind * 3 + 2}`}
          >
            {content[ind * 3 + 2].month}
          </div>

          {!isLoading ? (
            <div className="flex flex-col justify-end h-[95%] p-0.5">
              {content[ind * 3 + 2].disciplines.length > 0 &&
                content[ind * 3 + 2].disciplines.map(
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
                          month: content[ind * 3 + 2].month,
                          discipline: c.discipline,
                          content: c.content,
                        })
                      }
                      data-testid={`content-${ind * 3 + 2}-${i}`}
                    >
                      {c.content}
                    </button>
                  )
                )}
            </div>
          ) : (
            <div
              className="flex flex-col justify-end h-[95%] p-0.5"
              data-testid={`loader-2`}
            >
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
      </>
      ))}
      </>
    );
}

export default PmCalendarExpandedBody