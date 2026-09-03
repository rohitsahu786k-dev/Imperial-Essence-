"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 0 : (window.scrollY / max) * 100);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent" aria-hidden="true">
      <div className="h-full bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#e5b85c]" style={{ width: `${progress}%` }} />
    </div>
  );
}

