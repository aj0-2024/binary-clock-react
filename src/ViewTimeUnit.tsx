import React, { FC } from "react";
import { TimeUnit } from "binary-clock-core";
import ViewBulb from "./ViewBulb";
import "./ViewTimeUnit.css";

export interface TimeUnitProps {
    value: TimeUnit;
    hourDisplayMode?: boolean;
}

const ViewTimeUnit: FC<TimeUnitProps> = (props) => {
    const { value, hourDisplayMode } = props;

    return (
        <div className="bin-clock-time-unit-container">
            <div className="bin-clock-time-unit-section">
                {!hourDisplayMode && <ViewBulb status={value.a3} />}
                <ViewBulb status={value.a2} />
                <ViewBulb status={value.a1} />
            </div>

            <div className="bin-clock-time-unit-section">
                <ViewBulb status={value.b4} />
                <ViewBulb status={value.b3} />
                <ViewBulb status={value.b2} />
                <ViewBulb status={value.b1} />
            </div>
        </div>
    );
};

export default ViewTimeUnit;
