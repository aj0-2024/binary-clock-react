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

export interface BinaryClockProps extends HTMLAttributes<HTMLDivElement> {
    primaryColor?: string;
    backgroundColor?: string;
    size?: number;
    children?: ReactChild;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<BinaryClockProps> = (props) => {
    const classes = useStyles();
    const [currDate, setDate] = useState<Date>(new Date());

    useInterval(() => {
        setDate(new Date());
    }, 1000);

    const theme = {
        primaryColor: props.primaryColor || "#F5A623",
        backgroundColor: props.backgroundColor || "#FAFAFA",
        size: props.size || 24,
    };

    const currTime = getTime(currDate);
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <ViewTimeUnit hourDisplayMode={true} value={currTime.hours} />
                <span className={classes.separator}>:</span>
                <ViewTimeUnit value={currTime.minutes} />
                <span className={classes.separator}>:</span>
                <ViewTimeUnit value={currTime.seconds} />
            </div>
        </ThemeProvider>
    );
};

export default BinaryClock;
