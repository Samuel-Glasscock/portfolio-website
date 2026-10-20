'use client';

import { useSyncExternalStore } from 'react';
import { PiMoon, PiSun } from 'react-icons/pi';

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
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground"
        aria-label="Toggle theme"
        // Prevent tiny differences from warning during hydration
        suppressHydrationWarning
      />
    );
  }

  // Icon, label, and inverted colors preview the mode the button switches to
  const isDark = mode === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <PiSun className="h-5 w-5 text-sun" aria-hidden="true" />
      ) : (
        <PiMoon className="h-5 w-5 text-moon" aria-hidden="true" />
      )}
    </button>
  );
}
