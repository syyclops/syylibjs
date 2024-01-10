import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Toast from "../src/components/Toast";
import { vi } from "vitest";

beforeEach(() => {
  cleanup();
  vi.useFakeTimers();
});

describe("render Toast.tsx component", () => {
  it("render component", () => {
    render(<Toast open={false} message="" onClose={() => {}} />);
  });

  it("open === false prop", () => {
    const renderToastComponent = render(
      <Toast open={false} message="" onClose={() => {}} />
    );
    expect(renderToastComponent.queryByTestId("toast")).toBeNull();
  });

  it("open === true prop", () => {
    const renderToastComponent = render(
      <Toast open={true} message="" onClose={() => {}} />
    );
    expect(renderToastComponent.queryByTestId("toast")).not.toBeNull();
  });

  it("message prop", () => {
    const renderToastComponent = render(
      <Toast open={true} message="TEST TOAST TEXT" onClose={() => {}} />
    );
    expect(renderToastComponent.getByTestId("toast-message").innerHTML).toEqual(
      "TEST TOAST TEXT"
    );
  });

  it("timeout prop", async () => {
    vi.useFakeTimers();
    const onCloseMock = vi.fn();
    render(
      <Toast
        message="Test Message"
        open={true}
        timeout={1}
        onClose={onCloseMock}
      />
    );
    vi.runAllTimers();
    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
    vi.useRealTimers();
  });

  it("position & placement props", () => {
    render(
      <Toast
        message="Test Message"
        open={true}
        position="absolute"
        placement={{ horizontal: "left", vertical: "top" }}
        onClose={() => {}}
      />
    );

    expect(
      screen.getByTestId("toast").classList.contains("absolute")
    ).toBeTruthy();
    expect(
      screen.getByTestId("toast").classList.contains("left-10")
    ).toBeTruthy();
    expect(
      screen.getByTestId("toast").classList.contains("top-0")
    ).toBeTruthy();
  });

  it("variant prop", () => {
    render(
      <Toast
        message="Test Message"
        open={true}
        variant="error"
        onClose={() => {}}
      />
    );
    expect(
      screen.getByTestId("toast").classList.contains("bg-error")
    ).toBeTruthy();
  });

  it("onClose prop", () => {
    const onCloseMock = vi.fn();
    render(<Toast message="Test Message" open={true} onClose={onCloseMock} />);
    fireEvent.click(screen.getByTestId("close"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("position === 'static'", () => {
    render(
      <Toast
        message="Test Message"
        open={true}
        position="static"
        onClose={() => {}}
      />
    );
    expect(screen.queryByTestId("toast")).not.toBeNull();
  });
});
