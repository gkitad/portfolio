"use client";

import { useEffect } from "react";

/** Adds `is-in` to every [data-reveal] and [data-shutter] element once, as it enters
 *  the screen. The hidden state only exists under html.js, so content shows without
 *  script. A shutter is clipped while hidden, so its parent is what gets watched. */
export default function Reveal() {
  useEffect(() => {
    const targets = new Map<Element, Element>();
    document.querySelectorAll("[data-reveal]").forEach((el) => targets.set(el, el));
    document.querySelectorAll("[data-shutter]").forEach((el) => targets.set(el.parentElement ?? el, el));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            targets.get(e.target)?.classList.add("is-in");
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );
    targets.forEach((_, watched) => io.observe(watched));
    return () => io.disconnect();
  }, []);
  return null;
}
