import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RUL from "../src/components/RUL";

beforeEach(() => cleanup);

const content = [
  {
    disciplines: [
      {
        discipline: "architectural",
        content: "A5",
        cost: 75000,
      },
      {
        discipline: "mechanical",
        content: "M27",
        cost: 25000,
      },
      {
        discipline: "plumbing",
        content: "P7",
        cost: 5000,
      },
    ],
  },
  {
    disciplines: [
      {
        discipline: "mechanical",
        content: "M7",
        cost: `150.8k`,
      },
    ],
  },
  {
    disciplines: [
      {
        discipline: "electrical",
        content: "E38",
        cost: 65000,
      },
    ],
  },
];

describe("test RUL.tsx component", () => {
  it("render component", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
      />
    );
  });

  it("header prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("header").innerHTML).toEqual(
      "Remaining useful life"
    );
  });

  it("content prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
      />
    );
    expect(screen.queryByTestId("discipline-0-0")).toBeTruthy();
    expect(screen.queryByTestId("discipline-0-1")).toBeTruthy();
    expect(screen.queryByTestId("discipline-0-2")).toBeTruthy();
    expect(screen.queryByTestId("discipline-1-0")).toBeTruthy();
    expect(screen.queryByTestId("discipline-2-0")).toBeTruthy();
  });

  it("footer prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("footer").innerHTML).toEqual(
      "Cost estimation on June 6, 2023"
    );
  });

  it("onAction prop", () => {
    const onActionMockFn = vi.fn();

    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => onActionMockFn()}
        highlight={{ yearIndex: 0, disciplineIndex: 0 }}
      />
    );
    fireEvent.click(screen.getByTestId("discipline-0-0"));
    fireEvent.click(screen.getByTestId("discipline-1-0"));
    fireEvent.click(screen.getByTestId("discipline-2-0"));
    expect(onActionMockFn).toHaveBeenCalledTimes(3);
  });

  it("isLoading prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
        isLoading
      />
    );
    expect(screen.queryByTestId("loader")).not.toBeNull();
    expect(screen.getByTestId("loader").childNodes.length).toEqual(1);
  });

  it("hightlight === 0 prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
        highlight={{ yearIndex: 0, disciplineIndex: 0 }}
      />
    );
    expect(
      screen.getByTestId("discipline-0-0").classList.contains("!border-warning")
    ).toBeTruthy();
  });

  it("hightlight === 1 prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
        highlight={{ yearIndex: 1, disciplineIndex: 0 }}
      />
    );
    expect(
      screen.getByTestId("discipline-1-0").classList.contains("!border-warning")
    ).toBeTruthy();
  });

  it("hightlight === 2 prop", () => {
    render(
      <RUL
        header="Remaining useful life"
        content={content}
        footer="Cost estimation on June 6, 2023"
        onAction={() => {}}
        highlight={{ yearIndex: 2, disciplineIndex: 0 }}
      />
    );
    expect(
      screen.getByTestId("discipline-2-0").classList.contains("!border-warning")
    ).toBeTruthy();
  });
});
