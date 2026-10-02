"use client";

import { FormEvent, useId, useState } from "react";
import Link from "next/link";
import { formatPhoneInput } from "@/lib/phone";
import { branches } from "@/content/branches";

type Props = {
  formId: string;
  defaultProduct?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

export function RequestForm({ formId, defaultProduct = "", compact, onSuccess }: Props) {
  const uid = useId();
  const ids = {
    fio: `${formId}-fio`,
    phone: `${formId}-phone`,
    company: `${formId}-company`,
    email: `${formId}-email`,
    branch: `${formId}-branch`,
    product: `${formId}-product`,
    comment: `${formId}-comment`,
    privacy: `${formId}-privacy`,
    captcha: `${formId}-captcha`,
  };

  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setSending(true);
    setStatus("idle");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formId,
          fio: data.get("fio"),
          phone: data.get("phone"),
          company: data.get("company"),
          email: data.get("email"),
          branch: data.get("branch"),
          product: data.get("product"),
          comment: data.get("comment"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      e.currentTarget.reset();
      setPhone("");
      setAgreed(false);
      onSuccess?.();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={ids.fio}>ФИО *</label>
        <input id={ids.fio} name="fio" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor={ids.phone}>Телефон *</label>
        <input
          id={ids.phone}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={phone}
          placeholder="+7 (___) ___-__-__"
          onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
        />
      </div>
      {!compact && (
        <>
          <div className="form-field">
            <label htmlFor={ids.company}>Название компании</label>
            <input id={ids.company} name="company" autoComplete="organization" />
          </div>
          <div className="form-field">
            <label htmlFor={ids.email}>Email</label>
            <input id={ids.email} name="email" type="email" autoComplete="email" />
          </div>
          <div className="form-field">
            <label htmlFor={ids.branch}>Филиал</label>
            <select id={ids.branch} name="branch" defaultValue="beloretsk">
              {branches.map((b) => (
                <option key={b.slug} value={b.slug}>
                  {b.city}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      <div className="form-field">
        <label htmlFor={ids.product}>Интересующая продукция</label>
        <input id={ids.product} name="product" defaultValue={defaultProduct} />
      </div>
      {!compact && (
        <div className="form-field">
          <label htmlFor={ids.comment}>Дополнительная информация</label>
          <textarea id={ids.comment} name="comment" />
        </div>
      )}
      <div className="check">
        <input
          id={ids.privacy}
          name="privacy"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <label htmlFor={ids.privacy}>
          Я согласен на обработку моих{" "}
          <Link href="/user-agreement/">персональных данных</Link> и ознакомлен с{" "}
          <Link href="/privacy-policy/">политикой конфиденциальности</Link>
        </label>
      </div>
      <div id={ids.captcha} className="notice" data-captcha-slot>
        Здесь подключается SmartCaptcha. Ключ выдаёт заказчик — см. README.
      </div>
      {status === "ok" && <p className="form-ok">Заявка принята. Менеджер свяжется с вами.</p>}
      {status === "error" && (
        <p className="form-error">Не удалось отправить. Позвоните 8 (800) 700-34-56.</p>
      )}
      <p>
        <button type="submit" className="btn" disabled={!agreed || sending} aria-describedby={uid}>
          {sending ? "Отправка…" : "Отправить запрос"}
        </button>
      </p>
      <p id={uid} className="lead" style={{ fontSize: "1rem" }}>
        Или позвоните:{" "}
        <a href="tel:+78007003456">8 (800) 700-34-56</a>
      </p>
    </form>
  );
}
