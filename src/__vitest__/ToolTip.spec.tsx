import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ToolTip from "../components/ToolTip";

beforeEach(() => cleanup);

describe("render ToolTip.tsx component", () => {
  it("render component", () => {
    render(<ToolTip children={<div />} title="" />);
  });

  it("children prop", () => {
    const renderToolTipComponent = render(
      <ToolTip title="">HOVER ME!</ToolTip>
    );
    expect(renderToolTipComponent.getByTestId("tooltip").innerHTML).toEqual(
      "HOVER ME!"
    );
  });

  it("title prop", () => {
    const renderToolTipComponent = render(
      <ToolTip title="HOVERED!">HOVER ME!</ToolTip>
    );
    fireEvent.mouseOver(renderToolTipComponent.getByTestId("tooltip"));
    expect(renderToolTipComponent.getByTestId("tooltip-title")).toBeTruthy();
    expect(
      renderToolTipComponent.getByTestId("tooltip-title").innerHTML
    ).toEqual("HOVERED!");
    fireEvent.mouseOut(renderToolTipComponent.getByTestId("tooltip"));
    expect(renderToolTipComponent.queryByTestId("tooltip-title")).toBeNull();

    fireEvent.focus(renderToolTipComponent.getByTestId("tooltip"));
    expect(renderToolTipComponent.getByTestId("tooltip-title")).toBeTruthy();
    fireEvent.blur(renderToolTipComponent.getByTestId("tooltip"));
    expect(renderToolTipComponent.queryByTestId("tooltip-title")).toBeNull();
  });

  it("variant prop", () => {
    const renderToolTipComponent = render(
      <ToolTip title="HOVERED!" variant="light">
        HOVER ME!
      </ToolTip>
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("bg-light-neutral-300")
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("text-dark-neutral-200")
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("border-light-neutral-300")
    );
  });

  it("position prop", () => {
    const renderToolTipComponent = render(
      <ToolTip title="HOVERED!" variant="light" position="bottom-right">
        HOVER ME!
      </ToolTip>
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("right-0")
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("before:right-0")
    );
  });

  it("width prop", () => {
    const renderToolTipComponent = render(
      <ToolTip
        title="HOVERED!"
        variant="light"
        position="bottom-right"
        width="w-[20rem]"
      >
        HOVER ME!
      </ToolTip>
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("w-[20rem]")
    );
  });

  it("cx prop", () => {
    const renderToolTipComponent = render(
      <ToolTip
        title="HOVERED!"
        variant="light"
        position="bottom-right"
        width="w-[20rem]"
        cx="text-[#000000]"
      >
        HOVER ME!
      </ToolTip>
    );
    expect(
      renderToolTipComponent
        .getByTestId("tooltip")
        .classList.contains("text-[#000000]")
    );
  });
});
