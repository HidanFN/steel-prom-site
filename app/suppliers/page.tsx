import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RequestForm } from "@/components/RequestForm";
import { suppliersText } from "@/content/pages";

export const metadata: Metadata = { title: "Поставщикам" };

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        title={suppliersText.title}
        text={suppliersText.lead}
        crumbs={[{ href: "/", label: "Главная" }, { label: "Поставщикам" }]}
      />
      <section className="section">
        <div className="container split">
          <div>
            <h2>Что рассматриваем</h2>
            <ul>
              {suppliersText.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="lead">{suppliersText.how}</p>
          </div>
          <div>
            <h2>Заявка поставщика</h2>
            <RequestForm formId="supplier" defaultProduct="Поставщик" />
          </div>
        </div>
      </section>
    </>
  );
}
