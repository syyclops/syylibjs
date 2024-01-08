import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Toggle from "../src/components/Toggle";

beforeEach(() => cleanup);

describe("render Toggle.tsx component", () => {
  it("render component", () => {
    render(<Toggle onAction={() => {}} on={false} />);
  });

  it("on === false prop", () => {
    const renderToggleComponent = render(
      <Toggle onAction={() => {}} on={false} />
    );
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("translate-x-[1%]")
    ).toBeTruthy();
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("translate-x-[90%]")
    ).toBeFalsy();
  });

  it("on === true prop", () => {
    const renderToggleComponent = render(
      <Toggle onAction={() => {}} on={true} />
    );
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("translate-x-[1%]")
    ).toBeFalsy();
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("translate-x-[90%]")
    ).toBeTruthy();
  });

  it("onAction when on === true prop", () => {
    const renderToggleComponent = render(
      <Toggle
        onAction={(e) => {
          console.log(e === false);
        }}
        on={true}
      />
    );
    fireEvent.click(renderToggleComponent.getByTestId("toggle"));
  });

  it("onAction when on === false prop", () => {
    const renderToggleComponent = render(
      <Toggle
        onAction={(e) => {
          console.log(e === true);
        }}
        on={false}
      />
    );
    fireEvent.click(renderToggleComponent.getByTestId("toggle"));
  });

  it("variant prop", () => {
    const renderToggleComponent = render(
      <Toggle onAction={() => {}} on={true} variant="darkest" />
    );
    expect(
      renderToggleComponent
        .getByTestId("toggle")
        .classList.contains("bg-dark-neutral-300")
    ).toBeTruthy();
  });

  it("size prop", () => {
    const renderToggleComponent = render(
      <Toggle onAction={() => {}} on={true} variant="darkest" size="lg" />
    );
    expect(
      renderToggleComponent
        .getByTestId("toggle")
        .classList.contains("w-[2.2rem]")
    ).toBeTruthy();
    expect(
      renderToggleComponent
        .getByTestId("toggle")
        .classList.contains("h-[1.3rem]")
    ).toBeTruthy();
    expect(
      renderToggleComponent
        .getByTestId("toggle")
        .classList.contains("w-[1.8rem]")
    ).toBeFalsy();
    expect(
      renderToggleComponent
        .getByTestId("toggle")
        .classList.contains("h-[1.15rem]")
    ).toBeFalsy();

    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("w-[1rem]")
    ).toBeTruthy();
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("h-[1rem]")
    ).toBeTruthy();
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("w-[0.8rem]")
    ).toBeFalsy();
    expect(
      renderToggleComponent
        .getByTestId("toggle-dot")
        .classList.contains("h-[0.8rem]")
    ).toBeFalsy();
  });
});
