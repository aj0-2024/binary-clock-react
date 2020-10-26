import { createContext } from "react";

export interface Theme {
    rootClassName?: string;
    bulbOnClassName?: string;
    bulbOffClassName?: string;
}

export const ThemeContext = createContext<Theme>({
    rootClassName: "",
    bulbOnClassName: "",
    bulbOffClassName: "",
});
