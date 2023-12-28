import React from "react";
import { cleanup, render } from "@testing-library/react";
import Paragraph from "../components/Paragraph";

beforeEach(() => cleanup);

describe("render Paragraph.tsx component", () => {
  it("render component", () => {
    render(<Paragraph> </Paragraph>);
  });

  it("children prop", () => {
    const renderParagraphComponent = render(
      <Paragraph>TEST PARAGRAPH TEXT</Paragraph>
    );
    expect(renderParagraphComponent.getByTestId("paragraph").innerHTML).toEqual(
      "TEST PARAGRAPH TEXT"
    );
  });

  it("clamp prop", () => {
    const renderParagraphComponent = render(
      <Paragraph clamp={2}>TEST PARAGRAPH TEXT</Paragraph>
    );
    expect(
      renderParagraphComponent
        .getByTestId("paragraph")
        .classList.contains("line-clamp-2")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderParagraphComponent = render(
      <Paragraph clamp={2} cx="text-primary">
        TEST PARAGRAPH TEXT
      </Paragraph>
    );
    expect(
      renderParagraphComponent
        .getByTestId("paragraph")
        .classList.contains("text-primary")
    ).toBeTruthy();
  });
});
