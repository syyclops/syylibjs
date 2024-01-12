import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ScheduleCalendar from "../src/components/ScheduleCalendar";
import { vi } from "vitest";

beforeEach(() => cleanup);

const content = {
  calendar: [
    {
      day: "Mon",
      date: "Nov 06",
    },
    {
      day: "Tue",
      date: "Nov 07",
    },
    {
      day: "Wed",
      date: "Nov 08",
    },
    {
      day: "Thu",
      date: "Nov 09",
    },
    {
      day: "Fri",
      date: "Nov 10",
    },
    {
      day: "Sat",
      date: "Nov 11",
    },
    {
      day: "Sun",
      date: "Nov 12",
    },
  ],
  records: [
    {
      title: "Dunbar Daycare Art Music",
      capsules: [
        ["5am - 3pm", "3pm - 5pm", "5pm - 8pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 2pm", "2pm - 6pm"],
        [],
        [],
      ],
    },
    {
      title: "Dunbar Gym",
      capsules: [
        ["5am - 3pm", "5pm - 8pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 2pm", "2pm - 6pm"],
        [],
        [],
      ],
    },
    {
      title: "Dunbar Health Suite",
      capsules: [
        ["5am - 3pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 6pm"],
        ["5am - 2pm"],
        [],
        [],
      ],
    },
  ],
};

describe("test ScheduleCalendar.tsx component", () => {
  it("render component", () => {
    render(
      <ScheduleCalendar
        content={{
          calendar: [],
          records: [],
        }}
      />
    );
  });

  it("content prop", () => {
    render(<ScheduleCalendar content={content} />);
    expect(screen.getByTestId("calendar").childNodes.length).toEqual(7);
    expect(screen.getByTestId("calendar-0")).not.toBeNull();
    expect(screen.getByTestId("calendar-1")).not.toBeNull();
    expect(screen.getByTestId("calendar-2")).not.toBeNull();
    expect(screen.getByTestId("calendar-3")).not.toBeNull();
    expect(screen.getByTestId("calendar-4")).not.toBeNull();
    expect(screen.getByTestId("calendar-5")).not.toBeNull();
    expect(screen.getByTestId("calendar-6")).not.toBeNull();
    expect(screen.queryByTestId("calendar-7")).toBeNull();
    expect(screen.getByTestId("calendar-0-day").innerHTML).toEqual("Mon");
    expect(screen.getByTestId("calendar-0-date").innerHTML).toEqual("Nov 06");
    expect(screen.getByTestId("calendar-6-day").innerHTML).toEqual("Sun");
    expect(screen.getByTestId("calendar-6-date").innerHTML).toEqual("Nov 12");
    expect(screen.getByTestId("calendar-0-record")).not.toBeNull();
    expect(screen.getByTestId("calendar-1-record")).not.toBeNull();
    expect(screen.getByTestId("calendar-2-record")).not.toBeNull();
    expect(screen.queryByTestId("calendar-3-record")).toBeNull();
    expect(screen.getByTestId("calendar-0-title").innerHTML).toEqual(
      "Dunbar Daycare Art Music"
    );
    expect(
      screen.getByTestId("calendar-0-capsules-wrapper").childNodes.length
    ).toEqual(7);
    expect(screen.getByTestId("calendar-0-0-0-capsule")).not.toBeNull();
  });

  it("onAction prop", () => {
    const onActionMock = vi.fn();
    render(
      <ScheduleCalendar content={content} onAction={() => onActionMock()} />
    );
    fireEvent.click(screen.getByTestId("calendar-0-title"));
    fireEvent.click(screen.getByTestId("calendar-0-title"));
    fireEvent.click(screen.getByTestId("calendar-0-title"));
    expect(onActionMock).toHaveBeenCalledTimes(3);
  });
});
