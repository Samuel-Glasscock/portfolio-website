'use client';

import { useSyncExternalStore } from 'react';

type Mode = "light" | "dark";

// The <html> class (set by the pre-paint script in layout.tsx) is the source of truth
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getSnapshot(): Mode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// null = server render / not yet hydrated; don't render state-dependent attrs/text
function getServerSnapshot(): Mode | null {
  return null;
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    if (!mode) return;
    const next: Mode = mode === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
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
