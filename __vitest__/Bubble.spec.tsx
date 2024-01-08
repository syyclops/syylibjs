import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Bubble from "../src/components/Bubble";

beforeEach(() => cleanup);

describe("test Bubble.tsx component", () => {
  it("render component", () => {
    render(<Bubble text="" />);
  });

  it("text prop", () => {
    const renderBubbleComponent = render(<Bubble text="TEST TEXT" />);
    expect(renderBubbleComponent.getByTestId("bubble").innerHTML).toEqual(
      "TEST TEXT"
    );
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("cursor-pointer")
    ).toBeFalsy();
  });

  it("onAction prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
      />
    );
    fireEvent.click(renderBubbleComponent.getByTestId("bubble"));
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("cursor-pointer")
    ).toBeTruthy();
  });

  it("variant prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
      />
    );
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("bg-primary")
    ).toBeFalsy();
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("bg-dark-neutral-300")
    ).toBeTruthy();
  });

  it("size prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
        size="md"
      />
    );
    expect(
      renderBubbleComponent.getByTestId("bubble").classList.contains("w-6")
    ).toBeFalsy();
    expect(
      renderBubbleComponent.getByTestId("bubble").classList.contains("h-6")
    ).toBeFalsy();
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("text-[0.55rem]")
    ).toBeFalsy();
    expect(
      renderBubbleComponent.getByTestId("bubble").classList.contains("w-7")
    ).toBeTruthy();
    expect(
      renderBubbleComponent.getByTestId("bubble").classList.contains("h-7")
    ).toBeTruthy();
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("text-[0.6rem]")
    ).toBeTruthy();
  });

  it("tooltip prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
        size="md"
        tooltip={true}
      />
    );
    expect(renderBubbleComponent.getByTestId("bubble").title).toEqual(
      "TEST TEXT"
    );
  });

  it("animate prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
        size="md"
        tooltip={true}
        animate={true}
      />
    );
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("hover:-translate-y-[0.05rem]")
    ).toBeTruthy();
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("transition")
    ).toBeTruthy();
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("duration-100")
    ).toBeTruthy();
  });

  it("bg prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
        size="md"
        tooltip={true}
        animate={true}
        bg="bg-[#202020]"
      />
    );
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("bg-[#202020]")
    ).toBeTruthy();
  });

  it("fg prop", () => {
    const renderBubbleComponent = render(
      <Bubble
        text="TEST TEXT"
        onAction={() => {
          console.log("onAction event occured!");
        }}
        variant="darkest"
        size="md"
        tooltip={true}
        animate={true}
        fg="text-[#000000]"
      />
    );
    expect(
      renderBubbleComponent
        .getByTestId("bubble")
        .classList.contains("text-[#000000]")
    ).toBeTruthy();
  });
});
