// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import GeneratedTestComponent from "./GeneratedTestComponent";
import { GeneratedTestComponentProps } from "./GeneratedTestComponent.types";
describe("Test Component", () => {
  let props: GeneratedTestComponentProps;
  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });
  const renderComponent = () => render(<GeneratedTestComponent {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "this article is amazing";
    const { getByTestId } = renderComponent();
    const component = getByTestId("GeneratedTestComponent");
    expect(component).toHaveTextContent("this article is amazing");
  });
});
