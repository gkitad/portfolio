import Image from "next/image";
import styles from "@/app/page.module.css";
import Stamp from "@/components/Stamp";
import { opsLabArchitecture, type Project } from "@/content";

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

export function ProjectLinks({ project, size = "md" }: { project: Project; size?: "md" | "sm" }) {
  if (!project.demo && !project.source) return null;
  return (
    <p className={`${styles.links} ${size === "sm" ? styles.linksSm : ""}`}>
      {project.demo && (
        <a href={project.demo} className={styles.btnPrimary} aria-label={`Live demo of ${project.name}`}>
          Live demo <Arrow />
        </a>
      )}
      {project.source && (
        <a href={project.source} className={styles.btnGhost} aria-label={`Source code of ${project.name} on GitHub`}>
          Source <Arrow />
        </a>
      )}
    </p>
  );
}

export function Shot({ project, sizes, crop }: { project: Project; sizes: string; crop?: boolean }) {
  if (!project.image) return null;
  return (
    <figure className={styles.attach}>
      <a href={project.demo ?? project.source} className={crop ? styles.attachCrop : styles.attachFull} tabIndex={-1} aria-hidden="true">
        <Image src={project.image.src} alt={project.image.alt} sizes={sizes} placeholder="blur" className={styles.attachImg} />
      </a>
      <figcaption className={styles.attachCap}>
        <span>Attachment</span>
        <span>{project.image.url}</span>
      </figcaption>
    </figure>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className={styles.stack} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
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
        <Shot project={project} sizes="(max-width: 980px) 100vw, 760px" />

        <div className={styles.workflow}>
          <h4 className={styles.boxTitle}>How an incident runs</h4>
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
          {project.proof && (
            <div className={styles.result}>
              <span className={styles.label}>Result</span>
              <p>{project.proof}</p>
            </div>
          )}
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className={styles.recordFoot}>
        <div className={styles.recordText}>
          <span className={styles.label}>Description</span>
          <p>{project.description}</p>
          <Stack items={project.stack} />
        </div>
        <figure className={styles.arch} aria-labelledby="arch-caption">
          <figcaption id="arch-caption" className={styles.boxTitle}>
            What runs where
          </figcaption>
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
          <p className={styles.archNote}>A demo lab I run for this portfolio, not a production system.</p>
        </figure>
      </div>
    </article>
  );
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className={styles.row} aria-labelledby={`project-${index}`}>
      <Shot project={project} sizes="(max-width: 980px) 100vw, 520px" crop />
      <div className={styles.rowBody}>
        <div className={styles.rowHead}>
          <h3 id={`project-${index}`} className={styles.rowName}>
            {project.name}
          </h3>
          <span className={styles.rowMeta}>{project.meta}</span>
        </div>
        <p className={styles.rowTagline}>{project.tagline}</p>
        {project.steps && (
          <ol className={styles.flow} aria-label="How it works">
            {project.steps.map((s) => (
              <li key={s.label}>
                <strong>{s.label}</strong>
                <span>{s.detail}</span>
              </li>
            ))}
          </ol>
        )}
        <p className={styles.rowDesc}>{project.description}</p>
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
        <div className={styles.rowFoot}>
          <Stack items={project.stack} />
          <ProjectLinks project={project} size="sm" />
        </div>
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
