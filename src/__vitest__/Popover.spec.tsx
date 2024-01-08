import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Popover from "../components/Popover";
import { vi } from "vitest";

beforeEach(() => cleanup);

const createMouseEvent = (type: string) => new MouseEvent(type);

describe("test Popover.tsx component", () => {
  it("render component", () => {
    render(
      <Popover content={<div />} open={false} onClickAway={() => {}}>
        <div />
      </Popover>
    );
  });

  it("open prop", () => {
    const renderPopoverComponent = render(
      <Popover content={<div />} open={true} onClickAway={() => {}}>
        <div />
      </Popover>
    );
    expect(renderPopoverComponent.queryByTestId("popover")).not.toBeNull();
  });

  it("events", () => {
    const addEventListenerSpy = vi.spyOn(document, "addEventListener");
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    const renderPopoverComponent = render(
      <Popover
        content={<div />}
        open={true}
        onClickAway={() => {
          console.log("CLICKED!");
        }}
      >
        <div />
      </Popover>
    );
    fireEvent.mouseDown(renderPopoverComponent.getByTestId("popover"));
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    );
    renderPopoverComponent.unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "mousedown",
      expect.any(Function)
    );
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
    const onClickAwayMock = vi.fn();
    render(
      <Popover content={<div />} open={true} onClickAway={onClickAwayMock}>
        <div></div>
      </Popover>
    );
    fireEvent(document, createMouseEvent("mousedown"));
    expect(onClickAwayMock).toHaveBeenCalled();
  });

  it("children prop", () => {
    const renderPopoverComponent = render(
      <Popover content="" open={true} onClickAway={() => {}}>
        TEST POPOVER TEXT
      </Popover>
    );
    expect(renderPopoverComponent.getByTestId("popover").innerHTML).toContain(
      "TEST POPOVER TEXT"
    );
  });

  it("content prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(renderPopoverComponent.getByTestId("content").innerHTML).toContain(
      "TEST POPOVER CONTENT"
    );
  });

  it("variant prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
        variant="primary"
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("bg-primary")
    ).toBeTruthy();
  });

  it("position prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
        variant="primary"
        position="left-bottom"
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("right-[100%]")
    ).toBeTruthy();
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("before:left-[100%]")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
        variant="primary"
        position="left-bottom"
        cx="border-red-500"
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("border-red-500")
    ).toBeTruthy();
  });

  it("width prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
        variant="primary"
        position="left-bottom"
        cx="border-red-500"
        width="w-[20rem]"
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("w-[20rem]")
    ).toBeTruthy();
  });

  it("rounded prop", () => {
    const renderPopoverComponent = render(
      <Popover
        content="TEST POPOVER CONTENT"
        open={true}
        onClickAway={() => {}}
        variant="primary"
        position="left-bottom"
        cx="border-red-500"
        width="w-[20rem]"
        rounded="rounded-2xl"
      >
        TEST POPOVER TEXT
      </Popover>
    );
    expect(
      renderPopoverComponent
        .getByTestId("content")
        .classList.contains("rounded-2xl")
    ).toBeTruthy();
  });
});
