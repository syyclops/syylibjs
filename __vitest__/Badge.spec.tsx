import React from "react";
import { cleanup, render } from "@testing-library/react";
import Badge from "../src/components/Badge";

beforeEach(() => cleanup);

describe("test Badge.tsx component", () => {
  it("render component", () => {
    render(<Badge text={""} />);
  });

  it("variant prop", () => {
    const renderDotComponent = render(
      <Badge size="lg" variant="lightest" text="" />
    );
    expect(
      renderDotComponent.getByTestId("badge").classList.contains("bg-primary")
    ).toBeFalsy();
    expect(
      renderDotComponent
        .getByTestId("badge")
        .classList.contains("bg-mid-neutral-100")
    ).toBeTruthy();
  });

  it("size component", () => {
    const renderDotComponent = render(<Badge size="lg" text="" />);
    expect(
      renderDotComponent
        .getByTestId("badge")
        .classList.contains("text-[0.6rem]")
    ).toBeFalsy();
    expect(
      renderDotComponent
        .getByTestId("badge")
        .classList.contains("leading-[0.85rem]")
    ).toBeFalsy();
    expect(
      renderDotComponent
        .getByTestId("badge")
        .classList.contains("text-[0.75rem]")
    ).toBeTruthy();
    expect(
      renderDotComponent
        .getByTestId("badge")
        .classList.contains("leading-[1.15rem]")
    ).toBeTruthy();
  });

  it("text prop", () => {
    const renderDotComponent = render(<Badge text="TEST BADGE" />);
    expect(renderDotComponent.getByTestId("badge").innerHTML).toEqual(
      "TEST BADGE"
    );
  });

  it("bg prop", () => {
    const renderBubbleComponent = render(
      <Badge text="TEST BADGE" bg="bg-[#202020]" />
    );
    expect(
      renderBubbleComponent
        .getByTestId("badge")
        .classList.contains("bg-[#202020]")
    ).toBeTruthy();
  });

  it("fg prop", () => {
    const renderBubbleComponent = render(
      <Badge text="TEST BADGE" fg="text-[#000000]" />
    );
    expect(
      renderBubbleComponent
        .getByTestId("badge")
        .classList.contains("text-[#000000]")
    ).toBeTruthy();
  });

  it("with no rounded prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Badge text="TEST BADGE" fg="text-[#000000]" />
    );
    expect(
      renderBubbleComponentWithRounded
        .getByTestId("badge")
        .classList.contains("rounded-sm")
    ).toBeTruthy();
  });

  it("with rounded prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Badge text="TEST BADGE" fg="text-[#000000]" rounded />
    );
    expect(
      renderBubbleComponentWithRounded
        .getByTestId("badge")
        .classList.contains("rounded-full")
    ).toBeTruthy();
  });
});
