import styles from "./page.module.css";
import {
  profile,
  projects,
  experience,
  education,
  skills,
  type Status,
} from "@/content";

const statusLabel: Record<Status, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.place}>{profile.location}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>

        <article className={styles.ticket} aria-label="Support ticket">
          <div className={styles.ticketTop}>
            <span className={styles.ticketId}>INC0001</span>
            <span className={styles.statusSlot}>
              <span
                className={`${styles.pill} ${styles.progress} ${styles.statusBefore}`}
                aria-hidden="true"
              >
                In progress
              </span>
              <span
                className={`${styles.pill} ${styles.resolved} ${styles.statusAfter}`}
              >
                Resolved
              </span>
            </span>
          </div>
          <dl className={styles.fields}>
            <div>
              <dt>Requested by</dt>
              <dd>Your hiring team</dd>
            </div>
            <div>
              <dt>Issue</dt>
              <dd>
                Need someone who can keep IT running and build tools with AI
              </dd>
            </div>
            <div>
              <dt>Assigned to</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Resolution</dt>
              <dd>
                5+ years of Tier 1 and Tier 2 enterprise support, now shipping
                apps and AI automations. {profile.availability}.
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <a className={styles.primary} href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className={styles.secondary} href={profile.linkedin}>
              LinkedIn
            </a>
            <a className={styles.secondary} href={profile.github}>
              GitHub
            </a>
          </div>
        </article>
      </header>

      <section className={styles.section} aria-labelledby="about">
        <h2 id="about">About</h2>
        <div className={styles.prose}>
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project.name} className={styles.project}>
              <div className={styles.projectHead}>
                <h3>{project.name}</h3>
                <span
                  className={`${styles.pill} ${
                    project.status === "shipped"
                      ? styles.resolved
                      : styles.progress
                  }`}
                >
                  {statusLabel[project.status]}
                </span>
              </div>
              <p>{project.description}</p>
              <p className={styles.stack}>{project.stack.join(", ")}</p>
              {project.links && (
                <p className={styles.links}>
                  {project.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <ol className={styles.timeline}>
          {experience.map((job) => (
            <li key={job.company}>
              <p className={styles.when}>{job.period ?? ""}</p>
              <div>
                <h3>{job.title}</h3>
                <p>
                  {job.company}
                  {job.detail && (
                    <span className={styles.detail}>, {job.detail}</span>
                  )}
                </p>
                {job.place && <p className={styles.detail}>{job.place}</p>}
              </div>
            </li>
          ))}
          <li>
            <p className={styles.when}>{education.year}</p>
            <div>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <h2>Get in touch</h2>
        <p>
          The fastest way to reach me is email:{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </main>
  );
}
