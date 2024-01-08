import React from "react";
import { cleanup, render } from "@testing-library/react";
import Action from "../src/components/Action";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { BiLoader } from "react-icons/bi";

beforeEach(() => cleanup);

describe("render Action.tsx component", () => {
  it("render component", () => {
    render(
      <Action type="button" onAction={() => {}}>
        <></>
      </Action>
    );
  });

  it("type === icon  prop", () => {
    const renderActionComponent = render(
      <Action type="icon" onAction={() => {}}>
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("action")
        .classList.contains("opacity-100")
    ).toBeTruthy();
  });

  it("type === icon & variant === transparent prop", () => {
    const renderActionComponent = render(
      <Action type="icon" variant="transparent" onAction={() => {}}>
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("action")
        .classList.contains("opacity-100")
    ).toBeFalsy();
  });

  it("type === icon & variant === secondary prop", () => {
    const renderActionComponent = render(
      <Action variant="secondary" type="icon" onAction={() => {}}>
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("action")
        .classList.contains("opacity-100")
    ).toBeTruthy();
    expect(
      renderActionComponent
        .getByTestId("action")
        .classList.contains("bg-secondary")
    ).toBeTruthy();
  });

  it("type === button prop", () => {
    const renderActionComponent = render(
      <Action type="button" variant="secondary" onAction={() => {}}>
        <></>
      </Action>
    );
    expect(
      renderActionComponent.getByTestId("action").classList.contains("py-1.5")
    ).toBeTruthy();
  });

  it("children prop", () => {
    const renderActionComponent = render(
      <Action type="button" onAction={() => {}}>
        TEST ACTION TEXT
      </Action>
    );
    expect(renderActionComponent.getByTestId("action").innerHTML).toEqual(
      "TEST ACTION TEXT"
    );
  });

  it("rightIcon prop", () => {
    const renderActionComponent = render(
      <Action
        type="button"
        onAction={() => {}}
        rightIcon={BiRightArrow}
        iconSize={20}
      >
        TEST ACTION TEXT
      </Action>
    );
    expect(renderActionComponent.getByTestId("right-icon")).toBeTruthy();
  });

  it("leftIcon prop", () => {
    const renderActionComponent = render(
      <Action
        type="button"
        onAction={() => {}}
        leftIcon={BiLeftArrow}
        iconSize={20}
      >
        TEST ACTION TEXT
      </Action>
    );
    expect(renderActionComponent.getByTestId("left-icon")).toBeTruthy();
  });

  it("with no rounded prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Action type="button" onAction={() => {}}>
        TEST ACTION TEXT
      </Action>
    );
    expect(
      renderBubbleComponentWithRounded
        .getByTestId("action")
        .classList.contains("rounded-lg")
    ).toBeTruthy();
  });

  it("with rounded prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Action type="button" onAction={() => {}} rounded>
        TEST ACTION TEXT
      </Action>
    );
    expect(
      renderBubbleComponentWithRounded
        .getByTestId("action")
        .classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("clickable prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Action type="button" onAction={() => {}} rounded clickable={false}>
        TEST ACTION TEXT
      </Action>
    );
    expect(
      renderBubbleComponentWithRounded
        .getByTestId("action")
        .classList.contains("cursor-not-allowed")
    ).toBeTruthy();
  });

  it("loading prop", () => {
    const renderBubbleComponentWithRounded = render(
      <Action
        type="button"
        onAction={() => {}}
        rounded
        clickable={false}
        loading
      >
        TEST ACTION TEXT
      </Action>
    );
    expect(renderBubbleComponentWithRounded.getByTestId("loader")).toBeTruthy();
  });

  it("type === icon & variant === primary & loading prop", () => {
    const renderActionComponent = render(
      <Action
        variant="primary"
        type="icon"
        onAction={() => {}}
        clickable
        loading
      >
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("loader")
        .classList.contains("bg-primary")
    ).toBeTruthy();
  });

  it("type === icon & loading prop", () => {
    const renderActionComponent = render(
      <Action type="icon" onAction={() => {}} rounded clickable loading>
        <></>
      </Action>
    );
    expect(renderActionComponent.getByTestId("loader")).toBeTruthy();
  });

  it("animate prop", () => {
    const renderActionComponent = render(
      <Action
        type="button"
        onAction={() => {}}
        rounded
        clickable
        loading
        animate
      >
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("spinner")
        .classList.contains("animate-spin")
    ).toBeTruthy();
  });

  it("loadingIcon prop", () => {
    const renderActionComponent = render(
      <Action
        type="button"
        onAction={() => {}}
        rounded
        clickable
        loading
        animate
        loadingIcon={BiLoader}
      >
        <></>
      </Action>
    );
    expect(
      renderActionComponent
        .getByTestId("spinner")
        .classList.contains("animate-spin")
    ).toBeTruthy();
  });
});
