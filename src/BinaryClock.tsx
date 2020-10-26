import React, {
    FC,
    HTMLAttributes,
    ReactChild,
    useState,
    useEffect,
} from "react";
import ViewTimeUnit from "./ViewTimeUnit";
import { getTime } from "binary-clock-core";
import { Theme, ThemeContext } from "./ThemeContext";
import clsx from "clsx";
import "./BinaryClock.css";

export interface BinaryClockProps extends HTMLAttributes<HTMLDivElement> {
    rootClassName?: string;
    separatorClassName?: string;
    separatorCharacter?: string;
    bulbOnClassName?: string;
    bulbOffClassName?: string;
    children?: ReactChild;
}

const useCurrDateTime = () => {
    const [currDateTime, setCurrDateTime] = useState<Date>(new Date());

    // updated the currDateTime value every second
    const updateInterval = 1000;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrDateTime(new Date());
        }, updateInterval);

        return () => clearInterval(intervalId);
    });

    return currDateTime;
};

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

/**
 * A binary clock component
 */
export const BinaryClock: FC<BinaryClockProps> = (props) => {
    const currDateTime = useCurrDateTime();

    const theme: Theme = {
        rootClassName: props.rootClassName,
        separatorClassName: props.separatorClassName,
        bulbOnClassName: props.bulbOnClassName,
        bulbOffClassName: props.bulbOffClassName,
    };

    const currTime = getTime(currDateTime);
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
