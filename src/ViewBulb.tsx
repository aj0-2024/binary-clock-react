import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { Theme, useTheme } from "./ThemeProvider";
import "./bulb.module.css";

const useStyles = createUseStyles({
    base: {
        width: (theme: Theme) => theme.size,
        height: (theme: Theme) => theme.size,
        margin: 2,
        borderRadius: 6,
        transition: "all 0.3s",
        transitionTimingFunction: "cubic-bezier(.25,.8,.25,1)",
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
    const { status } = props;

    return (
        <div
            className={clsx({
                [classes.base]: true,
                [classes.on]: status === Bulb.On,
                [classes.off]: status === Bulb.Off,
            })}
        />
    );
};

export default ViewBulb;
