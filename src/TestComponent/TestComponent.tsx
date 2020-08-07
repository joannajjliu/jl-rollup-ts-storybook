import React from "react";
import "./TestComponent.scss";
import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ theme, headingOne }) => (
    <div
        data-testid="test-component"
        className={`test-component test-component-${theme}`}
    >
        <h1 className="randomStyle">{headingOne}</h1>
        <button className="heading btn btn-dark">{headingOne}</button>
    </div>
);

export default TestComponent;