import React, { FC, HTMLAttributes, ReactChild, useState } from "react";
import ViewTimeUnit from "./ViewTimeUnit";
import useInterval from "@use-it/interval";
import { getTime } from "binary-clock-core";
import { Theme, ThemeContext } from "./ThemeContext";
import "./BinaryClock.css";

export interface BinaryClockProps extends HTMLAttributes<HTMLDivElement> {
    bulbOnClassName?: string;
    bulbOffClassName?: string;
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
        bulbOnClassName: props.bulbOnClassName,
        bulbOffClassName: props.bulbOffClassName,
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
