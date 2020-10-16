import React, { FC, HTMLAttributes, ReactChild, useState } from "react";
import { createUseStyles } from "react-jss";
import ViewTimeUnit from "./ViewTimeUnit";
import useInterval from "@use-it/interval";
import { getTime } from "binary-clock-core";
import { Theme, ThemeProvider } from "./ThemeProvider";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    separator: {
        margin: "0px 8px",
        fontSize: 24,
    },
});

interface BulbColor {
    offColor: string;
    onColor: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    theme?: Theme;
    children?: ReactChild;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<Props> = () => {
    const classes = useStyles();
    const [currDate, setDate] = useState<Date>(new Date());

    useInterval(() => {
        setDate(new Date());
    }, 1000);

    const currTime = getTime(currDate);
    return (
        <div className={classes.container}>
            <ViewTimeUnit hourDisplayMode={true} value={currTime.hours} />
            <span className={classes.separator}>:</span>
            <ViewTimeUnit value={currTime.minutes} />
            <span className={classes.separator}>:</span>
            <ViewTimeUnit value={currTime.seconds} />
        </div>
    );
};

export default BinaryClock;
