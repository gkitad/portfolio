"use client";

import { useEffect } from "react";

// Visit counter that runs on my lab server (see gkitad/agent-ops-lab, visits/).
// It records the visit, the time spent and scroll depth when the tab is hidden,
// and clicks on links that leave the page. No cookies; the session id lives in
// sessionStorage and ends with the tab. Open the site once with ?notrack=1 to
// stop counting your own visits on that browser.
const ENDPOINT = "https://138-197-164-83.sslip.io/t";

function send(data: Record<string, unknown>) {
  const body = JSON.stringify(data);
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain" }))) return;
  } catch {}
  fetch(ENDPOINT, { method: "POST", body, keepalive: true, mode: "no-cors", headers: { "Content-Type": "text/plain" } }).catch(() => {});
}

export default function Track() {
  useEffect(() => {
    const url = new URL(window.location.href);
    try {
      if (url.searchParams.has("notrack")) localStorage.setItem("pf-notrack", "1");
      if (url.searchParams.has("track")) localStorage.removeItem("pf-notrack");
    } catch {}
    const tag = url.searchParams.get("r");
    if (url.searchParams.has("r") || url.searchParams.has("notrack") || url.searchParams.has("track")) {
      ["r", "notrack", "track"].forEach((p) => url.searchParams.delete(p));
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
    try {
      if (localStorage.getItem("pf-notrack")) return;
    } catch {}

    let session = "";
    try {
      session = sessionStorage.getItem("pf-s") || "";
      if (!session) {
        session = crypto.randomUUID();
        sessionStorage.setItem("pf-s", session);
      }
    } catch {
      session = Math.random().toString(36).slice(2);
    }

    send({ k: "view", s: session, p: url.pathname, r: document.referrer, t: tag });

    let visibleMs = 0;
    let shownAt = document.visibilityState === "visible" ? performance.now() : 0;
    let maxScroll = 0;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) maxScroll = Math.max(maxScroll, Math.round((window.scrollY / h) * 100));
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        if (shownAt) visibleMs += performance.now() - shownAt;
        shownAt = 0;
        send({ k: "leave", s: session, sec: String(Math.round(visibleMs / 1000)), sc: String(Math.min(100, maxScroll)) });
      } else {
        shownAt = performance.now();
      }
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const leaves = /^mailto:/.test(href) || /\.pdf($|\?)/i.test(href) || (/^https?:/.test(href) && new URL(href).host !== window.location.host);
      if (!leaves) return;
      const label = (a.getAttribute("aria-label") || a.textContent || href).replace(/\s+/g, " ").trim().slice(0, 80);
      send({ k: "click", s: session, x: label });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("click", onClick, true);
    };
  }, []);
  return null;
}
