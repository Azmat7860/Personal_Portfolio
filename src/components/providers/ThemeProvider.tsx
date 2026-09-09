"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
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
const THEME_CHANGE_EVENT = "azmat-theme-change";

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

function subscribeTheme(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function notifyThemeListeners() {
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    readDomTheme,
    () => "dark" as const,
  );

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    persistTheme(next);
    notifyThemeListeners();
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = readDomTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    persistTheme(next);
    notifyThemeListeners();
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
