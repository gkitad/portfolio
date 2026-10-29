import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { Featured, PersonalProject, ProjectRow } from "@/components/Work";
import { experience, profile, projects, skills } from "@/content";

export default function Home() {
  const featured = projects.filter((p) => p.kind === "featured");
  const main = projects.filter((p) => p.kind === "main");
  const personal = projects.filter((p) => p.kind === "personal");

  return (
    <div className={styles.page}>
      <a href="#work" className={styles.skip}>
        Skip to projects
      </a>

      <header className={styles.top}>
        <a href="#top" className={styles.id}>
          <span className={styles.idName}>{profile.name}</span>
          <span className={styles.idTitle}>{profile.title}</span>
        </a>
        <Nav />
        <p className={styles.topLinks}>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
        </p>
      </header>

      <main id="top">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroMain}>
            <p className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              Open to remote roles in AI and IT
            </p>
            <h1 id="hero-title" className={styles.heroTitle}>
              I solve IT problems,
              <br />
              and build AI that
              <br />
              <em>solves them too.</em>
            </h1>
            <p className={styles.heroLead}>
              {profile.heroIntro}
            </p>
            <p className={styles.heroActions}>
              <a href="#work" className={styles.btnPrimary}>
                Explore projects
                <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.linkIcon}>
                  <path d="M8 3v10M4 9l4 4 4-4" />
                </svg>
              </a>
              <a href={profile.github} className={styles.btnGhost}>
                GitHub
              </a>
              <a href={profile.linkedin} className={styles.btnText}>
                LinkedIn
              </a>
            </p>
          </div>

          <dl className={styles.facts} aria-label="At a glance">
            <div>
              <dt>Now</dt>
              <dd>
                {experience[0].title}, {experience[0].company}
              </dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>5+ years of enterprise IT support</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>AI agents for IT operations, with approvals and audit logs</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </section>

        <section id="work" className={styles.section} aria-labelledby="work-title">
          <header className={styles.sectionHead}>
            <h2 id="work-title" className={styles.sectionTitle}>
              Selected work
            </h2>
            <p className={styles.sectionNote}>{projects.length} projects, 2026</p>
          </header>

          {featured.map((p) => (
            <Featured key={p.name} project={p} />
          ))}

          <div className={styles.rows}>
            {main.map((p, i) => (
              <ProjectRow key={p.name} project={p} index={i} />
            ))}
          </div>

          {personal.map((p) => (
            <PersonalProject key={p.name} project={p} />
          ))}
        </section>

        <section id="about" className={styles.section} aria-labelledby="about-title">
          <header className={styles.sectionHead}>
            <h2 id="about-title" className={styles.sectionTitle}>
              About
            </h2>
          </header>

          <div className={styles.about}>
            <div className={styles.aboutText}>
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className={styles.aboutSide}>
              <section aria-labelledby="exp-title">
                <h3 id="exp-title" className={styles.miniTitle}>
                  Experience
                </h3>
                <ol className={styles.timeline}>
                  {experience.map((job) => (
                    <li key={job.company}>
                      <span className={styles.when}>{job.period}</span>
                      <span>
                        <strong className={styles.role}>{job.title}</strong>
                        <span className={styles.org}>
                          {job.company}
                          {job.detail && `, ${job.detail}`}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

            </div>
          </div>

          <section className={styles.skillsBlock} aria-labelledby="skills-title">
            <h3 id="skills-title" className={styles.miniTitle}>
              Skills
            </h3>
            <dl className={styles.skills}>
              {skills.map((g) => (
                <div key={g.group}>
                  <dt>{g.group}</dt>
                  <dd>
                    <ul>
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </section>

        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title" className={styles.contactTitle}>
              Let&apos;s talk.
            </h2>
            <p className={styles.contactText}>
              Email works best. I&apos;m open to remote roles in AI and IT.
            </p>
          </div>
          <ul className={styles.contactList}>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin}>linkedin.com/in/anthonyjaimez</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github}>github.com/gkitad</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          © 2026 {profile.name}. {profile.location}.
        </p>
        <p>
          Built with Next.js and deployed on Vercel. <a href="https://github.com/gkitad/portfolio">Source</a>
        </p>
      </footer>
    </div>
  );
}
