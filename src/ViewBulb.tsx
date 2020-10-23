import React, { FC, useContext } from "react";
import { Bulb } from "binary-clock-core";
import clsx from "clsx";
import "./ViewBulb.css";
import { ThemeContext } from "./ThemeContext";

export interface BulbProps {
    status: Bulb;
}

const ViewBulb: FC<BulbProps> = (props) => {
    const theme = useContext(ThemeContext);
    const { status } = props;

    const runtimeStyle = {
        background:
            status === Bulb.On ? theme.primaryColor : theme.backgroundColor,
    };

    return (
        <div
            style={runtimeStyle}
            className={clsx({
                "bin-clock-bulb-base": true,
                "bin-clock-bulb-md": true,
            })}
        />
    );
};

export default ViewBulb;
