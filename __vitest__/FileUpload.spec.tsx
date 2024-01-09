import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import FileUpload from "../src/components/FileUpload";

beforeEach(() => cleanup);

describe("render FileUpload.tsx component", () => {
  it("render component", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id=""
      >
        <></>
      </FileUpload>
    );
  });

  it("onClick event", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id=""
      >
        <></>
      </FileUpload>
    );
    const fileInput = screen.getByTitle("upload");
    fireEvent.click(fileInput.parentElement!);
    expect(fileInput.parentElement!).toBeInTheDocument();
  });

  it("onDragOver prop", () => {
    const mockOnDragOver = vi.fn();
    render(
      <FileUpload
        onDragOver={mockOnDragOver}
        onDrop={() => {}}
        onChange={() => {}}
        id=""
      >
        <></>
      </FileUpload>
    );
    fireEvent.dragOver(screen.getByTestId("file-upload"));
    expect(mockOnDragOver).toHaveBeenCalled();
  });

  it("onDrop prop", () => {
    const mockOnDrop = vi.fn();
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={mockOnDrop}
        onChange={() => {}}
        id=""
      >
        <></>
      </FileUpload>
    );
    fireEvent.drop(screen.getByTestId("file-upload"));
    expect(mockOnDrop).toHaveBeenCalled();
  });

  it("onChange prop", () => {
    const mockOnChange = vi.fn();
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={mockOnChange}
        id=""
      >
        <></>
      </FileUpload>
    );
    fireEvent.change(screen.getByTitle("upload"));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("children prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id=""
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen
        .getByTestId("file-upload")
        .innerHTML.includes("TEST FILE UPLOAD TEXT")
    ).toBeTruthy();
  });

  it("id prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(screen.getByTitle("upload").id).toEqual("test-id");
  });

  it("width prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen.getByTestId("file-upload").classList.contains("w-[22rem]")
    ).toBeTruthy();
  });

  it("width prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
        height="h-[10rem]"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen.getByTestId("file-upload").classList.contains("h-[10rem]")
    ).toBeTruthy();
  });

  it("border prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
        height="h-[10rem]"
        border="border-red-500"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen.getByTestId("file-upload").classList.contains("border-red-500")
    ).toBeTruthy();
  });

  it("bg prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
        height="h-[10rem]"
        border="border-red-500"
        bg="bg-blue-500"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen.getByTestId("file-upload").classList.contains("bg-blue-500")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
        height="h-[10rem]"
        border="border-red-500"
        bg="bg-blue-500"
        cx="animate-pulse"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(
      screen.getByTestId("file-upload").classList.contains("animate-pulse")
    ).toBeTruthy();
  });

  it("include prop", () => {
    render(
      <FileUpload
        onDragOver={() => {}}
        onDrop={() => {}}
        onChange={() => {}}
        id="test-id"
        width="w-[22rem]"
        height="h-[10rem]"
        border="border-red-500"
        bg="bg-blue-500"
        cx="animate-pulse"
        include=".png"
      >
        <>TEST FILE UPLOAD TEXT</>
      </FileUpload>
    );
    expect(screen.getByTitle("upload").getAttribute("accept")).toEqual(".png");
  });
});
