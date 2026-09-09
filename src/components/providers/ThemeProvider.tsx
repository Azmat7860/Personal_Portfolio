"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
export const THEME_STORAGE_KEY = "azmat-portfolio-theme";

function readDomTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const fromData = document.documentElement.getAttribute("data-theme");
  if (fromData === "light" || fromData === "dark") return fromData;
  if (document.documentElement.classList.contains("light")) return "light";
  return "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

function persistTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const themeRef = useRef<Theme>("dark");

  useEffect(() => {
    const initial = readDomTheme();
    themeRef.current = initial;
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    themeRef.current = next;
    setThemeState(next);
    applyTheme(next);
    persistTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = themeRef.current === "dark" ? "light" : "dark";
    themeRef.current = next;
    setThemeState(next);
    applyTheme(next);
    persistTheme(next);
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
