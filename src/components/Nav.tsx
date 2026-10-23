"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

export default function Nav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className={styles.pill} aria-label="Sections">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={styles.pillLink} aria-current={active === s.id ? "true" : undefined}>
          {s.label}
        </a>
      ))}
    </nav>
  );
}
