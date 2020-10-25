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

    return (
        <div
            className={clsx({
                "bin-clock-bulb-base": true,
                [theme.bulbOnClassName || "bin-clock-bulb-on"]:
                    props.status === Bulb.On,
                [theme.bulbOffClassName || "bin-clock-bulb-off"]:
                    props.status === Bulb.Off,
            })}
        />
    );
};

export default ViewBulb;
