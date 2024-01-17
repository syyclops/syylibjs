import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PMCalendar from "../src/components/PMCalendar";
import { ContentProps } from "../src/types/pmcalendar";

beforeEach(() => cleanup);

const pmData: { year: number; data: ContentProps[] }[] = [
  {
    year: 2023,
    data: [
      {
        month: "Jan",
        disciplines: [
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Feb",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
        ],
      },
      {
        month: "Mar",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Apr",
        disciplines: [
          {
            discipline: "mechanical",
            content: "M1",
          },
        ],
      },
      {
        month: "May",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Jun",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
        ],
      },
      {
        month: "Jul",
        disciplines: [
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Aug",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
        ],
      },
      {
        month: "Sep",
        disciplines: [
          {
            discipline: "architectural",
            content: "A60",
          },
          {
            discipline: "electrical",
            content: "E62",
          },
          {
            discipline: "mechanical",
            content: "M18",
          },
          {
            discipline: "plumbing",
            content: "P57",
          },
        ],
      },
      {
        month: "Oct",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Nov",
        disciplines: [
          {
            discipline: "mechanical",
            content: "M1",
          },
        ],
      },
      {
        month: "Dec",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    data: [
      {
        month: "Jan",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Feb",
        disciplines: [],
      },
      {
        month: "Mar",
        disciplines: [
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Apr",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "electrical",
            content: "E8",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
        ],
      },
      {
        month: "May",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
        ],
      },
      {
        month: "Jun",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Jul",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Aug",
        disciplines: [],
      },
      {
        month: "Sep",
        disciplines: [
          {
            discipline: "architectural",
            content: "A60",
          },
          {
            discipline: "electrical",
            content: "E62",
          },
          {
            discipline: "plumbing",
            content: "P57",
          },
        ],
      },
      {
        month: "Oct",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
        ],
      },
      {
        month: "Nov",
        disciplines: [
          {
            discipline: "electrical",
            content: "E6",
          },
          {
            discipline: "mechanical",
            content: "M1",
          },
          {
            discipline: "plumbing",
            content: "P17",
          },
        ],
      },
      {
        month: "Dec",
        disciplines: [
          {
            discipline: "architectural",
            content: "A6",
          },
        ],
      },
    ],
  },
];

const getContent = pmData.filter((d) => d.year === 2023);
const content = getContent[0].data;

describe("test PMCalendar.tsx component", () => {
  it("render component", () => {
    render(
      <PMCalendar
        header=""
        index={0}
        content={content}
        footer={<></>}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("header").innerHTML).toEqual("");
  });

  it("header prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<></>}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("header").innerHTML).toEqual("HEADER");
  });

  it("index & content props", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<></>}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("content-0-0").innerHTML).toEqual("M1");
    expect(screen.getByTestId("content-0-1").innerHTML).toEqual("P17");
    expect(screen.getByTestId("month-0").innerHTML).toEqual("Jan");

    expect(screen.getByTestId("content-1-0").innerHTML).toEqual("A6");
    expect(screen.getByTestId("month-1").innerHTML).toEqual("Feb");

    expect(screen.getByTestId("content-2-0").innerHTML).toEqual("A6");
    expect(screen.getByTestId("content-2-1").innerHTML).toEqual("E6");
    expect(screen.getByTestId("content-2-2").innerHTML).toEqual("M1");
    expect(screen.getByTestId("content-2-3").innerHTML).toEqual("P17");
    expect(screen.getByTestId("month-2").innerHTML).toEqual("Mar");
  });

  it("onAction prop", () => {
    const onActionMockFn = vi.fn();
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<></>}
        onAction={() => onActionMockFn()}
      />
    );
    fireEvent.click(screen.getByTestId("content-0-0"));
    fireEvent.click(screen.getByTestId("content-0-1"));
    fireEvent.click(screen.getByTestId("content-1-0"));
    fireEvent.click(screen.getByTestId("content-2-0"));
    fireEvent.click(screen.getByTestId("content-2-1"));
    fireEvent.click(screen.getByTestId("content-2-2"));
    fireEvent.click(screen.getByTestId("content-2-3"));

    expect(onActionMockFn).toHaveBeenCalledTimes(7);
  });

  it("footer prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<>FOOTER</>}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("footer").innerHTML).toEqual("FOOTER");
  });

  it("highlight when monthIndex === 0 prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<>FOOTER</>}
        onAction={() => {}}
        highlight={{ monthIndex: 0, disciplineIndex: 1 }}
      />
    );
    expect(
      screen.getByTestId("content-0-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-0-1").classList.contains("!border-warning")
    ).toBeTruthy();
    expect(
      screen.getByTestId("content-1-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-1").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-2").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-3").classList.contains("!border-warning")
    ).toBeFalsy();
  });

  it("highlight when monthIndex === 1 prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<>FOOTER</>}
        onAction={() => {}}
        highlight={{ monthIndex: 1, disciplineIndex: 0 }}
      />
    );
    expect(
      screen.getByTestId("content-0-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-0-1").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-1-0").classList.contains("!border-warning")
    ).toBeTruthy();
    expect(
      screen.getByTestId("content-2-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-1").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-2").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-3").classList.contains("!border-warning")
    ).toBeFalsy();
  });

  it("highlight when monthIndex === 2 prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<>FOOTER</>}
        onAction={() => {}}
        highlight={{ monthIndex: 2, disciplineIndex: 3 }}
      />
    );
    expect(
      screen.getByTestId("content-0-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-0-1").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-1-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-0").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-1").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-2").classList.contains("!border-warning")
    ).toBeFalsy();
    expect(
      screen.getByTestId("content-2-3").classList.contains("!border-warning")
    ).toBeTruthy();
  });

  it("isLoading prop", () => {
    render(
      <PMCalendar
        header="HEADER"
        index={0}
        content={content}
        footer={<>FOOTER</>}
        onAction={() => {}}
        isLoading
      />
    );
    expect(screen.queryByTestId("loader-0")).toBeTruthy();
    expect(screen.queryByTestId("loader-1")).toBeTruthy();
    expect(screen.queryByTestId("loader-2")).toBeTruthy();
  });
});
