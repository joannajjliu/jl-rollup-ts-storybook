import React from "react";

import { TestComponentProps } from "./TestComponent.types";

const TestComponent: React.FC<TestComponentProps> = ({ headingOne }) => (
    <div
        data-testid="test-component"
    >
        <h1 className="heading">{headingOne}</h1>
    </div>
);

export default TestComponent;