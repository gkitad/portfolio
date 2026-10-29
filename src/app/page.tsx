import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import LabStatus from "@/components/LabStatus";
import Reveal from "@/components/Reveal";
import { LabShowcase, PersonalBlock, ProjectBlock } from "@/components/Work";
import { experience, profile, projects, skills } from "@/content";

const MARKS: [string, string][] = [
  ["more than five years", styles.mark1],
  ["since 2017", styles.mark2],
  ["Peru", styles.mark3],
  ["Capgemini", styles.mark1],
  ["Round Rock ISD", styles.mark2],
  ["Samsung's semiconductor plant in Austin", styles.mark3],
  ["wait for a person", styles.mark1],
];

/** Wraps the listed phrases in highlighter marks, leaving the text itself unchanged. */
function highlight(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = text;
  let key = 0;
  while (rest) {
    let best: { at: number; phrase: string; cls: string } | null = null;
    for (const [phrase, cls] of MARKS) {
      const at = rest.indexOf(phrase);
      if (at >= 0 && (!best || at < best.at)) best = { at, phrase, cls };
    }
    if (!best) {
      out.push(rest);
      break;
    }
    if (best.at > 0) out.push(rest.slice(0, best.at));
    out.push(
      <mark key={key++} className={best.cls}>
        {best.phrase}
      </mark>,
    );
    rest = rest.slice(best.at + best.phrase.length);
  }
  return out;
}

const i = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Home() {
  const featured = projects.find((p) => p.kind === "featured");
  const main = projects.filter((p) => p.kind === "main");
  const personal = projects.filter((p) => p.kind === "personal");
  const about = [profile.heroIntro, ...profile.about];
  const closing = about.pop() ?? "";

  return (
    <>
      <Reveal />
      <a href="#work" className={styles.skip}>
        Skip to projects
      </a>

      <header className={styles.hero} id="top">
        <div className={styles.heroCornerTL}>
          <p className={styles.heroSentence}>I solve IT problems, and build AI that solves them too.</p>
          {featured?.demo && (
            <p className={styles.heroAction}>
              <a href={featured.demo} className={styles.button}>
                Live demo of {featured.name}
                <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.arrow}>
                  <path d="M5 11 11 5M6 5h5v5" />
                </svg>
              </a>
            </p>
          )}
          <LabStatus />
        </div>

        <nav className={styles.heroCornerTR} aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <h1 className={styles.name}>
          <span className={styles.nameInner}>{profile.name}</span>
        </h1>

        <p className={styles.heroCornerBL}>
          {profile.title}, {profile.location}
        </p>

        <p className={styles.heroCornerBR}>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noopener">
            Resume PDF
          </a>
        </p>

        {featured?.image && (
          <div className={styles.heroPhoneShot} aria-hidden="true">
            <Image src={featured.image.src} alt="" sizes="100vw" priority className={styles.heroPhoneImg} />
          </div>
        )}
      </header>

      <main>
        <section id="work" className={styles.work} aria-labelledby="work-title">
          <header className={styles.workHead}>
            <h2 id="work-title" className={styles.sectionTitle} data-reveal="">
              Selected work
            </h2>
          </header>

          {featured && <LabShowcase project={featured} />}

          <div className={styles.blocks}>
            {main.map((p, n) => (
              <ProjectBlock key={p.name} project={p} index={n} />
            ))}
          </div>

          {personal.map((p) => (
            <PersonalBlock key={p.name} project={p} />
          ))}
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <h2 id="about-title" className={styles.sectionTitle} data-reveal="">
            About
          </h2>
          <div className={styles.aboutText} data-reveal="" style={i(1)}>
            {about.map((p) => (
              <p key={p}>{highlight(p)}</p>
            ))}
            <p>
              <a href="#contact" className={styles.closing}>
                {closing}
              </a>
            </p>
          </div>
        </section>

        <section className={styles.lineup} aria-labelledby="exp-title">
          <h2 id="exp-title" className={styles.lineupHead} data-reveal="">
            Experience
          </h2>
          <table className={styles.lineupTable} data-reveal="" style={i(1)}>
            <thead className={styles.srOnly}>
              <tr>
                <th scope="col">Role</th>
                <th scope="col">Company</th>
                <th scope="col">Client or place</th>
                <th scope="col">Years</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((job) => (
                <tr key={job.company}>
                  <td className={styles.lineupRole}>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.detail ?? ""}</td>
                  <td className={styles.lineupYears}>{job.period}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 id="skills-title" className={styles.lineupHead}>
            Skills
          </h2>
          <table className={styles.lineupTable} aria-labelledby="skills-title">
            <tbody>
              {skills.map((g) => (
                <tr key={g.group}>
                  <th scope="row" className={styles.lineupRole}>
                    {g.group}
                  </th>
                  <td colSpan={3}>{g.items.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactRow}>
            <h2 id="contact-title" className={styles.contactGreeting}>
              Let&apos;s talk.
            </h2>
            <a href={`mailto:${profile.email}`} className={styles.contactButton} aria-label={`Email ${profile.email}`}>
              <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.arrow}>
                <path d="M5 11 11 5M6 5h5v5" />
              </svg>
            </a>
            <p className={styles.contactNote}>Email works best. I&apos;m open to remote roles in AI and IT.</p>
          </div>
          <a href={`mailto:${profile.email}`} className={styles.contactRow}>
            {profile.email}
          </a>
          <a href={profile.linkedin} className={styles.contactRow}>
            linkedin.com/in/anthonyjaimez
          </a>
          <a href={profile.github} className={styles.contactRow}>
            github.com/gkitad
          </a>
          <a href={profile.resume} className={styles.contactRow} target="_blank" rel="noopener">
            Anthony_Jaimez_Resume.pdf
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <p className={styles.invite}>Open to remote roles in AI and IT.</p>
            <p>
              <a href={profile.resume} className={styles.buttonInverse} target="_blank" rel="noopener">
                Resume PDF
              </a>
            </p>
          </div>
          <ul className={styles.footerLinks}>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={profile.github}>GitHub</a>
            </li>
          </ul>
        </div>
        <div className={styles.legal}>
          <p>
            © 2026 {profile.name}. {profile.location}.
          </p>
          <p>
            Built with Next.js and deployed on Vercel. <a href="https://github.com/gkitad/portfolio">Source</a>
          </p>
        </div>
        <p className={styles.wordmark} aria-hidden="true">
          {profile.name}
        </p>
      </footer>
    </>
  );
}
