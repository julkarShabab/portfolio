import { useTheme } from "./ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button
        className={theme === "light" ? "active" : ""}
        onClick={() => setTheme("light")}
        title="Light"
      >
        <Sun size={16} />
      </button>
      <button
        className={theme === "dark" ? "active" : ""}
        onClick={() => setTheme("dark")}
        title="Dark"
      >
        <Moon size={16} />
      </button>
      <button
        className={theme === "system" ? "active" : ""}
        onClick={() => setTheme("system")}
        title="System"
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}