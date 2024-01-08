import React from "react";
import { cleanup, render } from "@testing-library/react";
import Card from "../src/components/Card";

beforeEach(() => cleanup);

describe("test Card.tsx component", () => {
  it("render component", () => {
    render(
      <Card>
        <></>
      </Card>
    );
  });

  it("children prop", () => {
    const renderCardComponent = render(
      <Card>
        <>TEST CARD</>
      </Card>
    );
    expect(renderCardComponent.getByTestId("card").childNodes.length).toEqual(
      1
    );
  });

  it("width prop", () => {
    const renderCardComponent = render(
      <Card width="w-[20rem]">
        <>TEST CARD</>
      </Card>
    );
    expect(
      renderCardComponent.getByTestId("card").classList.contains("w-full")
    ).toBeFalsy();
    expect(
      renderCardComponent.getByTestId("card").classList.contains("w-[20rem]")
    ).toBeTruthy();
  });

  it("height prop", () => {
    const renderCardComponent = render(
      <Card width="w-[20rem]" height="h-[10rem]">
        <>TEST CARD</>
      </Card>
    );
    expect(
      renderCardComponent.getByTestId("card").classList.contains("h-auto")
    ).toBeFalsy();
    expect(
      renderCardComponent.getByTestId("card").classList.contains("h-[10rem]")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderCardComponent = render(
      <Card cx="rounded-xl border border-t-[#454545]">
        <>TEST CARD</>
      </Card>
    );
    expect(
      renderCardComponent.getByTestId("card").classList.contains("rounded-xl")
    ).toBeTruthy();
    expect(
      renderCardComponent.getByTestId("card").classList.contains("border")
    ).toBeTruthy();
    expect(
      renderCardComponent
        .getByTestId("card")
        .classList.contains("border-t-[#454545]")
    ).toBeTruthy();
  });
});
