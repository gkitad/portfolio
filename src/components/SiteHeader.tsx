import Link from "next/link";
import styles from "@/app/page.module.css";
import Nav from "@/components/Nav";
import { profile } from "@/content";

/** The header on every page. On the home page links jump to sections; elsewhere they go back home first. */
export default function SiteHeader({ home = true }: { home?: boolean }) {
  return (
    <header className={styles.top}>
      <Link href={home ? "#top" : "/"} className={styles.id}>
        <span className={styles.idName}>{profile.name}</span>
        <span className={styles.idTitle}>{profile.title}</span>
      </Link>
      <Nav base={home ? "" : "/"} />
      <p className={styles.topLinks}>
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
      </p>
    </header>
  );
}
