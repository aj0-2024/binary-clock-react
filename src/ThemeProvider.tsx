import React from "react";
import { createTheming } from "react-jss";

export interface Theme {
    primaryColor: string;
    backgroundColor: string;
    size: number;
}

const ThemeContext = React.createContext({
    primaryColor: "#000000",
    backgroundColor: "#FAFAFA",
    size: 24,
});

export const { ThemeProvider, useTheme } = createTheming(ThemeContext);
