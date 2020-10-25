import React from "react";
import * as ReactDOM from "react-dom";
import { BinaryClock } from "../src";

describe("BinaryClock component", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<BinaryClock />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
