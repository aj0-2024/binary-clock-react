import React, { FC, HTMLAttributes, ReactChild, useState, useEffect } from "react";
import ViewTimeUnit from "./ViewTimeUnit";
import { getTime } from "binary-clock-core";
import { Theme, ThemeContext } from "./ThemeContext";
import "./BinaryClock.css";

export interface BinaryClockProps extends HTMLAttributes<HTMLDivElement> {
    bulbOnClassName?: string;
    bulbOffClassName?: string;
    children?: ReactChild;
}

const useCurrDateTime = () => {
    const [ currDateTime, setCurrDateTime ] = useState<Date>(new Date());

    // updated the currDateTime value every second
    const updateInterval = 1000;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrDateTime(new Date());
        }, updateInterval);

        return () => clearInterval(intervalId);
    });

    return currDateTime;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<BinaryClockProps> = (props) => {
    const currDateTime = useCurrDateTime();

    const theme: Theme = {
        bulbOnClassName: props.bulbOnClassName,
        bulbOffClassName: props.bulbOffClassName,
    };

    const currTime = getTime(currDateTime);
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
