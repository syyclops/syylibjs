import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Sample from "../vitest/Sample";

beforeEach(() => cleanup);

describe("test sample component", () => {
  it("render component", () => {
    render(<Sample bg="red" text="SAMPLE" />);
  });

  it("background-color and text", () => {
    render(<Sample bg="red" text="SAMPLE" />);
    expect(screen.getByTestId("sample").style.backgroundColor).toBe("red");
    expect(screen.getByTestId("sample").textContent).toBe("SAMPLE");
  });

  it("padding", () => {
    render(<Sample bg="red" text="SAMPLE" />);
    expect(screen.getByTestId("sample").style.padding).toBe("10px");
    expect(screen.getByTestId("sample").style.padding).not.toBe("5px");
  });

  it("childNodes length", () => {
    const renderComponent = render(<Sample bg="red" text="SAMPLE" />);
    expect(renderComponent.getByTestId("sample").childNodes.length).toEqual(1);
  });
});
