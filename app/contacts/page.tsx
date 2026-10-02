import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { branches, getBranch } from "@/content/branches";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Телефоны, адреса филиалов и форма заявки СтальПром.",
};

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ branch?: string }>;
}) {
  const { branch } = await searchParams;
  const current = getBranch(branch);

  return (
    <>
      <PageHero
        title="Контакты"
        text="Отдел продаж и филиалы. Выберите город — покажем контакты склада."
        crumbs={[{ href: "/", label: "Главная" }, { label: "Контакты" }]}
      />
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {branches.map((b) => (
              <Link
                key={b.slug}
                href={`/contacts/?branch=${b.slug}`}
                className={b.slug === current.slug ? "btn" : "btn btn-outline"}
              >
                {b.city}
              </Link>
            ))}
          </div>
          <div className="split">
            <div>
              <h2>
                {company.legalName} — {current.city}
              </h2>
              {current.note && <p>{current.note}</p>}
              <p>
                Адрес: {current.address}
                <br />
                Телефон: <a href={current.phoneHref}>{current.phone}</a>
                <br />
                Email: <a href={`mailto:${current.email}`}>{current.email}</a>
              </p>
              <p>
                Отдел продаж: <a href={company.phones.sales.href}>{company.phones.sales.display}</a>
                <br />
                Общие вопросы: <a href={company.phones.general.href}>{company.phones.general.display}</a>
              </p>
              <p>
                <a href={company.messengers.max.href} target="_blank" rel="noopener noreferrer">
                  Написать в MAX
                </a>
              </p>
              <div
                className="notice"
                style={{ minHeight: 220, display: "grid", placeItems: "center", textAlign: "center" }}
              >
                Карта филиала подключается ключом Яндекс.Карт (без mode=debug). Ограничьте ключ по HTTP Referer.
              </div>
            </div>
            <div>
              <h2>Отправить запрос</h2>
              <RequestForm formId="contacts-form" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
