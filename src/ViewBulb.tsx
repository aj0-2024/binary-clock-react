import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import classNames from "classnames/bind";

const useStyles = createUseStyles({
    base: {
        width: 24,
        height: 24,
        margin: 4,
        borderRadius: "50%",
        border: "0.5px solid black",
        transition: "0.5s background",
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

    return (
        <div
            className={cx({
                base: true,
                on: props.bulbStatus === Bulb.On,
                off: props.bulbStatus === Bulb.Off,
            })}
        />
    );
};

export default ViewBulb;
