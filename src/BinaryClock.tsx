import React, { FC, HTMLAttributes, ReactChild, useState } from "react";
import ViewTimeUnit from "./ViewTimeUnit";
import useInterval from "@use-it/interval";
import { getTime } from "binary-clock-core";
import { Theme, ThemeContext } from "./ThemeContext";
import "./BinaryClock.css";

export interface BinaryClockProps extends HTMLAttributes<HTMLDivElement> {
    primaryColor?: string;
    backgroundColor?: string;
    size?: "medium" | "large";
    children?: ReactChild;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<BinaryClockProps> = (props) => {
    const [currDate, setDate] = useState<Date>(new Date());

    useInterval(() => {
        setDate(new Date());
    }, 1000);

    const theme: Theme = {
        primaryColor: props.primaryColor || "#F5A623",
        backgroundColor: props.backgroundColor || "#FAFAFA",
        size: props.size || "medium",
    };

    const currTime = getTime(currDate);
    return (
        <ThemeContext.Provider value={theme}>
            <div className="bin-clock-container">
                <ViewTimeUnit hourDisplayMode={true} value={currTime.hours} />
                <span className="bin-clock-separator">:</span>
                <ViewTimeUnit value={currTime.minutes} />
                <span className="bin-clock-separator">:</span>
                <ViewTimeUnit value={currTime.seconds} />
            </div>
        </ThemeContext.Provider>
    );
};

export default BinaryClock;
