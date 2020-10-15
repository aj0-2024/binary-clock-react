import React, { FC } from "react";
import { TimeUnit } from "binary-clock-core";
import ViewBulb from "./ViewBulb";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    timeSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});

export interface TimeUnitProps {
    value: TimeUnit;
    hourDisplay?: boolean;
}

const ViewTimeUnit: FC<TimeUnitProps> = (props) => {
    const classes = useStyles();
    const { value, hourDisplay } = props;

    return (
        <div className={classes.container}>
            <div className={classes.timeSection}>
                {hourDisplay && <ViewBulb status={value.a3} />}
                <ViewBulb status={value.a2} />
                <ViewBulb status={value.a1} />
            </div>

            <div className={classes.timeSection}>
                <ViewBulb status={value.b4} />
                <ViewBulb status={value.b3} />
                <ViewBulb status={value.b2} />
                <ViewBulb status={value.b1} />
            </div>
        </div>
    );
};

export default ViewTimeUnit;
