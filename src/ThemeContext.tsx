import { createContext } from "react";

export interface Theme {
    rootClassName?: string;
    separatorClassName?: string;
    bulbOnClassName?: string;
    bulbOffClassName?: string;
}

export const ThemeContext = createContext<Theme>({
    rootClassName: "",
    separatorClassName: "",
    bulbOnClassName: "",
    bulbOffClassName: "",
});
