"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/content/company";
import { navItems } from "@/content/navigation";
import { Logo } from "./Logo";
import { RequestModal } from "./RequestModal";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`container ${styles.topInner}`}>
          <Logo />
          <div className={styles.phones}>
            <a href={company.phones.sales.href} className={styles.phone}>
              <span>{company.phones.sales.display}</span>
              <small>{company.phones.sales.label}</small>
            </a>
            <a href={company.phones.general.href} className={styles.phone}>
              <span>{company.phones.general.display}</span>
              <small>{company.phones.general.label}</small>
            </a>
          </div>
          <div className={styles.actions}>
            <Link href="/search/" className={styles.search} aria-label="Поиск по сайту">
              Поиск
            </Link>
            <button type="button" className="btn" onClick={() => setModal(true)}>
              Отправить запрос
            </button>
          </div>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Закрыть меню" : "Меню"}
          </button>
        </div>
      </div>
      <nav id="site-nav" className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Основное меню">
        <div className={`container ${styles.navInner}`}>
          <div className={styles.mobileContacts}>
            <a href={company.phones.sales.href} className={styles.phone}>
              <span>{company.phones.sales.display}</span>
              <small>{company.phones.sales.label}</small>
            </a>
            <button type="button" className="btn" onClick={() => { setOpen(false); setModal(true); }}>
              Отправить запрос
            </button>
          </div>
          {navItems.map((item) => (
            <div key={item.href} className={styles.item}>
              <Link href={item.href} className={styles.link} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.sub}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      {modal && <RequestModal formId="header-request" onClose={() => setModal(false)} />}
    </header>
  );
}
