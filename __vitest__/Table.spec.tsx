import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Table from "../src/components/table/Table";
import TableHeader from "../src/components/table/TableHeader";
import TableRow from "../src/components/table/TableRow";
import TableHead from "../src/components/table/TableHead";
import TableBody from "../src/components/table/TableBody";
import TableDef from "../src/components/table/TableDef";
import TableFooter from "../src/components/table/TableFooter";

const headerClickMock = vi.fn();
const rowClickMock = vi.fn();
const headClickMock = vi.fn();
const bodyClickMock = vi.fn();
const defClickMock = vi.fn();
const footerClickMock = vi.fn();

type HeaderProps = {
  label: string;
  key: string;
};

type RowProps = {
  cid: number;
  city: string;
  country: string;
  pincode: string;
};

const header = [
  { label: "CID", key: "cid" },
  { label: "City", key: "city" },
  { label: "Country", key: "country" },
  { label: "Pincode", key: "pincode" },
];

const rows = [
  {
    city: "Lake Katelynnboro",
    country: "Palau",
    pincode: "66169",
    cid: 1,
  },
  {
    city: "Kavonview",
    country: "Kuwait",
    pincode: "05568",
    cid: 2,
  },
  {
    city: "South Francesco",
    country: "Ukraine",
    pincode: "33239",
    cid: 3,
  },
  {
    city: "Fountain Valley",
    country: "Benin",
    pincode: "96677",
    cid: 4,
  },
];

const TableComponent = () => {
  return (
    <Table>
      <TableHeader onClick={() => headerClickMock()} sticky cx="bg-red-100">
        <TableRow onClick={() => rowClickMock()} cx="bg-red-200">
          {header.map((head: HeaderProps) => {
            return (
              <TableHead
                onClick={() => headClickMock()}
                cx="bg-red-300"
                divideX
              >
                <div className="mr-4">{head.label}</div>
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody onClick={() => bodyClickMock()} cx="bg-red-400">
        <TableHeader>
          <TableHead>
            {rows.map((row: RowProps) => {
              return (
                <TableRow onClick={() => rowClickMock()}>
                  <TableDef
                    onClick={() => defClickMock()}
                    cx="bg-red-500"
                    divideX
                  >
                    {row.cid.toString()}
                  </TableDef>
                  <TableDef onClick={() => defClickMock()}>{row.city}</TableDef>
                  <TableDef onClick={() => defClickMock()}>
                    {row.country}
                  </TableDef>
                  <TableDef onClick={() => defClickMock()}>
                    {row.pincode}
                  </TableDef>
                </TableRow>
              );
            })}
          </TableHead>
        </TableHeader>
      </TableBody>
      <TableFooter onClick={() => footerClickMock()} cx="bg-red-600">
        <></>
      </TableFooter>
    </Table>
  );
};

beforeEach(() => cleanup);
describe("render Table component", () => {
  it("render component", () => {
    render(<TableComponent />);
  });

  it("onClick prop", () => {
    render(<TableComponent />);

    fireEvent.click(screen.getAllByTestId("body")[0]);
    expect(bodyClickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getAllByTestId("header")[0]);
    fireEvent.click(screen.getAllByTestId("header")[0]);
    fireEvent.click(screen.getAllByTestId("header")[0]);
    expect(headerClickMock).toHaveBeenCalledTimes(3);

    fireEvent.click(screen.getAllByTestId("row")[0]);
    fireEvent.click(screen.getAllByTestId("row")[0]);
    expect(rowClickMock).toHaveBeenCalledTimes(2);

    fireEvent.click(screen.getAllByTestId("head")[0]);
    expect(headClickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getAllByTestId("def")[0]);
    expect(defClickMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getAllByTestId("footer")[0]);
    expect(defClickMock).toHaveBeenCalledTimes(1);
  });

  it("sticky prop", () => {
    render(<TableComponent />);

    expect(
      screen.getAllByTestId("header")[0].classList.contains("sticky")
    ).toBeTruthy();
    expect(
      screen.getAllByTestId("header")[0].classList.contains("-top-[0.01rem]")
    ).toBeTruthy();
  });

  it("cx prop", () => {
    render(<TableComponent />);

    expect(
      screen.getAllByTestId("header")[0].classList.contains("bg-red-100")
    ).toBeTruthy();
    expect(
      screen.getAllByTestId("row")[0].classList.contains("bg-red-200")
    ).toBeTruthy();
    expect(
      screen.getAllByTestId("head")[0].classList.contains("bg-red-300")
    ).toBeTruthy();
    expect(
      screen.getAllByTestId("body")[0].classList.contains("bg-red-400")
    ).toBeTruthy();
    expect(
      screen.getAllByTestId("def")[0].classList.contains("bg-red-500")
    ).toBeTruthy();
    expect(
      screen.getByTestId("footer").classList.contains("bg-red-600")
    ).toBeTruthy();
  });

  it("divideX prop", () => {
    render(<TableComponent />);

    expect(screen.getAllByTestId("def")[0].classList.contains("border"));
    expect(
      screen
        .getAllByTestId("header")[0]
        .classList.contains("border-[#00000050]")
    );
  });
});
