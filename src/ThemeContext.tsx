import React from "react";
export interface Theme {
    primaryColor: string;
    backgroundColor: string;
    size: "medium" | "large";
}

export const ThemeContext = React.createContext({
    primaryColor: "#000000",
    backgroundColor: "#FAFAFA",
    size: "medium",
});
