import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";

beforeEach(() => cleanup);

describe("render Tabs.tsx & Tab.tsx component", () => {
  it("render component", () => {
    render(
      <Tabs>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
  });

  it("Tabs.tsx justifyBetween === true & wrap === false prop", () => {
    const renderTabsComponent = render(
      <Tabs justifyBetween>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("justify-start")
    ).toBeFalsy();
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("justify-between")
    ).toBeTruthy();
    expect(
      renderTabsComponent.getByTestId("tabs-wrapper").classList.contains("flex-wrap")
    ).toBeFalsy();
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("overflow-x-auto")
    ).toBeTruthy();
  });

  it("Tabs.tsx justifyBetween === false & wrap === true prop", () => {
    const renderTabsComponent = render(
      <Tabs wrap>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("justify-between")
    ).toBeFalsy();
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("justify-start")
    ).toBeTruthy();
    expect(
      renderTabsComponent
        .getByTestId("tabs-wrapper")
        .classList.contains("overflow-x-auto")
    ).toBeFalsy();
    expect(
      renderTabsComponent.getByTestId("tabs-wrapper").classList.contains("flex-wrap")
    ).toBeTruthy();
  });

  it("Tab.tsx title prop", () => {
    const renderTabsComponent = render(
      <Tabs wrap>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    expect(renderTabsComponent.getByTestId("tab-0").innerHTML).toEqual(
      "Properties"
    );
  });

  it("Tab.tsx action prop", () => {
    const renderTabsComponent = render(
      <Tabs wrap>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    fireEvent.click(renderTabsComponent.getByTestId("tab-0"));
  });

  it("Tab.tsx selected prop", () => {
    const renderTabsComponent = render(
      <Tabs wrap>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    expect(
      renderTabsComponent
        .getByTestId("tab-0")
        .classList.contains("bg-mid-neutral-200")
    ).toBeTruthy();
    expect(
      renderTabsComponent.getByTestId("tab-0").classList.contains("rounded-lg")
    ).toBeTruthy();
  });

  it("Tab.tsx cx prop", () => {
    const renderTabsComponent = render(
      <Tabs wrap>
        <Tab
          index={0}
          title="Properties"
          onAction={(i) => {
            console.log(i);
          }}
          selected={true}
          cx="bg-red-500"
        />
        <Tab
          index={1}
          title="Dimensions"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={2}
          title="Features"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
        <Tab
          index={3}
          title="Warranty"
          onAction={(i) => {
            console.log(i);
          }}
          selected={false}
        />
      </Tabs>
    );
    expect(
      renderTabsComponent.getByTestId("tab-0").classList.contains("bg-red-500")
    ).toBeTruthy();
  });
});
