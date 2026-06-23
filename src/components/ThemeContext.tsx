import { createContext, useContext } from "react";
import type { Theme } from "../types";

export const ThemeContext = createContext<Theme>("light");

/** Reads the current theme ("light" | "dark") from context. */
export function useTheme(): Theme {
  return useContext(ThemeContext);
}
