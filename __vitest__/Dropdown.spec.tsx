import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Dropdown from "../src/components/dropdown";
import DropdownOption from "../src/components/dropdown/DropdownOption";

beforeEach(() => cleanup);

describe("it Dropdown component", () => {
  it("render component", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open={false}
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          {" "}
        </DropdownOption>
      </Dropdown>
    );
  });

  it("open === false prop", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open={false}
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          {" "}
        </DropdownOption>
      </Dropdown>
    );
    expect(screen.getByTestId("dropdown").childNodes.length).toEqual(1);
  });

  it("open === true prop", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    expect(screen.getByTestId("dropdown").childNodes.length).toEqual(2);
    expect(screen.getByTestId("dropdown-popup")).not.toBeNull();
    expect(screen.getByTestId("dropdown-option")).not.toBeNull();
  });

  it("title prop", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    expect(screen.getByTestId("action").innerHTML).toEqual(
      "TEST DROPDOWN TITLE"
    );
  });

  it("onAction prop", () => {
    const onActionMockFn = vi.fn();
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => onActionMockFn()}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    fireEvent.click(screen.getByTestId("action"));
    expect(onActionMockFn).toHaveBeenCalledTimes(1);
  });

  it("onClickAway prop", () => {
    const onClickAwayMockFn = vi.fn();
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => onClickAwayMockFn()}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    fireEvent.mouseDown(document);
    expect(onClickAwayMockFn).toHaveBeenCalledTimes(1);
  });

  it("rounded prop", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
        rounded={true}
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    expect(
      screen.getByTestId("dropdown").classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("position === right prop", () => {
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
        rounded={true}
        position="right"
      >
        <DropdownOption name="logout" onSelect={(n: string) => {}}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    expect(
      screen.getByTestId("dropdown").classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("onSelect prop", () => {
    const onSelectMockFn = vi.fn();
    render(
      <Dropdown
        type="icon"
        variant="primary"
        open
        onAction={() => {}}
        title={<>TEST DROPDOWN TITLE</>}
        onClickAway={() => {}}
      >
        <DropdownOption name="logout" onSelect={() => onSelectMockFn()}>
          OPTION 1
        </DropdownOption>
      </Dropdown>
    );
    fireEvent.click(screen.getByTestId("dropdown-option"));
    expect(onSelectMockFn).toHaveBeenCalledTimes(1);
  });
});
