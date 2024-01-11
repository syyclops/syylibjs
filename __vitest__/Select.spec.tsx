import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Select from "../src/components/select";
import SelectOption from "../src/components/select/SelectOption";

beforeEach(() => cleanup);

describe("test Select component", () => {
  it("render component", () => {
    render(
      <Select
        variant="primary"
        open={false}
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
  });

  it("open === false prop", () => {
    render(
      <Select
        variant="primary"
        open={false}
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
    expect(screen.getByTestId("select").childNodes.length).toEqual(1);
  });

  it("open === true prop", () => {
    render(
      <Select
        variant="primary"
        open
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
    expect(screen.getByTestId("select").childNodes.length).toEqual(2);
    expect(screen.getByTestId("select-popup")).not.toBeNull();
    expect(
      screen.getByTestId("select-popup").classList.contains("rounded-b-lg")
    ).toBeTruthy();
    expect(screen.getByTestId("select-option")).not.toBeNull();
  });

  it("title prop", () => {
    render(
      <Select
        variant="primary"
        open
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
    expect(screen.getByTitle("Select").innerHTML).toEqual("TEST SELECT TITLE");
  });

  it("onAction prop", () => {
    const onActionMockFn = vi.fn();
    render(
      <Select
        variant="primary"
        open
        onAction={() => onActionMockFn()}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
    fireEvent.click(screen.getByTitle("Select"));
    expect(onActionMockFn).toHaveBeenCalledTimes(1);
  });

  it("onClickAway prop", () => {
    const onClickAwayMockFn = vi.fn();
    render(
      <Select
        variant="primary"
        open
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => onClickAwayMockFn()}
      >
        <SelectOption name="option" onSelect={(n: string) => {}}>
          {" "}
        </SelectOption>
      </Select>
    );
    fireEvent.mouseDown(document);
    expect(onClickAwayMockFn).toHaveBeenCalledTimes(1);
  });

  it("onSelect prop", () => {
    const onSelectMockFn = vi.fn();
    render(
      <Select
        variant="primary"
        open
        onAction={() => {}}
        title="TEST SELECT TITLE"
        onClickAway={() => {}}
      >
        <SelectOption name="option" onSelect={() => onSelectMockFn()}>
          {" "}
        </SelectOption>
      </Select>
    );
    fireEvent.click(screen.getByTestId("select-option"));
    expect(onSelectMockFn).toHaveBeenCalledTimes(1);
  });
});
