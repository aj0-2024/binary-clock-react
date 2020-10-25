import { createContext } from "react";

export interface Theme {
    bulbOnClassName?: string;
    bulbOffClassName?: string;
}

export const ThemeContext = createContext<Theme>({
    bulbOnClassName: "",
    bulbOffClassName: "",
});
