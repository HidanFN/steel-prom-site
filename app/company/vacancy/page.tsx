import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RequestButton } from "@/components/RequestButton";
import { vacancies } from "@/content/pages";

export const metadata: Metadata = { title: "Вакансии" };

export default function VacancyPage() {
  return (
    <>
      <PageHero
        title="Вакансии"
        text="Актуальные позиции. Резюме можно прислать через форму запроса."
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Вакансии" },
        ]}
      />
      <section className="section">
        <div className="container">
          {vacancies.map((v) => (
            <article key={v.title} className="card" style={{ marginBottom: 18 }}>
              <div className="card-body">
                <h2>{v.title}</h2>
                <p>{v.city}</p>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
          <RequestButton formId="vacancy" product="Резюме / вакансия">
            Откликнуться
          </RequestButton>
        </div>
      </section>
    </>
  );
}
