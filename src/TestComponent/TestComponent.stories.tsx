import React from "react";
import TestComponent from './TestComponent';

export default {
    title: "TestComponent"
};

export const Primary = () => <TestComponent theme="primary" headingOne="omg" />
export const Secondary = () => <TestComponent theme="secondary" headingOne="oh what" />;