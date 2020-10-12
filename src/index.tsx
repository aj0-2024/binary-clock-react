import React, { FC, HTMLAttributes, ReactChild } from "react";

interface BulbColor {
    offColor: string;
    onColor: string;
}

interface Skin {
    Default;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    theme?: BulbColor;
    skin?: Skin;
    children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A binary clock component
 */
export const BinaryClock: FC<Props> = () => {
    return <div />;
};
