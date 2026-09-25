import { Sun } from "lucide-react";
import { useSyncExternalStore, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";

type Theme = "light" | "dark";

/** localStorage key shared with the inline boot script in app/layout.tsx. */
const THEME_STORAGE_KEY = "theme";
/** Ripple length in ms (~500ms per the theme-toggle spec). */
const RIPPLE_DURATION_MS = 500;

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

/**
 * Store snapshot: the current page theme. The `<html data-theme>` attribute
 * is the source of truth — written synchronously by applyTheme() and
 * restored before first paint by the boot script. The page is only dark
 * after an explicit choice; the system preference alone paints the root
 * shell behind it, never the route.
 */
function readPageTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Server snapshot: always light, matching the SSR markup. */
function readServerTheme(): Theme {
  return "light";
}

/**
 * Subscribe to theme changes — MutationObserver on the `<html>` attribute
 * (covers this toggle, the boot script and any other writer) plus the
 * `storage` event for changes made in other tabs, which are written back
 * into the attribute so this page follows along.
 */
function subscribeToTheme(onStoreChange: () => void): () => void {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY || !isTheme(event.newValue)) return;
    if (document.documentElement.dataset.theme !== event.newValue) {
      // The MutationObserver above notifies React of this write.
      document.documentElement.dataset.theme = event.newValue;
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStorage);
  };
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable — the attribute still applies for this session.
  }
}

/**
 * Swap the theme behind a circular ripple expanding from (x, y).
 *
 * Resilience, in order:
 * - `prefers-reduced-motion` → instant swap, no view transition at all.
 * - No `document.startViewTransition` support → instant swap; the theme
 *   change is never dropped or delayed.
 * - Any failure inside the transition (including a skipped/rejected one) →
 *   the theme is re-applied directly in the catch, so state can't be lost.
 *   Every promise is guarded so nothing escapes as an unhandled rejection.
 */
async function swapThemeWithRipple(theme: Theme, x: number, y: number): Promise<void> {
  const reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof document.startViewTransition !== "function") {
    applyTheme(theme);
    return;
  }

  try {
    const transition = document.startViewTransition(() => applyTheme(theme));

    // Absorb late rejections (skipped transitions, throwing callbacks) so
    // nothing surfaces as an unhandled runtime error.
    void transition.finished.catch(() => undefined);

    await transition.ready;

    // Radius that covers the entire viewport from the click point: the
    // farthest corner, computed directly with Math.hypot.
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    await document.documentElement
      .animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: RIPPLE_DURATION_MS,
          easing: "ease-out",
          pseudoElement: "::view-transition-new(root)",
        },
      )
      .finished.catch(() => undefined);
  } catch {
    // The transition failed or was interrupted — make sure the swap landed.
    applyTheme(theme);
  }
}

type ThemeToggleProps = {
  /**
   * Button classes — callers own the surface styling. The art-showcase header
   * passes the reference's exact button classes so the light render is
   * unchanged.
   */
  className?: string;
  /** Icon content; defaults to the reference's sun glyph. */
  children?: ReactNode;
};

/**
 * Light/Dark theme toggle with a click-origin ripple (View Transitions).
 *
 * The ripple expands `::view-transition-new(root)`'s clip-path from the
 * pointer coordinates (or the button centre for keyboard activation) to the
 * viewport-covering radius defined in swapThemeWithRipple(). Static render
 * output is identical to a plain button — styling lives with the caller.
 */
export function ThemeToggle({ className = "", children }: ThemeToggleProps) {
  // The DOM attribute is the store: no setState-in-effect, hydration-safe
  // (the server snapshot matches the SSR markup) and the accessible name
  // always follows whoever flips the theme — this button, another tab, or
  // the boot script.
  const theme = useSyncExternalStore(subscribeToTheme, readPageTheme, readServerTheme);

  function handleClick(event: ReactMouseEvent<HTMLButtonElement>) {
    // Ripple origin: pointer coordinates. Keyboard activation reports
    // detail === 0 (no pointer involved), so fall back to the button's
    // centre — the circle still starts at the control.
    const rect = event.currentTarget.getBoundingClientRect();
    const fromKeyboard = event.detail === 0;
    const x = fromKeyboard ? rect.left + rect.width / 2 : event.clientX;
    const y = fromKeyboard ? rect.top + rect.height / 2 : event.clientY;

    // The DOM decides the next theme, so state can't go stale between clicks.
    const next: Theme = readPageTheme() === "dark" ? "light" : "dark";
    void swapThemeWithRipple(next, x, y);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={className}
    >
      {children ?? (
        <Sun aria-hidden="true" className="size-5" strokeWidth={1.4} />
      )}
    </button>
  );
}
