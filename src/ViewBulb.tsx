import React, { FC } from "react";
import { Bulb } from "binary-clock-core";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { Theme, useTheme } from "./ThemeProvider";
import "./ViewBulb.css";

const useStyles = createUseStyles({
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
                "bin-clock-bulb-base": true,
                "bin-clock-bulb-md": true,
                [classes.on]: status === Bulb.On,
                [classes.off]: status === Bulb.Off,
            })}
        />
    );
};

export default ViewBulb;
