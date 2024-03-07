// Author - Varun Bardwaj

import React from "react";
import classnames from "classnames";
import { variants } from "../config/pmcalendar";
import {
  DisciplineProps,
  PMCalendarProps,
  VariantProps,
} from "../types/pmcalendar";
import PmCalendarSingleBody from "./pmCalendarBody/PmCalendarSingleBody";
import PmCalendarExpandedBody from "./pmCalendarBody/PmCalendarExpandedBody";

const PMCalendar = ({
  header,
  index,
  content,
  onAction,
  footer,
  highlight,
  isLoading = false,
  showAll = false,
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
          "w-full",
          showAll ? "h-16" : "h-12",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-center items-center",
          "font-bold",
          "relative"
        )}
      >
        {header}
      </div>
      {showAll ? (
      <PmCalendarExpandedBody content={content} index={index} highlight={highlight} onAction={onAction} isLoading={isLoading}/>
      ) : (
      <PmCalendarSingleBody content={content} index={index} highlight={highlight} onAction={onAction} isLoading={isLoading}/>
      )}
      <div
        className={classnames(
          "w-full h-12",
          "bg-dark-neutral-200 text-light-neutral-100",
          "flex justify-center items-center",
          "font-bold",
          "relative"
        )}
        data-testid="footer"
      >
        {footer}
      </div>
    </div>
  );
};

export default PMCalendar;
