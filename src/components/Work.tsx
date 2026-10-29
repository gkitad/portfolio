import Image from "next/image";
import styles from "@/app/page.module.css";
import { opsLabArchitecture, type Project } from "@/content";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.linkIcon}>
      <path d="M5 11 11 5M6 5h5v5" />
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

function Shot({ project, sizes, crop }: { project: Project; sizes: string; crop?: boolean }) {
  if (!project.image) return null;
  return (
    <a href={project.demo ?? project.source} className={styles.shot} tabIndex={-1} aria-hidden="true">
      <span className={styles.shotBar}>
        <span />
        <span />
        <span />
        <span className={styles.shotUrl}>{project.image.url}</span>
      </span>
      <span className={crop ? styles.shotCrop : styles.shotFull}>
        <Image src={project.image.src} alt={project.image.alt} sizes={sizes} placeholder="blur" className={styles.shotImg} />
      </span>
    </a>
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
    <article className={styles.featured} aria-labelledby="featured-title">
      <header className={styles.featuredHead}>
        <div>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Featured project, {project.meta}
          </p>
          <h3 id="featured-title" className={styles.featuredName}>
            {project.name}
          </h3>
          <p className={styles.featuredTagline}>{project.tagline}</p>
        </div>
        <ProjectLinks project={project} />
      </header>

      <div className={styles.featuredBody}>
        <Shot project={project} sizes="(max-width: 980px) 100vw, 760px" />

        <div className={styles.featuredSide}>
          <h4 className={styles.miniTitle}>How an incident runs</h4>
          <ol className={styles.sequence}>
            {project.steps?.map((s, i) => (
              <li key={s.label}>
                <span className={styles.seqNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{s.label}</strong>
                  <span className={styles.seqDetail}>{s.detail}</span>
                </span>
              </li>
            ))}
          </ol>
          {project.proof && <p className={styles.proof}>{project.proof}</p>}
        </div>
      </div>

      <div className={styles.featuredFoot}>
        <div className={styles.featuredText}>
          <p>{project.description}</p>
          <Stack items={project.stack} />
        </div>
        <figure className={styles.arch} aria-labelledby="arch-caption">
          <figcaption id="arch-caption" className={styles.miniTitle}>
            What runs where
          </figcaption>
          <ol className={styles.archList}>
            {opsLabArchitecture.map((n) => (
              <li key={n.name}>
                <strong>{n.name}</strong>
                <span>{n.detail}</span>
                {n.items && (
                  <span className={styles.archItems}>
                    {n.items.map((i) => (
                      <code key={i}>{i}</code>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ol>
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
        <p className={styles.rowMeta}>{project.meta}</p>
        <h3 id={`project-${index}`} className={styles.rowName}>
          {project.name}
        </h3>
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
          <p className={styles.guard}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 1.5 13.5 3.5v4c0 3.2-2.3 5.8-5.5 7-3.2-1.2-5.5-3.8-5.5-7v-4L8 1.5Z" />
            </svg>
            {project.guard}
          </p>
        )}
        {project.proof && <p className={styles.proof}>{project.proof}</p>}
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
      <p className={styles.rowMeta}>Personal project, {project.meta}</p>
      <div className={styles.personalBody}>
        <div>
          <h3 id="personal-title" className={styles.personalName}>
            {project.name}
          </h3>
          <p className={styles.rowTagline}>{project.tagline}</p>
        </div>
        <p className={styles.rowDesc}>{project.description}</p>
        <Stack items={project.stack} />
      </div>
    </article>
  );
}
