import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Input from "../src/components/Input";
import { BiLeftArrow } from "react-icons/bi";

beforeEach(() => cleanup);

describe("render Input.tsx component", () => {
  it("render component", () => {
    render(<Input type="text" value="" onType={() => {}} />);
  });

  it("type === text prop", () => {
    const renderInputComponent = render(
      <Input type="text" value="" onType={() => {}} />
    );
    expect(
      renderInputComponent.getByTestId("input").getAttribute("type")
    ).toEqual("text");
  });

  it("type === password prop", () => {
    const renderInputComponent = render(
      <Input type="password" value="" onType={() => {}} />
    );
    expect(
      renderInputComponent.getByTestId("input").getAttribute("type")
    ).toEqual("password");
  });

  it("type === email prop", () => {
    const renderInputComponent = render(
      <Input type="email" value="" onType={() => {}} />
    );
    expect(
      renderInputComponent.getByTestId("input").getAttribute("type")
    ).toEqual("email");
  });

  it("value prop", () => {
    const renderInputComponent = render(
      <Input type="text" value="TEST INPUT TEXT" onType={() => {}} />
    );
    expect(
      renderInputComponent.getByTestId("input").getAttribute("value")
    ).toEqual("TEST INPUT TEXT");
  });

  it("onType prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
      />
    );
    fireEvent.change(renderInputComponent.getByTestId("input"));
  });

  it("placeholder prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
        placeholder="Enter Something!"
      />
    );
    expect(
      renderInputComponent.getByTestId("input").getAttribute("placeholder")
    ).toEqual("Enter Something!");
  });

  it("rounded prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
        placeholder="Enter Something!"
        rounded
      />
    );
    expect(
      renderInputComponent
        .getByTestId("input-holder")
        .classList.contains("rounded-full")
    ).toBeTruthy();
    expect(
      renderInputComponent
        .getByTestId("input")
        .classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("onClick prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
        onClick={() => {
          console.log("CLICKED!");
        }}
      />
    );
    fireEvent.click(renderInputComponent.getByTestId("input-holder"));
  });

  it("leftIcon prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
        onClick={() => {
          console.log("CLICKED!");
        }}
        leftIcon={BiLeftArrow}
      />
    );
    expect(renderInputComponent.getByTestId("left-icon")).toBeTruthy();
  });

  it("rightIcon & value === '' prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value=""
        onType={() => {
          console.log("TYPED!");
        }}
        onClick={() => {
          console.log("CLICKED!");
        }}
        rightIcon={BiLeftArrow}
      />
    );
    expect(renderInputComponent.getByTestId("right-icon")).toBeTruthy();
    fireEvent.click(renderInputComponent.getByTestId("right-icon"));
  });

  it("rightIcon & value !== '' prop", () => {
    const renderInputComponent = render(
      <Input
        type="text"
        value="TEST INPUT TEXT"
        onType={() => {
          console.log("TYPED!");
        }}
        onClick={() => {
          console.log("CLICKED!");
        }}
        rightIcon={BiLeftArrow}
      />
    );
    expect(renderInputComponent.getByTestId("right-icon")).toBeTruthy();
    fireEvent.click(renderInputComponent.getByTestId("right-icon"));
  });
});
