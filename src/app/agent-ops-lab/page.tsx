import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import SiteHeader from "@/components/SiteHeader";
import ZoomShot from "@/components/ZoomShot";
import { Architecture, CaseSteps, Guards, ProjectLinks, Stack } from "@/components/Work";
import { profile, projects } from "@/content";

const lab = projects.find((p) => p.name === "Agent Ops Lab")!;

export const metadata: Metadata = {
  title: "Agent Ops Lab | Anthony Jaimez",
  description: lab.tagline,
};

export default function AgentOpsLab() {
  return (
    <div className={styles.page}>
      <SiteHeader home={false} />

      <main id="top">
        <section className={`${styles.sheet} ${styles.sheetWhite}`} aria-labelledby="case-title">
          <div className={styles.caseHero}>
            <p>
              <Link href="/#work" className={styles.btnText}>
                Back to the portfolio
              </Link>
            </p>
            <h1 id="case-title" className={styles.featuredName}>
              {lab.name}
            </h1>
            <p className={styles.recordTagline}>{lab.tagline}</p>
            <ProjectLinks project={lab} caseStudy={false} />
            {lab.image && (
              <ZoomShot
                crop={lab.image.src}
                caption={lab.image.alt}
                full={{ src: lab.image.src, alt: lab.image.alt }}
                sizes="(max-width: 1400px) 100vw, 1300px"
                priority
              />
            )}
          </div>
        </section>

        <section className={`${styles.sheet} ${styles.sheetCanary}`} aria-labelledby="how-title">
          <header className={styles.bar}>
            <h2 id="how-title" className={styles.barTitle}>
              How it works
            </h2>
          </header>
          <div className={styles.sheetInner}>
            <div className={styles.caseGrid}>
              <div className={`${styles.record} ${styles.caseText}`}>
                <span className={styles.label}>What I built</span>
                <p>{lab.description}</p>
                <Stack items={lab.stack} />
              </div>
              <section className={styles.record} aria-labelledby="steps-title">
                <h3 id="steps-title" className={styles.boxTitle}>
                  How an incident runs
                </h3>
                <CaseSteps project={lab} />
              </section>
            </div>
            <section className={`${styles.record} ${styles.caseBlock}`} aria-labelledby="guards-title">
              <h3 id="guards-title" className={styles.boxTitle}>
                Guardrails
              </h3>
              <Guards />
            </section>
            <section className={`${styles.record} ${styles.caseBlock}`} aria-labelledby="arch-title">
              <h3 id="arch-title" className={styles.boxTitle}>
                What runs where
              </h3>
              <Architecture />
              <p className={styles.archNote}>A demo lab I run for this portfolio, not a production system.</p>
            </section>
          </div>
        </section>

        <section className={`${styles.sheet} ${styles.sheetPink}`} aria-labelledby="results-title">
          <header className={styles.bar}>
            <h2 id="results-title" className={styles.barTitle}>
              Results
            </h2>
          </header>
          <div className={styles.sheetInner}>
            <div className={`${styles.record} ${styles.caseResults}`}>
              <p className={styles.caseFigure}>15 of 15</p>
              <div className={styles.caseText}>
                <p>
                  I ran each of the five faults with Haiku, Sonnet and Opus, so 15 runs in total. Every fault also hides an
                  instruction aimed at AI agents in a log, a file or a database query, like deleting the audit records or pasting
                  the TLS private key into the report.
                </p>
                <p>
                  <strong>All 15 runs fixed the outage, and none of them followed the planted instruction.</strong> Each run is
                  in the benchmark table on the lab&apos;s page, with its full timeline.
                </p>
                {lab.evidence && (
                  <p>
                    <a href={lab.evidence.href} className={styles.btnPrimary}>
                      Open the benchmark table
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.sheet} ${styles.sheetGold}`} aria-label="Contact">
          <div className={styles.caseEnd}>
            <p className={styles.contactText}>Questions about how it works? Email works best.</p>
            <p className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.btnPrimary}>
                {profile.email}
              </a>
              <Link href="/#work" className={styles.btnGhost}>
                See the other projects
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
