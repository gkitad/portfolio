"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";

/** The rubber stamp that lands on the approval step. Visible by default; it only
 *  animates when script runs, motion is allowed and it starts out of view. */
export default function Stamp({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<"rest" | "armed" | "pressed">("rest");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;
    setState("armed");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("pressed");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -25% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={styles.stamp} data-state={state} aria-hidden="true">
      {label}
    </span>
  );
}
