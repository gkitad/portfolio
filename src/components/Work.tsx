import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { opsLabArchitecture, type Project } from "@/content";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.arrow}>
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

export function Links({ project }: { project: Project }) {
  return (
    <p className={styles.links}>
      {project.demo && (
        <a href={project.demo} className={styles.button} aria-label={`Live demo of ${project.name}`}>
          Live demo <Arrow />
        </a>
      )}
      {project.source && (
        <a href={project.source} className={styles.textLink} aria-label={`Source code of ${project.name} on GitHub`}>
          Source on GitHub
        </a>
      )}
    </p>
  );
}

function Stack({ items }: { items: string[] }) {
  return <p className={styles.stack}>Built with {items.join(", ")}.</p>;
}

/** Agent Ops Lab: two figures compared, the full screenshot, then how it works. */
export function LabShowcase({ project }: { project: Project }) {
  return (
    <article className={styles.lab} aria-labelledby="lab-title">
      <div className={styles.labTop}>
        <h3 id="lab-title" className={styles.labName} data-reveal="">
          {project.name}
        </h3>
        <div className={styles.labIntro} data-reveal="" style={i(1)}>
          <p className={styles.lead}>{project.tagline}</p>
        </div>
      </div>

      <div className={styles.specimens}>
        <figure className={styles.specimen} data-reveal="" style={i(0)}>
          <figcaption>Outages fixed, tested with Haiku, Sonnet and Opus</figcaption>
          <span className={styles.specimenFigure}>15/15</span>
        </figure>
        <figure className={`${styles.specimen} ${styles.specimenAlt}`} data-reveal="" style={i(2)}>
          <figcaption>Fake instructions the agent followed</figcaption>
          <span className={styles.specimenFigure}>0</span>
        </figure>
      </div>
      {project.proof && <p className={styles.srOnly}>{project.proof}</p>}

      {project.image && (
        <figure className={styles.labShot}>
          <a href={project.demo} className={styles.shutterFrame} data-shutter="" tabIndex={-1} aria-hidden="true">
            <Image src={project.image.src} alt={project.image.alt} sizes="100vw" placeholder="blur" className={styles.labShotImg} />
          </a>
          <figcaption className={styles.caption}>
            {project.image.alt} {project.image.url}
          </figcaption>
        </figure>
      )}

      <div className={styles.stepsBlock}>
        <h4 className={styles.smallHead} data-reveal="">
          How an incident runs
        </h4>
        <ol className={styles.steps}>
          {project.steps?.map((s, n) => (
            <li key={s.label} data-reveal="" style={i(n)}>
              <span className={styles.stepName}>{s.label}</span>
              <span className={styles.stepDetail}>{s.detail}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.labFoot}>
        <div className={styles.labText} data-reveal="">
          <p className={styles.blockMeta}>{project.meta}</p>
          <p>{project.description}</p>
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
        <div className={styles.arch} data-reveal="" style={i(1)}>
          <h4 className={styles.smallHead}>What runs where</h4>
          <table className={styles.archTable}>
            <tbody>
              {opsLabArchitecture.map((n) => (
                <tr key={n.name}>
                  <th scope="row">{n.name}</th>
                  <td>
                    {n.detail}
                    {n.items && (
                      <>
                        {": "}
                        {n.items.map((it, k) => (
                          <span key={it}>
                            <code>{it}</code>
                            {k < n.items!.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>A demo lab I run for this portfolio, not a production system.</p>
        </div>
      </div>
    </article>
  );
}

const DETAIL: Record<string, { pos: string; height: string }> = {
  "AI Incident Responder": { pos: "38% 34%", height: "80svh" },
  "IT Onboarding Agent": { pos: "18% 68%", height: "62svh" },
  "AI Helpdesk Assistant": { pos: "62% 40%", height: "88svh" },
};

/** One project: an oversized detail of its interface, and a small cluster with the whole screen and the facts. */
export function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const d = DETAIL[project.name] ?? { pos: "50% 30%", height: "80svh" };
  return (
    <article className={styles.block} aria-labelledby={`project-${index}`}>
      {project.image && (
        <div className={styles.blockVisual} style={{ "--h": d.height } as CSSProperties} aria-hidden="true">
          <Image
            src={project.image.src}
            alt=""
            sizes="(max-width: 900px) 110vw, 65vw"
            className={styles.blockVisualImg}
            style={{ objectPosition: d.pos }}
          />
        </div>
      )}
      <div className={styles.cluster}>
        {project.image && (
          <a href={project.demo} className={styles.clusterShot} data-reveal="" tabIndex={-1} aria-hidden="true">
            <Image src={project.image.src} alt={project.image.alt} sizes="(max-width: 900px) 70vw, 30vw" placeholder="blur" className={styles.clusterImg} />
          </a>
        )}
        <div className={styles.clusterHead} data-reveal="" style={i(1)}>
          <h3 id={`project-${index}`} className={styles.blockName}>
            {project.name}
          </h3>
          <p className={styles.blockMeta}>{project.meta}</p>
        </div>
        <div className={styles.clusterText} data-reveal="" style={i(2)}>
          <p className={styles.blockTagline}>{project.tagline}</p>
          <p>{project.description}</p>
          {project.steps && (
            <ol className={styles.flow} aria-label="How it works">
              {project.steps.map((s) => (
                <li key={s.label}>
                  <strong>{s.label}.</strong> {s.detail}
                </li>
              ))}
            </ol>
          )}
          {project.guard && <p className={styles.guard}>{project.guard}</p>}
          {project.proof && <p className={styles.guard}>{project.proof}</p>}
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

export function PersonalBlock({ project }: { project: Project }) {
  return (
    <article className={styles.personal} aria-labelledby="personal-title">
      <h3 id="personal-title" className={styles.personalName} data-reveal="">
        {project.name}
      </h3>
      <div className={styles.personalText} data-reveal="" style={i(1)}>
        <p className={styles.blockMeta}>Personal project, {project.meta}</p>
        <p className={styles.blockTagline}>{project.tagline}</p>
        <p>{project.description}</p>
        <Stack items={project.stack} />
      </div>
    </article>
  );
}
