import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import TextArea from "../src/components/TextArea";

beforeEach(() => cleanup);

describe("render TextArea.tsx component", () => {
  it("render component", () => {
    render(<TextArea height={0} value="" onType={() => {}} />);
  });

  it("height prop", () => {
    const renderTextAreaComponent = render(
      <TextArea height={10} value="" onType={() => {}} />
    );
    expect(
      renderTextAreaComponent.getByTestId("textarea").getAttribute("rows")
    ).toEqual("10");
  });

  it("value prop", () => {
    const renderTextAreaComponent = render(
      <TextArea height={10} value="TEST TEXTAREA TEXT" onType={() => {}} />
    );
    expect(renderTextAreaComponent.getByTestId("textarea").innerHTML).toEqual(
      "TEST TEXTAREA TEXT"
    );
  });

  it("onType prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={(e) => {
          console.log(e.target.value === "ONCHANGE");
        }}
      />
    );
    fireEvent.change(renderTextAreaComponent.getByTestId("textarea"), {
      target: { value: "ONCHANGE" },
    });
  });

  it("name prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
      />
    );
    expect(
      renderTextAreaComponent.getByTestId("textarea").getAttribute("name")
    ).toEqual("textAreaName");
  });

  it("variant prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("bg-dark-neutral-200")
    ).toBeTruthy();
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("placeholder:text-light-neutral-100")
    ).toBeTruthy();
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("placeholder:text-light-neutral-100")
    ).toBeTruthy();
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("caret-light-neutral-100")
    ).toBeTruthy();
  });

  it("placeholder prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .getAttribute("placeholder")
    ).toEqual("test-placeholder");
  });

  it("rounded prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        rounded
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("rounded-[1.5rem]")
    ).toBeTruthy();
    expect(
      renderTextAreaComponent.getByTestId("textarea").classList.contains("pl-2")
    ).toBeTruthy();
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("rounded-lg")
    ).toBeFalsy();
  });

  it("placeholder prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .getAttribute("placeholder")
    ).toEqual("test-placeholder");
  });

  it("onAction prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
      />
    );
    fireEvent.click(renderTextAreaComponent.getByTestId("textarea"));
  });

  it("cx prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
        cx="border-red-500"
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("border-red-500")
    ).toBeTruthy();
  });

  it("width prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
        cx="border-red-500"
        width={100}
      />
    );
    expect(
      renderTextAreaComponent.getByTestId("textarea").getAttribute("cols")
    ).toEqual("100");
  });

  it("disableResize prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
        cx="border-red-500"
        width={100}
        disableResize
      />
    );
    expect(
      renderTextAreaComponent
        .getByTestId("textarea")
        .classList.contains("resize-none")
    ).toBeTruthy();
  });

  it("onKeyDown prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
        cx="border-red-500"
        width={100}
        disableResize
        onKeyDown={() => {
          console.log("KEYDOWN!");
        }}
      />
    );
    fireEvent.keyDown(renderTextAreaComponent.getByTestId("textarea"));
  });

  it("textAreaDisabled prop", () => {
    const renderTextAreaComponent = render(
      <TextArea
        height={10}
        value="TEST TEXTAREA TEXT"
        onType={() => {}}
        name="textAreaName"
        variant="dark"
        placeholder="test-placeholder"
        onAction={() => console.log("CLICKED!")}
        cx="border-red-500"
        width={100}
        disableResize
        onKeyDown={() => {}}
        textAreaDisabled
      />
    );
    expect(
      renderTextAreaComponent.getByTestId("textarea").getAttribute("disabled")
    ).not.toBeNull();
  });
});
