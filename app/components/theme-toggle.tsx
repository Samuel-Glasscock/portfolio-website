'use client';

import { useEffect, useState } from 'react';

type Mode = "light" | "dark";

export default function ThemeToggle() {
  // null = not yet hydrated; don't render state-dependent attrs/text
  const [mode, setMode] = useState<Mode | null>(null);

  // After mount, read the actual DOM state set by your pre-paint script
  useEffect(() => {
    const root = document.documentElement;
    const current: Mode = root.classList.contains("dark") ? "dark" : "light";
    setMode(current);
  }, []);

  const toggle = () => {
    if (!mode) return;
    const next: Mode = mode === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setMode(next);
  };

  // During SSR/first paint, render a stable shell with no dynamic text/attrs
  if (mode === null) {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1.5 text-sm"
        aria-label="Toggle dark mode"
        // Prevent tiny differences from warning during hydration
        suppressHydrationWarning
      >
        Theme
      </button>
    );
  }

  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-1.5 text-sm hover:opacity-90"
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
