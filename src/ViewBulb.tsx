import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import classNames from "classnames/bind";
import { Theme, useTheme } from "./ThemeProvider";

const useStyles = createUseStyles({
    base: {
        width: 24,
        height: 24,
        margin: 2,
        borderRadius: 4,
        transition: "all 0.3s",
        transitionTimingFunction: "cubic-bezier(.25,.8,.25,1)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    },
    on: {
        background: (theme: Theme) => theme.primaryColor,
    },
    off: {
        background: (theme: Theme) => theme.backgroundColor,
    },
});

export interface BulbProps {
    status: Bulb;
}

const ViewBulb: FC<BulbProps> = (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
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
