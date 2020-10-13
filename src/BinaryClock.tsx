import React, { FC, HTMLAttributes, ReactChild } from "react";

interface BulbColor {
    offColor: string;
    onColor: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    theme?: BulbColor;
    children?: ReactChild;
}

/**
 * A binary clock component
 */
export const BinaryClock: FC<Props> = () => {
    return <div />;
};
