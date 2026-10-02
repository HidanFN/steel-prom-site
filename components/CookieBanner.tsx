"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("sp-cookie-ok")) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar} role="dialog" aria-label="Использование cookie">
      <p>
        Мы используем cookie, чтобы сайт стабильно работал. Продолжая работу, вы
        соглашаетесь с этим.
      </p>
      <button
        type="button"
        className="btn"
        onClick={() => {
          try {
            localStorage.setItem("sp-cookie-ok", "1");
          } catch {
            /* ignore */
          }
          setVisible(false);
        }}
      >
        Принять
      </button>
    </div>
  );
}
