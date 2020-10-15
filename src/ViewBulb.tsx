import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import classNames from "classnames/bind";

const useStyles = createUseStyles({
    base: {
        width: 24,
        height: 24,
        margin: 4,
        borderRadius: 8,
        transition: "0.25s background",
        transitionTimingFunction: "ease-in-out",
    },
    on: {
        background: "#F5A623",
    },
    off: {
        background: "#FAFAFA",
    },
});

export interface BulbProps {
    status: Bulb;
}

const ViewBulb: FC<BulbProps> = (props) => {
    const classes = useStyles();
    const cx = classNames.bind(classes);
    const { status } = props;

    return (
        <div
            className={cx({
                base: true,
                on: status === Bulb.On,
                off: status === Bulb.Off,
            })}
        />
    );
};

export default ViewBulb;
