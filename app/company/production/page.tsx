import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";

export const metadata: Metadata = { title: "Производство" };

export default function ProductionPage() {
  return (
    <>
      <PageHero
        title="Производство"
        text={`Основные мощности — ${company.hq.city}. Вторая площадка — ${company.productionSites[1]}.`}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Производство" },
        ]}
      />
      <section className="section">
        <div className="container">
          <h2>Цеха</h2>
          <ul>
            {company.workshops.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <h2>Оборудование</h2>
          <ul>
            {company.equipment.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
