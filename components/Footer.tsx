import Link from "next/link";
import { company } from "@/content/company";
import { branches } from "@/content/branches";
import { categories } from "@/content/catalog";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Logo light />
          <p className={styles.about}>
            {company.legalName}. {company.tagline}. Работаем с {company.foundedYear} года.
          </p>
          <p>
            {company.hq.city}, {company.hq.address}
          </p>
          <p className={styles.phones}>
            <a href={company.phones.sales.href}>{company.phones.sales.display}</a>
            <br />
            <a href={company.phones.general.href}>{company.phones.general.display}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            <a
              href={company.messengers.max.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в MAX
            </a>
          </p>
        </div>
        <div>
          <h2 className={styles.heading}>Каталог</h2>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/catalog/${c.slug}/`}>{c.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Компания</h2>
          <ul>
            <li>
              <Link href="/company/">О компании</Link>
            </li>
            <li>
              <Link href="/company/production/">Производство</Link>
            </li>
            <li>
              <Link href="/company/portfolio/">Портфолио</Link>
            </li>
            <li>
              <Link href="/suppliers/">Поставщикам</Link>
            </li>
            <li>
              <Link href="/contacts/">Контакты</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Филиалы</h2>
          <ul>
            {branches.map((b) => (
              <li key={b.slug}>
                <Link href={`/contacts/?branch=${b.slug}`}>{b.city}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>
          © {company.legalName} {company.foundedYear} — {new Date().getFullYear()}
        </span>
        <span className={styles.legal}>
          <Link href="/privacy-policy/">Политика обработки персональных данных</Link>
          <Link href="/user-agreement/">Пользовательское соглашение</Link>
        </span>
      </div>
    </footer>
  );
}
