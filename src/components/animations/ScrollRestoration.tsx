"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "ie-scroll-positions";

type LenisLike = { scrollTo: (y: number, opts?: { immediate?: boolean; force?: boolean }) => void };

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writePosition(key: string, y: number) {
  try {
    const positions = readPositions();
    positions[key] = y;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // sessionStorage unavailable; restoration simply falls back to top
  }
}

const currentKey = () => window.location.pathname + window.location.search;

/**
 * Restores the exact scroll position when the user navigates back/forward.
 * The browser's native restoration fires before lazy content (images, animated
 * sections, dynamic imports) has its final height, so it lands too high. We
 * save positions ourselves and re-apply until the page is tall enough.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const isPop = useRef(false);
  const cancelRestore = useRef<(() => void) | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    let ticking = false;
    const save = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        writePosition(currentKey(), window.scrollY);
      });
    };
    const onPop = () => {
      isPop.current = true;
    };
    // User scrolling or clicking aborts an in-progress restore
    const abort = () => cancelRestore.current?.();

    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("popstate", onPop);
    window.addEventListener("wheel", abort, { passive: true });
    window.addEventListener("touchstart", abort, { passive: true });
    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("wheel", abort);
      window.removeEventListener("touchstart", abort);
    };
  }, []);

  useEffect(() => {
    if (!isPop.current) return;
    isPop.current = false;

    const target = readPositions()[currentKey()];
    if (!target) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const start = performance.now();
    let frame = 0;
    let settledSince = 0;

    const apply = () => {
      const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
      if (lenis) lenis.scrollTo(target, { immediate: true, force: true });
      else window.scrollTo(0, target);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
      cancelRestore.current = null;
    };

    const tick = (now: number) => {
      const maxScroll = root.scrollHeight - window.innerHeight;
      if (maxScroll >= target - 1) {
        apply();
        // Keep re-applying briefly: late layout shifts can move the position
        if (!settledSince) settledSince = now;
        if (now - settledSince > 600) return stop();
      }
      if (now - start > 4000) return stop();
      frame = requestAnimationFrame(tick);
    };

    cancelRestore.current = stop;
    frame = requestAnimationFrame(tick);
    return stop;
  }, [pathname]);

  return null;
}
