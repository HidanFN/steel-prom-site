import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`${styles.logo} ${light ? styles.light : ""}`} aria-label="СтальПром — на главную">
      <span className={styles.text}>
        <strong>СТАЛЬПРОМ</strong>
        <small>грузоподъёмное оборудование</small>
      </span>
    </Link>
  );
}
