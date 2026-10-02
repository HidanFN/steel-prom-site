"use client";

import { useEffect } from "react";
import { RequestForm } from "./RequestForm";
import styles from "./RequestModal.module.css";

type Props = {
  formId: string;
  product?: string;
  onClose: () => void;
};

export function RequestModal({ formId, product, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
          Закрыть
        </button>
        <h2 id={`${formId}-title`}>Отправить запрос</h2>
        <p className="lead">Оставьте контакты — менеджер перезвонит и уточнит задачу.</p>
        <RequestForm formId={formId} defaultProduct={product} compact onSuccess={onClose} />
      </div>
    </div>
  );
}
