import React from "react";
import { createTheming } from "react-jss";

export interface Theme {
    primaryColor: string;
    backgroundColor: string;
}

const ThemeContext = React.createContext({
    primaryColor: "#000000",
    backgroundColor: "#FAFAFA",
});

export const { ThemeProvider, useTheme } = createTheming(ThemeContext);
