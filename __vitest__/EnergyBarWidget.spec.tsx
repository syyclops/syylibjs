import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import EnergyBarWidget from "../src/components/EnergyBarWidget";

beforeEach(() => cleanup);

const content = [
  {
    label: "J",
    data: [
      {
        percent: "80%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Jan 2023</div>
            <div className="font-bold">80 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "50%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Jan 2023</div>
            <div className="font-bold">50 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Jan 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "F",
    data: [
      {
        percent: "70%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Feb 2023</div>
            <div className="font-bold">70 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "40%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Feb 2023</div>
            <div className="font-bold">40 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "10%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Feb 2023</div>
            <div className="font-bold">10 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "M",
    data: [
      {
        percent: "60%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Mar 2023</div>
            <div className="font-bold">60 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "30%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Mar 2023</div>
            <div className="font-bold">30 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Mar 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "A",
    data: [
      {
        percent: "80%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Apr 2023</div>
            <div className="font-bold">80 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "50%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Apr 2023</div>
            <div className="font-bold">50 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Apr 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "M",
    data: [
      {
        percent: "70%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">May 2023</div>
            <div className="font-bold">70 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "40%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">May 2023</div>
            <div className="font-bold">40 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "10%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">May 2023</div>
            <div className="font-bold">10 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "J",
    data: [
      {
        percent: "80%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Jun 2023</div>
            <div className="font-bold">80 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "50%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Jun 2023</div>
            <div className="font-bold">50 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Jun 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "J",
    data: [
      {
        percent: "70%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Jul 2023</div>
            <div className="font-bold">70 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "40%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Jul 2023</div>
            <div className="font-bold">40 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "10%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Jul 2023</div>
            <div className="font-bold">10 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "A",
    data: [
      {
        percent: "60%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Aug 2023</div>
            <div className="font-bold">60 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "30%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Aug 2023</div>
            <div className="font-bold">30 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Aug 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "S",
    data: [
      {
        percent: "80%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Sep 2023</div>
            <div className="font-bold">80 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "50%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Sep 2023</div>
            <div className="font-bold">50 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Sep 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "O",
    data: [
      {
        percent: "70%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Oct 2023</div>
            <div className="font-bold">70 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "40%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Oct 2023</div>
            <div className="font-bold">40 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "10%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Oct 2023</div>
            <div className="font-bold">10 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "N",
    data: [
      {
        percent: "60%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Nov 2023</div>
            <div className="font-bold">60 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "30%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Nov 2023</div>
            <div className="font-bold">30 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Nov 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
  {
    label: "D",
    data: [
      {
        percent: "80%",
        bg: "bg-info",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Solar</div>
            <div className="text-mid-neutral-100">Dec 2023</div>
            <div className="font-bold">80 kWh</div>
          </div>
        ),
        category: "solar",
      },
      {
        percent: "50%",
        bg: "bg-elec",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Electricity</div>
            <div className="text-mid-neutral-100">Dec 2023</div>
            <div className="font-bold">50 kWh</div>
          </div>
        ),
        category: "electricity",
      },
      {
        percent: "20%",
        bg: "bg-warning",
        tooltip: (
          <div className="text-left whitespace-nowrap">
            <div>Gas</div>
            <div className="text-mid-neutral-100">Dec 2023</div>
            <div className="font-bold">20 Btuh</div>
          </div>
        ),
        category: "gas",
      },
    ],
  },
];

const percents = ["80%", "50%", "20%", "70%", "40%", "10%", "60%"];

describe("test EnergyBarWidget.tsx component", () => {
  it("render component", () => {
    render(
      <EnergyBarWidget header="" content={[]} footer={""} onAction={() => {}} />
    );
  });

  it("header prop", () => {
    render(
      <EnergyBarWidget
        header="TEST HEADER TEXT"
        content={[]}
        footer={""}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("header").innerHTML).toEqual("TEST HEADER TEXT");
  });

  it("content prop", () => {
    render(
      <EnergyBarWidget
        header="TEST HEADER TEXT"
        content={content}
        footer={""}
        onAction={() => {}}
      />
    );
    expect(screen.getByTestId("widget").childNodes.length).toEqual(12);
    expect(screen.getAllByTestId("bars").length).toEqual(36);
    screen.getAllByTestId("bars").forEach((bar, i) => {
      if (i <= 6) expect(bar.style.height).toEqual(percents[i]);
    });

    expect(screen.getAllByTestId("labels").length).toEqual(12);
    expect(screen.getAllByTestId("labels")[0].innerHTML).toEqual("J");
    expect(screen.getAllByTestId("labels")[5].innerHTML).toEqual("J");
    expect(screen.getAllByTestId("labels")[11].innerHTML).toEqual("D");
  });

  it("onAction prop", () => {
    const onActionMockFn = vi.fn();
    render(
      <EnergyBarWidget
        header="TEST HEADER TEXT"
        content={content}
        footer={""}
        onAction={() => onActionMockFn()}
      />
    );
    expect(screen.getByTestId("widget").childNodes.length).toEqual(12);
    expect(screen.getAllByTestId("labels").length).toEqual(12);
    expect(screen.getAllByTestId("labels")[0].innerHTML).toEqual("J");
    expect(screen.getAllByTestId("labels")[5].innerHTML).toEqual("J");
    expect(screen.getAllByTestId("labels")[11].innerHTML).toEqual("D");
    fireEvent.click(screen.getAllByTestId("actions")[0]);
    fireEvent.click(screen.getAllByTestId("actions")[1]);
    fireEvent.click(screen.getAllByTestId("actions")[2]);
    fireEvent.click(screen.getAllByTestId("actions")[3]);
    fireEvent.click(screen.getAllByTestId("actions")[4]);
    expect(onActionMockFn).toHaveBeenCalledTimes(5);
  });
});
