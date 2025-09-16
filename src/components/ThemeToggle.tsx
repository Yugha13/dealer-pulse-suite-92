import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  collapsed?: boolean;
}

export function ThemeToggle({ collapsed = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={collapsed ? "icon" : "sm"}
        className="w-full justify-start hover:bg-accent/50 transition-all duration-200"
      >
        <div className="h-5 w-5" />
        {!collapsed && <span>Theme</span>}
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size={collapsed ? "icon" : "sm"}
      onClick={toggleTheme}
      className="w-full justify-start hover:bg-accent/50 transition-all duration-200 group"
      title={collapsed ? (theme === "dark" ? "Light mode" : "Dark mode") : undefined}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
      ) : (
        <Moon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
      )}
      {!collapsed && (
        <span className="ml-2">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </span>
      )}
    </Button>
  );
}