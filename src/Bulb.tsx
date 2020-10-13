import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import classNames from "classnames/bind";

const useStyles = createUseStyles({
    base: {
        width: 36,
        height: 36,
        margin: 4,
    },
    on: {
        background: "#FAFAFA",
    },
    off: {
        background: "#F5A623",
    },
});

const BulbComponent: FC<{
    bulbStatus: Bulb;
}> = props => {
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

export default BulbComponent;
