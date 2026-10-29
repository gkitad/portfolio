import styles from "./page.module.css";
import Nav from "@/components/Nav";
import { Featured, PersonalProject, ProjectRow, Shot } from "@/components/Work";
import { experience, profile, projects, skills } from "@/content";

export default function Home() {
  const featured = projects.filter((p) => p.kind === "featured");
  const main = projects.filter((p) => p.kind === "main");
  const personal = projects.filter((p) => p.kind === "personal");
  const lab = featured[0];

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
        <section id="intro" className={`${styles.sheet} ${styles.sheetWhite}`} aria-labelledby="hero-title">
          <div className={styles.hero}>
            <div className={styles.heroMain}>
              <dl className={styles.fields} aria-label="At a glance">
                <div className={styles.fieldWide}>
                  <dt>Status</dt>
                  <dd>
                    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.check}>
                      <rect x="1.5" y="1.5" width="13" height="13" />
                      <path d="M4.5 8.2 7 10.6l4.6-5.2" />
                    </svg>
                    Open to remote roles in AI and IT
                  </dd>
                </div>
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

              <div className={styles.statement}>
                <h1 id="hero-title" className={styles.heroTitle}>
                  I solve IT problems, and build AI that solves them too.
                </h1>
                <p className={styles.heroLead}>{profile.heroIntro}</p>
              </div>
            </div>

            <div className={styles.heroSide}>
              {lab && <Shot project={lab} sizes="(max-width: 980px) 100vw, 1000px" />}
              <div className={styles.approval}>
                <p className={styles.approvalText}>
                  <strong>{lab?.name}.</strong> {lab?.tagline}
                </p>
                <p className={styles.heroActions}>
                  {lab?.demo && (
                    <a href={lab.demo} className={styles.btnPrimary} aria-label={`Live demo of ${lab.name}`}>
                      Live demo
                      <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.linkIcon}>
                        <path d="M5 11 11 5M6 5h5v5" />
                      </svg>
                    </a>
                  )}
                  <a href={profile.resume} className={styles.btnGhost} target="_blank" rel="noopener">
                    Resume PDF
                  </a>
                  <a href="#work" className={styles.btnText}>
                    Explore projects
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.copies} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section id="work" className={`${styles.sheet} ${styles.sheetCanary}`} aria-labelledby="work-title">
          <header className={styles.bar}>
            <h2 id="work-title" className={styles.barTitle}>
              Selected work
            </h2>
            <p className={styles.barNote}>{projects.length} projects, 2026</p>
          </header>

          <div className={styles.sheetInner}>
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
          </div>
        </section>

        <section id="about" className={`${styles.sheet} ${styles.sheetPink}`} aria-labelledby="about-title">
          <header className={styles.bar}>
            <h2 id="about-title" className={styles.barTitle}>
              About
            </h2>
          </header>

          <div className={styles.sheetInner}>
            <div className={styles.about}>
              <div className={styles.aboutText}>
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <section className={styles.box} aria-labelledby="exp-title">
                <h3 id="exp-title" className={styles.boxTitle}>
                  Experience
                </h3>
                <table className={styles.expTable}>
                  <thead>
                    <tr>
                      <th scope="col">Years</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experience.map((job) => (
                      <tr key={job.company}>
                        <td className={styles.when}>{job.period}</td>
                        <td>
                          <strong className={styles.role}>{job.title}</strong>
                          <span className={styles.org}>
                            {job.company}
                            {job.detail && `, ${job.detail}`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>

            <section className={styles.box} aria-labelledby="skills-title">
              <h3 id="skills-title" className={styles.boxTitle}>
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
          </div>
        </section>

        <section id="contact" className={`${styles.sheet} ${styles.sheetGold}`} aria-labelledby="contact-title">
          <div className={styles.contact}>
            <div>
              <h2 id="contact-title" className={styles.contactTitle}>
                Let&apos;s talk.
              </h2>
              <p className={styles.contactText}>Email works best. I&apos;m open to remote roles in AI and IT.</p>
            </div>
            <dl className={styles.contactList}>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin}>linkedin.com/in/anthonyjaimez</a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={profile.github}>github.com/gkitad</a>
                </dd>
              </div>
              <div>
                <dt>Resume</dt>
                <dd>
                  <a href={profile.resume} target="_blank" rel="noopener">
                    Anthony_Jaimez_Resume.pdf
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerInner}>
            <p>
              © 2026 {profile.name}. {profile.location}.
            </p>
            <p>
              Built with Next.js and deployed on Vercel. <a href="https://github.com/gkitad/portfolio">Source</a>
            </p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
