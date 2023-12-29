import React from "react";
import { cleanup, render } from "@testing-library/react";
import Collapse from "../components/Collapse";

beforeEach(() => cleanup);

describe("render Collapse.tsx component", () => {
  it("render component", () => {
    render(<Collapse isOpen={false} content={<></>} />);
  });

  it("variant prop", () => {
    const renderCollapseComponent = render(
      <Collapse isOpen={false} content={<></>} variant="secondary" />
    ).getByTestId("collapse");
    expect(
      renderCollapseComponent.classList.contains("bg-secondary")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderCheckboxComponent = render(
      <Collapse
        isOpen={false}
        content={<></>}
        variant="secondary"
        cx="animate-ping"
      />
    ).getByTestId("collapse");
    expect(
      renderCheckboxComponent.classList.contains("animate-ping")
    ).toBeTruthy();
  });

  it("isOpen & content prop", () => {
    const renderCheckboxComponent = render(
      <Collapse
        isOpen={true}
        content="TEST COLLAPSE TEXT"
        variant="secondary"
        cx="animate-ping"
      />
    ).getByTestId("collapse");
    expect(renderCheckboxComponent.innerHTML).toEqual("TEST COLLAPSE TEXT");
  });
});
