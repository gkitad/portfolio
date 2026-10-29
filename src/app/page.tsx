import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { education, experience, profile, projects, skills, type Project } from "@/content";

function ProjectCard({ project }: { project: Project }) {
  const href = project.demo ?? project.source;
  return (
    <article className={styles.project}>
      <header className={styles.projectHead}>
        <div>
          <h3 className={styles.projectName}>
            {href ? <a href={href}>{project.name}</a> : project.name}
          </h3>
          <p className={styles.projectMeta}>
            <strong>{project.meta}.</strong> {project.tagline}
          </p>
        </div>
        {href && (
          <a href={href} className={styles.arrow} aria-label={`Open ${project.name}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </header>

      {project.image && (
        <a href={href} className={styles.shot} tabIndex={-1} aria-hidden="true">
          <div className={styles.shotBar}>
            <span />
            <span />
            <span />
            <p>{project.image.url}</p>
          </div>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            sizes="(max-width: 900px) 100vw, 1000px"
            placeholder="blur"
            className={styles.shotImg}
          />
        </a>
      )}

      <div className={styles.projectFoot}>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectSide}>
          {project.proof && <p className={styles.proof}>{project.proof}</p>}
          <p className={styles.stack}>{project.stack.join(", ")}</p>
          <p className={styles.projectLinks}>
            {project.demo && <a href={project.demo}>Live demo ↗</a>}
            {project.source && <a href={project.source}>Source ↗</a>}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <a href="#top" className={styles.id}>
          <span className={styles.idName}>{profile.name}</span>
          <span className={styles.idTitle}>{profile.title}</span>
        </a>
        <Nav />
        <p className={styles.topLinks}>
          <a href={profile.linkedin}>LinkedIn ↗</a>
          <a href={profile.github}>GitHub ↗</a>
        </p>
      </header>

      <main id="top">
        <section className={styles.window} aria-label="Introduction">
          <div className={styles.chrome} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
              I solve IT problems,
              <br />
              and build AI that
              <br />
              <em>solves them too.</em>
            </h1>
            <div className={styles.heroBio}>
              <p>{profile.heroLead}</p>
              <p className={styles.heroSub}>{profile.heroSub}</p>
            </div>
            <a href="#work" className={styles.down} aria-label="See work">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4v16M6 14l6 6 6-6" />
              </svg>
            </a>
          </div>
        </section>

        <section id="work" className={styles.work} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.sectionTitle}>
            Selected work <span>’26</span>
          </h2>
          <div className={styles.projects}>
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        <section id="about" className={styles.about} aria-labelledby="about-title">
          <h2 id="about-title" className={styles.sectionTitle}>
            About
          </h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className={styles.aboutSide}>
              <section aria-labelledby="exp-title">
                <h3 id="exp-title" className={styles.listTitle}>
                  Experience
                </h3>
                <ol className={styles.rows}>
                  {experience.map((job) => (
                    <li key={job.company}>
                      <div>
                        <p className={styles.rowMain}>{job.company}</p>
                        <p className={styles.rowSub}>
                          {job.title}
                          {job.detail && `, ${job.detail}`}
                        </p>
                      </div>
                      {job.period && <p className={styles.rowDate}>{job.period}</p>}
                    </li>
                  ))}
                  <li>
                    <div>
                      <p className={styles.rowMain}>{education.degree}</p>
                      <p className={styles.rowSub}>{education.school}</p>
                    </div>
                    <p className={styles.rowDate}>{education.year}</p>
                  </li>
                </ol>
              </section>

              <section aria-labelledby="skills-title">
                <h3 id="skills-title" className={styles.listTitle}>
                  Skills
                </h3>
                <ul className={styles.skills}>
                  {skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="contact-title">
          <h2 id="contact-title" className={styles.contactTitle}>
            Let&apos;s talk.
          </h2>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>
          <p className={styles.contactLinks}>
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <a href={profile.github}>GitHub ↗</a>
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 {profile.name}. {profile.location}.</p>
        <p>
          Built with Next.js and deployed on Vercel. <a href="https://github.com/gkitad/portfolio">Source ↗</a>
        </p>
      </footer>
    </div>
  );
}
