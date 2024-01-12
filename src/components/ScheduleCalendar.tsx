import React from "react";
import { ScheduleCalendarProps } from "../types/scheduleCalendar";

const ScheduleCalendar = ({ content, onAction }: ScheduleCalendarProps) => {
  return (
    <div className="relative w-full text-light-neutral-100 overflow-x-auto pb-2">
      <div className="w-full flex h-[4rem]">
        <div className="min-w-[40%] lg:min-w-0 lg:w-[30%] h-full border-b border-mid-neutral-300" />
        <div
          className="flex w-auto lg:w-[70%] h-full border-b border-mid-neutral-300"
          data-testid="calendar"
        >
          {content.calendar.map((c, cci) => {
            return (
              <div
                key={cci}
                className="flex flex-col justify-center items-center w-[7rem] lg:w-[calc(100%/7)]"
                data-testid={`calendar-${cci}`}
              >
                <div
                  className="text-sm font-semibold"
                  data-testid={`calendar-${cci}-day`}
                >
                  {c.day}
                </div>
                <div className="text-xs" data-testid={`calendar-${cci}-date`}>
                  {c.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {content.records.map((r, cri) => {
        return (
          <div
            key={cri}
            className="w-full h-full min-h-[4rem] flex"
            data-testid={`calendar-${cri}-record`}
          >
            <div
              className="min-w-[40%] lg:min-w-0 lg:w-[30%] h-inherit flex items-center pr-5 py-1 text-sm cursor-pointer border-b border-mid-neutral-300"
              onClick={() => onAction && onAction({ content: r, index: cri })}
              data-testid={`calendar-${cri}-title`}
            >
              {r.title}
            </div>
            <div
              className="flex w-auto lg:w-[70%] h-inherit border-b border-mid-neutral-300"
              data-testid={`calendar-${cri}-capsules-wrapper`}
            >
              {r.capsules.map((c, ci) => {
                return (
                  <div
                    key={ci}
                    className={`h-inherit flex flex-col justify-center items-center w-[7rem] lg:w-[calc(100%/7)] ${
                      ci % 2 === 0 ? "bg-dark-neutral-200" : ""
                    } pt-2 pb-1 px-2`}
                    data-testid={`calendar-${ci}-capsules`}
                  >
                    {c.map((r, ri) => {
                      return (
                        <div
                          key={ri}
                          className="text-[70%] text-center font-semibold w-full py-[0.1rem] bg-success rounded-full mb-1"
                          data-testid={`calendar-${cri}-${ci}-${ri}-capsule`}
                        >
                          {r}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleCalendar;
