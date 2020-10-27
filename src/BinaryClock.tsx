import React, { FC, useState, useEffect } from "react";
import ViewTimeUnit from "./ViewTimeUnit";
import { getTime } from "binary-clock-core";
import { Theme, ThemeContext } from "./ThemeContext";
import clsx from "clsx";
import "./BinaryClock.css";

export interface BinaryClockProps {
    // data
    defaultValue?: Date;

    // styles
    rootClassName?: string;
    separatorClassName?: string;
    separatorCharacter?: string;
    bulbOnClassName?: string;
    bulbOffClassName?: string;
}

const Separator: FC<{
    className?: string;
    character?: string;
}> = (props) => {
    return (
        <span
            className={clsx({
                [props.className || "bin-clock-separator"]: true,
            })}
        >
            {props.character || ":"}
        </span>
    );
};

const useDateTime = (defaultValue: Date) => {
    const [currDateTime, setCurrDateTime] = useState<Date>(defaultValue);

    // updated the currDateTime value every second
    const updateInterval = 1000;
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newValue = new Date(currDateTime);
            newValue.setSeconds(newValue.getSeconds() + 1);
            setCurrDateTime(newValue);
        }, updateInterval);

        return () => clearInterval(intervalId);
    });

    return currDateTime;
};

/**
 * A binary clock component
 */
export const BinaryClock: FC<BinaryClockProps> = (props) => {
    const theme: Theme = {
        rootClassName: props.rootClassName,
        separatorClassName: props.separatorClassName,
        bulbOnClassName: props.bulbOnClassName,
        bulbOffClassName: props.bulbOffClassName,
    };

    const dateValue = useDateTime(props.defaultValue || new Date());
    const currTime = getTime(dateValue);

    return (
        <ThemeContext.Provider value={theme}>
            <div
                className={clsx({
                    [props.rootClassName || "bin-clock-root"]: true,
                    "bin-clock-container": true,
                })}
            >
                <ViewTimeUnit hourDisplayMode={true} value={currTime.hours} />
                <Separator
                    className={theme.separatorClassName}
                    character={props.separatorCharacter}
                />
                <ViewTimeUnit value={currTime.minutes} />
                <Separator
                    className={theme.separatorClassName}
                    character={props.separatorCharacter}
                />
                <ViewTimeUnit value={currTime.seconds} />
            </div>
        </ThemeContext.Provider>
    );
};

export default BinaryClock;
