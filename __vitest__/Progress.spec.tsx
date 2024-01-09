import React from "react";
import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Progress from "../src/components/Progress";

beforeEach(() => cleanup);

describe("test Progress.tsx component", () => {
  it("render component", () => {
    render(<Progress type="circle" percent={0} />);
  });

  it("type === circle prop", () => {
    render(<Progress type="circle" percent={0} />);
    expect(screen.queryAllByTestId("circle")).toBeTruthy();
  });

  it("type === bar prop", () => {
    render(<Progress type="bar" percent={0} showPercent={false} />);
    expect(screen.queryAllByTestId("bar")).toBeTruthy();
  });

  it("type === circle & percent === 50 prop", () => {
    render(<Progress type="circle" percent={50} />);
    expect(
      screen.getByTestId("circle-inner").getAttribute("stroke-dashoffset")
    ).toEqual("138.23007675795088");
  });

  it("type === bar & percent === 50 prop", () => {
    render(<Progress type="bar" percent={50} />);
    expect(screen.getByTestId("bar-inner").style.width).toEqual("50%");
  });

  it("type === circle & variant === info prop", () => {
    render(<Progress type="circle" percent={50} variant="info" />);
    expect(
      screen.getByTestId("circle-inner").classList.contains("stroke-info")
    ).toBeTruthy();
  });

  it("type === bar & variant === info prop", () => {
    render(<Progress type="bar" percent={50} variant="info" />);
    expect(
      screen.getByTestId("bar-inner").classList.contains("bg-info")
    ).toBeTruthy();
  });

  it("type === circle & circleSize prop", async () => {
    render(
      <Progress type="circle" percent={50} variant="info" circleSize={80} />
    );
    expect(screen.getByTestId("circle-inner").getAttribute("r")).toEqual(
      "35.2"
    );
  });

  it("type === bar & barSize prop", async () => {
    render(<Progress type="bar" percent={50} variant="info" barSize="lg" />);
    expect(screen.getByTestId("bar").classList.contains("h-5")).toBeTruthy();
  });

  it("type === circle & showPercent prop", async () => {
    render(
      <Progress
        type="circle"
        percent={50}
        variant="info"
        circleSize={80}
        showPercent
      />
    );
    expect(screen.getByTestId("circle-percent").innerHTML).toEqual("50%");
  });

  it("type === bar & showPercent prop", async () => {
    render(
      <Progress
        type="bar"
        percent={50}
        variant="info"
        barSize="lg"
        showPercent
      />
    );
    expect(screen.getByTestId("bar-inner").innerHTML).toEqual("50%");
  });

  it("type === circle & completedStroke prop", async () => {
    render(
      <Progress
        type="circle"
        percent={50}
        variant="info"
        circleSize={80}
        showPercent
        completedStroke="stroke-red-500"
      />
    );
    expect(
      screen.getByTestId("circle-inner").classList.contains("stroke-red-500")
    ).toBeTruthy();
  });

  it("type === circle & remainingStroke prop", async () => {
    render(
      <Progress
        type="circle"
        percent={50}
        variant="info"
        circleSize={80}
        showPercent
        completedStroke="stroke-red-500"
        remainingStroke="stroke-green-500"
      />
    );
    expect(
      screen.getByTestId("circle-outer").classList.contains("stroke-green-500")
    ).toBeTruthy();
  });

  it("type === bar & completedBg prop", async () => {
    render(
      <Progress
        type="bar"
        percent={50}
        variant="info"
        barSize="lg"
        showPercent
        completedBg="bg-red-500"
      />
    );
    expect(
      screen.getByTestId("bar-inner").classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("type === bar & remainingBg prop", async () => {
    render(
      <Progress
        type="bar"
        percent={50}
        variant="info"
        barSize="xs"
        showPercent
        completedBg="bg-red-500"
        remainingBg="bg-green-500"
      />
    );
    expect(
      screen.getByTestId("bar").classList.contains("bg-green-500")
    ).toBeTruthy();
  });

  it("type === bar & fg prop", async () => {
    render(
      <Progress
        type="bar"
        percent={50}
        variant="info"
        barSize="lg"
        showPercent
        completedBg="bg-red-500"
        remainingBg="bg-green-500"
        fg="text-blue-500"
      />
    );
    expect(
      screen.getByTestId("bar-inner").classList.contains("text-blue-500")
    ).toBeTruthy();
  });
});
