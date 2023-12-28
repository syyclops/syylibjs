import React from "react";
import { cleanup, render } from "@testing-library/react";
import Title from "../components/Title";

beforeEach(() => cleanup);

describe("render Title.tsx component", () => {
  it("render component", () => {
    render(<Title text="" element="h1" />);
  });

  it("text & element props", () => {
    const renderTitleComponent = render(
      <Title text="TEXT TITLE TEXT" element="h1" />
    );
    expect(renderTitleComponent.getByTestId("title").innerHTML).toEqual(
      "TEXT TITLE TEXT"
    );
    expect(renderTitleComponent.getByTestId("title").title).toEqual(
      "TEXT TITLE TEXT"
    );
    expect(
      renderTitleComponent.getByTestId("title").classList.contains("text-3xl")
    ).toBeTruthy();
    expect(
      renderTitleComponent.getByTestId("title").classList.contains("font-bold")
    ).toBeTruthy();
  });

  it("align prop", () => {
    const renderTitleComponent = render(
      <Title text="TEXT TITLE TEXT" element="h1" align="center" />
    );
    expect(
      renderTitleComponent
        .getByTestId("title")
        .classList.contains("text-center")
    ).toBeTruthy();
  });

  it("color prop", () => {
    const renderTitleComponent = render(
      <Title
        text="TEXT TITLE TEXT"
        element="h1"
        align="center"
        color="text-light-neutral-300"
      />
    );
    expect(
      renderTitleComponent
        .getByTestId("title")
        .classList.contains("text-light-neutral-300")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderTitleComponent = render(
      <Title
        text="TEXT TITLE TEXT"
        element="h1"
        align="center"
        color="text-light-neutral-300"
        cx="text-sm"
      />
    );
    expect(
      renderTitleComponent.getByTestId("title").classList[
        renderTitleComponent.getByTestId("title").classList.length - 1
      ]
    ).toEqual("text-sm");
  });
});
