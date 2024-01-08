import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Pagination from "../src/components/Pagination";

beforeEach(() => cleanup);

describe("render Pagination.tsx component", () => {
  it("render component", () => {
    render(
      <Pagination
        totalPages={0}
        currentPage={0}
        onPageChange={() => console.log("")}
      />
    );
  });

  it("currentPage === 1 prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={1}
        onPageChange={() => console.log("")}
      />
    );
    expect(
      renderPaginationComponent.getByTestId("previous").getAttribute("disabled")
    ).not.toBeNull();
    expect(
      renderPaginationComponent.getByTestId("next").getAttribute("disabled")
    ).toBeNull();
  });

  it("currentPage > 1 prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={2}
        onPageChange={() => console.log("")}
      />
    );
    fireEvent.click(renderPaginationComponent.getByTestId("first"));
    expect(
      renderPaginationComponent.getByTestId("previous").getAttribute("disabled")
    ).toBeNull();
    expect(
      renderPaginationComponent.getByTestId("next").getAttribute("disabled")
    ).toBeNull();
  });

  it("currentPage === totalPages prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={10}
        onPageChange={() => console.log("")}
      />
    );
    fireEvent.click(renderPaginationComponent.getByTestId("last"));
    expect(
      renderPaginationComponent.getByTestId("previous").getAttribute("disabled")
    ).toBeNull();
    expect(
      renderPaginationComponent.getByTestId("next").getAttribute("disabled")
    ).not.toBeNull();
  });

  it("totalPages prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={() => console.log("")}
      />
    );
    expect(renderPaginationComponent.getByTestId("pages-6")).toBeTruthy();
  });

  it("onPageChange prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
      />
    );
    fireEvent.click(renderPaginationComponent.getByTestId("pages-6"));
  });

  it("size prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
        size="md"
      />
    );
    expect(
      renderPaginationComponent.getByTestId("first").classList.contains("w-8")
    ).toBeTruthy();
    expect(
      renderPaginationComponent.getByTestId("first").classList.contains("h-8")
    ).toBeTruthy();
    expect(
      renderPaginationComponent.getByTestId("pages-6").classList.contains("w-8")
    ).toBeTruthy();
    expect(
      renderPaginationComponent.getByTestId("pages-6").classList.contains("h-8")
    ).toBeTruthy();
    expect(
      renderPaginationComponent.getByTestId("last").classList.contains("w-8")
    ).toBeTruthy();
    expect(
      renderPaginationComponent.getByTestId("last").classList.contains("h-8")
    ).toBeTruthy();
  });

  it("cxActive currentPage prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => {}}
        size="md"
        cxActive="bg-red-500"
      />
    );
    fireEvent.click(renderPaginationComponent.getByTestId("previous"));
    expect(
      renderPaginationComponent
        .getByTestId("pages-6")
        .classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("cxActive currentPage === 1 prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={1}
        onPageChange={(p: number) => {}}
        size="md"
        cxActive="bg-red-500"
      />
    );
    fireEvent.click(renderPaginationComponent.getByTestId("next"));
    expect(
      renderPaginationComponent
        .getByTestId("first")
        .classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("cxActive currentPage === totalPages prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={10}
        onPageChange={(p: number) => {}}
        size="md"
        cxActive="bg-red-500"
      />
    );
    expect(
      renderPaginationComponent
        .getByTestId("last")
        .classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("cxInactive currentPage prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
        size="md"
        cxInactive="bg-red-500"
      />
    );
    expect(
      renderPaginationComponent
        .getByTestId("pages-5")
        .classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("cxInactive currentPage prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
        size="md"
        cxInactive="bg-red-500"
      />
    );
    expect(
      renderPaginationComponent
        .getByTestId("pages-5")
        .classList.contains("bg-red-500")
    ).toBeTruthy();
  });

  it("rounded prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
        size="md"
        cxInactive="bg-red-500"
        rounded
      />
    );
    expect(
      renderPaginationComponent
        .getByTestId("pages-5")
        .classList.contains("rounded-full")
    ).toBeTruthy();
  });

  it("cxNav prop", () => {
    const renderPaginationComponent = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        onPageChange={(p: number) => console.log(p == 5)}
        size="md"
        cxInactive="bg-red-500"
        rounded
        cxNav="bg-green-100"
      />
    );
    expect(
      renderPaginationComponent
        .getByTestId("previous")
        .classList.contains("bg-green-100")
    ).toBeTruthy();
    expect(
      renderPaginationComponent
        .getByTestId("next")
        .classList.contains("bg-green-100")
    ).toBeTruthy();
  });
});
