import React from "react";
import { cleanup, render } from "@testing-library/react";
import Dot from "../src/components/Dot";

beforeEach(() => cleanup);

describe("test Dot.tsx component", () => {
  it("render component", () => {
    render(<Dot />);
  });

  it("size component", () => {
    const renderDotComponent = render(<Dot size="lg" />);
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("w-6")
    ).toBeFalsy();
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("h-6")
    ).toBeFalsy();
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("w-3.5")
    ).toBeTruthy();
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("h-3.5")
    ).toBeTruthy();
  });

  it("variant prop", () => {
    const renderDotComponent = render(<Dot size="lg" variant="lightest" />);
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("bg-primary")
    ).toBeFalsy();
    expect(
      renderDotComponent
        .getByTestId("dot")
        .classList.contains("bg-mid-neutral-100")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderDotComponent = render(
      <Dot size="lg" variant="lightest" cx="rounded-2xl" />
    );
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("bg-primary")
    ).toBeFalsy();
    expect(
      renderDotComponent.getByTestId("dot").classList.contains("rounded-2xl")
    ).toBeTruthy();
  });
});
