import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import PieChart from "../src/components/PieChart";

beforeEach(() => cleanup);

describe("render PieChart.tsx component", () => {
  it("render component", () => {
    render(<PieChart circles={[]} />);
  });

  it("circles prop", () => {
    render(
      <PieChart
        circles={[
          { percentage: 90, variant: "error" },
          { percentage: 50, variant: "warning" },
          { percentage: 20, variant: "success" },
        ]}
      />
    );
    expect(screen.getByTestId("circle-svg").childNodes[0]).toBeTruthy();
    expect(screen.getByTestId("circle-svg").childNodes[1]).toBeTruthy();
    expect(screen.getByTestId("circle-svg").childNodes[2]).toBeTruthy();
    expect(screen.getByTestId("circle-svg").childNodes[3]).toBeFalsy();

    expect(
      screen.getByTestId("circle-error").classList.contains("stroke-error")
    ).toBeTruthy();
    expect(
      screen.getByTestId("circle-warning").classList.contains("stroke-warning")
    ).toBeTruthy();
    expect(
      screen.getByTestId("circle-success").classList.contains("stroke-success")
    ).toBeTruthy();
  });

  it("size prop", () => {
    render(
      <PieChart
        circleSize={58}
        circles={[
          { percentage: 90, variant: "error" },
          { percentage: 50, variant: "warning" },
          { percentage: 20, variant: "success" },
        ]}
      />
    );
    expect(
      screen.getByTestId("circle-error").getAttribute("stroke-dashoffset")
    ).toEqual("16.0346889039223");
    expect(
      screen.getByTestId("circle-warning").getAttribute("stroke-dashoffset")
    ).toEqual("80.17344451961152");
    expect(
      screen.getByTestId("circle-success").getAttribute("stroke-dashoffset")
    ).toEqual("128.27751123137844");
  });
});
