import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RequestButton } from "@/components/RequestButton";
import { documents } from "@/content/pages";

export const metadata: Metadata = { title: "Разрешительная документация" };

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        title="Разрешительная документация"
        text="Сертификаты и декларации высылаем вместе с коммерческим предложением."
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Документация" },
        ]}
      />
      <section className="section">
        <div className="container">
          {documents.map((d) => (
            <article key={d.title} style={{ marginBottom: 22 }}>
              <h2>{d.title}</h2>
              <p>{d.note}</p>
            </article>
          ))}
          <RequestButton formId="docs" product="Запрос сертификатов">
            Запросить документы
          </RequestButton>
        </div>
      </section>
    </>
  );
}
