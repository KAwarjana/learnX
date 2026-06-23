import { useEffect, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import type { Theme } from "../types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeContext } from "./ThemeContext";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("learnex-theme") === "dark" ? "dark" : "light";
}

function getInitialAuth(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("learnex-auth") === "true";
}

export function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getInitialAuth);

  useEffect(() => {
    window.localStorage.setItem("learnex-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("learnex-auth", String(isAuthenticated));
  }, [isAuthenticated]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        theme === "light" ? "bg-slate-100 text-slate-900" : "bg-slate-950 text-white",
      )}
    >
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        isAuthenticated={isAuthenticated}
        onSignIn={() => setIsAuthenticated(true)}
        onSignOut={() => setIsAuthenticated(false)}
      />
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      <Footer theme={theme} />
    </div>
  );
}

export { getInitialTheme, getInitialAuth };
