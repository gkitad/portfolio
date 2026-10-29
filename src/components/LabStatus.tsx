"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

const LAB_API = "https://138-197-164-83.sslip.io/api/lab";

const FAULT_NAMES: Record<string, string> = {
  "disk-full": "full disk",
  "app-crash": "crashed app server",
  "dns-stale": "stale DNS record",
  "cert-expired": "expired certificate",
  "db-connections": "database out of connections",
};

type Lab = { busy: boolean; faults: string[] };

/** Reads the real lab's state from the visitor's browser. Renders nothing until it
 *  answers, and nothing at all if the lab can't be reached, so the link beside it
 *  always works on its own. */
export default function LabStatus() {
  const [lab, setLab] = useState<Lab | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    fetch(LAB_API, { cache: "no-store", signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && Array.isArray(j.faults)) setLab({ busy: Boolean(j.busy), faults: j.faults });
      })
      .catch(() => {})
      .finally(() => clearTimeout(t));
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, []);

  if (!lab) return null;
  const names = lab.faults.map((f) => FAULT_NAMES[f] ?? f.replace(/-/g, " "));

  return (
    <p className={styles.labStatus} role="status">
      <span className={styles.labDot} data-busy={lab.busy || undefined} aria-hidden="true" />
      <span>
        <strong>{lab.busy ? "The lab is running an incident right now." : "The lab is online and free right now."}</strong>{" "}
        Faults you can pick: {names.join(", ")}.
      </span>
    </p>
  );
}
