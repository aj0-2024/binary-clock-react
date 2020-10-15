import React, { FC, HTMLAttributes, ReactChild, useState } from "react";
import { createUseStyles } from "react-jss";
import ViewTimeUnit from "./ViewTimeUnit";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

interface BulbColor {
    offColor: string;
    onColor: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    theme?: BulbColor;
    children?: ReactChild;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<Props> = () => {
    const classes = useStyles();
    const [currDate, setDate] = useState<Date>(new Date());

    return <div className={classes.container}></div>;
};
