import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DatePicker from "../src/components/DatePicker";

beforeEach(() => cleanup);

describe("test DatePicker.tsx component", () => {
  it("render component", () => {
    render(
      <DatePicker
        value={{
          d: "1",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
  });

  it("value prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));

    expect(
      screen.getByTestId("date-18").classList.contains("!bg-primary")
    ).toBeTruthy();
    expect(screen.queryByTestId("date-30")).toBeTruthy();

    expect(screen.queryByTestId("year")).toBeFalsy();

    fireEvent.click(screen.getByTestId("month-year"));

    expect(screen.queryByTestId("year")).toBeTruthy();
    expect(
      screen
        .getByTestId("month-0")
        .classList.contains("!border-dark-neutral-300")
    ).toBeTruthy();
    expect(
      screen
        .getByTestId("month-1")
        .classList.contains("!border-dark-neutral-300")
    ).toBeFalsy();

    fireEvent.click(screen.getByTestId("month-1"));
    expect(screen.getByTestId("date-30").innerHTML).toEqual("30");

    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("year-prev"));
    fireEvent.click(screen.getByTestId("month-1"));
    expect(screen.getByTestId("date-28").innerHTML).toEqual("28");

    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("year-next"));
    fireEvent.click(screen.getByTestId("month-2"));
    expect(screen.getByTestId("date-10").innerHTML).toEqual("10");
    fireEvent.click(screen.getByTestId("date-10"));

    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("month-0"));

    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("month-11"));
  });

  it("clikaway event", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    expect(
      screen.getByTestId("date-18").classList.contains("!bg-primary")
    ).toBeTruthy();

    fireEvent.mouseDown(document);
    expect(screen.queryByTestId("date-18")).toBeFalsy();

    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("month-year-year"));
  });

  it("month === 11 prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    expect(screen.getByTestId("date-18")).toBeTruthy();
  });

  it("month === 1 & date === 29 prop", () => {
    render(
      <DatePicker
        value={{
          d: "32",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    expect(screen.getByTestId("date-18")).toBeTruthy();
  });

  it("onChange event", () => {
    render(
      <DatePicker
        value={{
          d: "15",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));

    expect(
      screen.getByTestId("date-15").classList.contains("!bg-primary")
    ).toBeTruthy();

    fireEvent.focus(screen.getByTestId("input-month"));
    fireEvent.keyDown(screen.getByTestId("input-month"), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(screen.queryByTestId("calendar")).toBeFalsy();

    fireEvent.change(screen.getByTestId("input-month"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId("input-month"), {
      target: { value: "" },
    });

    fireEvent.focus(screen.getByTestId("input-date"));
    fireEvent.keyDown(screen.getByTestId("input-date"), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(screen.queryByTestId("calendar")).toBeFalsy();

    fireEvent.change(screen.getByTestId("input-date"), {
      target: { value: "19" },
    });
    fireEvent.change(screen.getByTestId("input-date"), {
      target: { value: "" },
    });

    fireEvent.focus(screen.getByTestId("input-year"));
    fireEvent.keyDown(screen.getByTestId("input-year"), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    expect(screen.queryByTestId("calendar")).toBeFalsy();

    fireEvent.change(screen.getByTestId("input-year"), {
      target: { value: "2026" },
    });
    fireEvent.change(screen.getByTestId("input-year"), {
      target: { value: "" },
    });
  });

  it("date < 10 prop", () => {
    render(
      <DatePicker
        value={{
          d: "1",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
  });

  it("month === 1 & prev month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "1",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-prev"));
  });

  it("month === 1 & prev month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-prev"));
  });

  it("month === 11 & prev month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-prev"));
  });

  it("month === 2 & prev month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "2",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-prev"));
  });

  it("month === 11 & next month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "11",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-next"));
  });

  it("month === 11 & next month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-next"));
  });

  it("month === 10 & next month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "10",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-next"));
  });

  it("month === 8 & next month event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "8",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("calendar-next"));
  });

  it("month === 0 & next year event prop", () => {
    render(
      <DatePicker
        value={{
          d: "18",
          m: "0",
          y: "2024",
        }}
        onSet={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("action"));
    fireEvent.click(screen.getByTestId("month-year"));
    fireEvent.click(screen.getByTestId("year-prev"));
  });
});
