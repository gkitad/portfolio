import Link from "next/link";
import styles from "@/app/page.module.css";
import Stamp from "@/components/Stamp";
import ZoomShot from "@/components/ZoomShot";
import { opsLabArchitecture, opsLabGuards, type Project } from "@/content";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.linkIcon}>
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.check}>
      <rect x="1.5" y="1.5" width="13" height="13" />
      <path d="M4.5 8.2 7 10.6l4.6-5.2" />
    </svg>
  );
}

export function ProjectLinks({ project, size = "md", caseStudy = true }: { project: Project; size?: "md" | "sm"; caseStudy?: boolean }) {
  if (!project.demo && !project.source) return null;
  return (
    <p className={`${styles.links} ${size === "sm" ? styles.linksSm : ""}`}>
      {project.demo && (
        <a href={project.demo} className={styles.btnPrimary} aria-label={`Live demo of ${project.name}`}>
          Live demo <Arrow />
        </a>
      )}
      {caseStudy && project.caseStudy && (
        <Link href={project.caseStudy} className={styles.btnGhost}>
          How it works
        </Link>
      )}
      {project.source && (
        <a href={project.source} className={styles.btnGhost} aria-label={`Source code of ${project.name} on GitHub`}>
          Source <Arrow />
        </a>
      )}
    </p>
  );
}

export function Shot({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  if (!project.shot) return null;
  return (
    <ZoomShot
      crop={project.shot.src}
      caption={project.shot.caption}
      full={project.image ? { src: project.image.src, alt: project.image.alt } : undefined}
      sizes={sizes}
      priority={priority}
    />
  );
}

export function Stack({ items }: { items: string[] }) {
  return (
    <ul className={styles.stack} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

/** The steps as one line: names only, the approval step stamped. */
function StepStrip({ project, stamp }: { project: Project; stamp?: boolean }) {
  if (!project.steps) return null;
  return (
    <ol className={styles.strip} aria-label="How it works">
      {project.steps.map((s) => (
        <li key={s.label} className={stamp && s.label === "Approval" ? styles.stripApproval : undefined}>
          <Check />
          {s.label}
          {stamp && s.label === "Approval" && <Stamp label="Approved" />}
        </li>
      ))}
    </ol>
  );
}

function Result({ project }: { project: Project }) {
  if (!project.proof) return null;
  return (
    <div className={styles.result}>
      <span className={styles.label}>Result</span>
      <p>{project.proof}</p>
      {project.evidence && (
        <a href={project.evidence.href} className={styles.btnText}>
          {project.evidence.label} <Arrow />
        </a>
      )}
    </div>
  );
}

export function Featured({ project }: { project: Project }) {
  return (
    <article className={styles.record} aria-labelledby="featured-title">
      <header className={styles.recordHead}>
        <div className={styles.recordTitle}>
          <h3 id="featured-title" className={styles.featuredName}>
            {project.name}
          </h3>
          <p className={styles.recordTagline}>{project.tagline}</p>
        </div>
        <dl className={styles.recordMeta}>
          <div>
            <dt>Type</dt>
            <dd>Featured project</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>{project.meta}</dd>
          </div>
        </dl>
      </header>

      <div className={styles.recordBody}>
        <div className={styles.recordMain}>
          <Shot project={project} sizes="(max-width: 1080px) 100vw, 760px" />
        </div>
        <div className={styles.workflow}>
          <div className={styles.summary}>
            <span className={styles.label}>What I built</span>
            <p>{project.summary}</p>
          </div>
          <Result project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
      <StepStrip project={project} stamp />
    </article>
  );
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className={styles.row} aria-labelledby={`project-${index}`}>
      <Shot project={project} sizes="(max-width: 1080px) 100vw, 560px" />
      <div className={styles.rowBody}>
        <div className={styles.rowHead}>
          <h3 id={`project-${index}`} className={styles.rowName}>
            {project.name}
          </h3>
          <span className={styles.rowMeta}>{project.meta}</span>
        </div>
        <p className={styles.rowTagline}>{project.tagline}</p>
        {project.steps && (
          <p className={styles.flowLine} aria-label="How it works">
            {project.steps.map((s, i) => (
              <span key={s.label}>
                {i > 0 && (
                  <span className={styles.flowArrow} aria-hidden="true">
                    {" "}
                    &rarr;{" "}
                  </span>
                )}
                {s.label}
              </span>
            ))}
          </p>
        )}
        {project.guard && (
          <div className={styles.control}>
            <span className={styles.label}>Control</span>
            <p>{project.guard}</p>
          </div>
        )}
        {project.proof && (
          <div className={styles.control}>
            <span className={styles.label}>Result</span>
            <p>{project.proof}</p>
          </div>
        )}
        <ProjectLinks project={project} size="sm" />
        <details className={styles.more}>
          <summary>More about this project</summary>
          <p>{project.description}</p>
          {project.steps && (
            <ul className={styles.moreSteps}>
              {project.steps.map((s) => (
                <li key={s.label}>
                  <strong>{s.label}.</strong> {s.detail}
                </li>
              ))}
            </ul>
          )}
          <Stack items={project.stack} />
        </details>
      </div>
    </article>
  );
}

export function PersonalProject({ project }: { project: Project }) {
  return (
    <article className={styles.personal} aria-labelledby="personal-title">
      <div className={styles.personalHead}>
        <h3 id="personal-title" className={styles.rowName}>
          {project.name}
        </h3>
        <span className={styles.rowMeta}>Personal project, {project.meta}</span>
      </div>
      <p className={styles.rowTagline}>{project.tagline}</p>
      <p className={styles.rowDesc}>{project.description}</p>
      <Stack items={project.stack} />
    </article>
  );
}

/* ---------- Case study page ---------- */

export function CaseSteps({ project }: { project: Project }) {
  return (
    <ol className={styles.steps}>
      {project.steps?.map((s) => (
        <li key={s.label} className={s.label === "Approval" ? styles.stepApproval : undefined}>
          <Check />
          <span>
            <strong>{s.label}</strong>
            <span className={styles.stepDetail}>{s.detail}</span>
          </span>
          {s.label === "Approval" && <Stamp label="Approved" />}
        </li>
      ))}
    </ol>
  );
}

export function Architecture() {
  return (
    <table className={styles.archTable}>
      <tbody>
        {opsLabArchitecture.map((n) => (
          <tr key={n.name}>
            <th scope="row">{n.name}</th>
            <td>
              {n.detail}
              {n.items && (
                <span className={styles.archItems}>
                  {n.items.map((i) => (
                    <code key={i}>{i}</code>
                  ))}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Guards() {
  return (
    <ul className={styles.guards}>
      {opsLabGuards.map((g) => (
        <li key={g}>
          <Check />
          {g}
        </li>
      ))}
    </ul>
  );
}
