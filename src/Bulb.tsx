import React, { FC, HTMLAttributes, ReactChild } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import classNames from "classnames/bind";

const useStyles = createUseStyles({
    base: {
        width: 36,
        height: 36
        margin: 4
    },
    on: {
        background: "#FAFAFA"
    }
    off: {
        background: "#F5A623"
    }
});

const Bulb: FC<{
    bulbStatus: Bulb,
}> = props => {
    const classes = useStyles();
    const cx = classNames.bind(classes);
    
    return <div className={classNames({
        base: true,
        on: props.bulbStatus === Bulb.On,
        off: props.bulbStatus === Bulb.off
    })} />;
}
