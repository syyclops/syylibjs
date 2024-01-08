import React from "react";
import { cleanup, fireEvent, render, within } from "@testing-library/react";
import Checkbox from "../src/components/Checkbox";

beforeEach(() => cleanup);

describe("test Checkbox.tsx component", () => {
  it("render component", () => {
    render(<Checkbox checked={false} onAction={() => {}} />);
  });

  it("checked(false) prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox checked={false} onAction={() => {}} />
    ).getByTestId("checkbox");
    const renderCheckboxTickComponent = within(
      renderCheckboxComponent
    ).getByTestId("tick");
    expect(renderCheckboxTickComponent.style.color).toEqual("rgba(0, 0, 0, 0)");
  });

  it("checked(true) prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox
        checked
        onAction={() => {
          console.log("click event occured!");
        }}
      />
    ).getByTestId("checkbox");
    fireEvent.click(renderCheckboxComponent);
  });

  it("variant prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox
        checked
        onAction={() => {
          console.log("click event occured!");
        }}
        variant="secondary"
      />
    ).getByTestId("checkbox");
    expect(
      renderCheckboxComponent.classList.contains("bg-secondary")
    ).toBeTruthy();
  });

  it("size prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox
        checked
        onAction={() => {
          console.log("click event occured!");
        }}
        variant="secondary"
        size="xs"
      />
    ).getByTestId("checkbox");
    expect(renderCheckboxComponent.classList.contains("w-4")).toBeFalsy();
    expect(renderCheckboxComponent.classList.contains("w-4")).toBeFalsy();
    expect(renderCheckboxComponent.classList.contains("text-sm")).toBeFalsy();
    expect(renderCheckboxComponent.classList.contains("w-3")).toBeTruthy();
    expect(renderCheckboxComponent.classList.contains("h-3")).toBeTruthy();
    expect(renderCheckboxComponent.classList.contains("text-xs")).toBeTruthy();
  });

  it("rounded prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox
        checked
        onAction={() => {
          console.log("click event occured!");
        }}
        variant="secondary"
        size="xs"
        rounded
      />
    ).getByTestId("checkbox");
    expect(
      renderCheckboxComponent.classList.contains("rounded-sm")
    ).toBeFalsy();
    expect(
      renderCheckboxComponent.classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderCheckboxComponent = render(
      <Checkbox
        checked
        onAction={() => {
          console.log("click event occured!");
        }}
        variant="secondary"
        size="xs"
        rounded
        cx="animate-pluse"
      />
    ).getByTestId("checkbox");
    expect(
      renderCheckboxComponent.classList.contains("animate-pluse")
    ).toBeTruthy();
  });
});
