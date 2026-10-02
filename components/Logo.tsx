import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`${styles.logo} ${light ? styles.light : ""}`} aria-label="СтальПром — на главную">
      <span className={styles.mark} aria-hidden>
        СП
      </span>
      <span className={styles.text}>
        <strong>СтальПром</strong>
        <small>Грузоподъёмное оборудование</small>
      </span>
    </Link>
  );
}
