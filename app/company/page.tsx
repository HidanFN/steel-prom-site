import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { company } from "@/content/company";
import { companyMenu } from "@/content/navigation";

export const metadata: Metadata = {
  title: "О компании",
  description: company.description,
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="О компании"
        text={company.mission}
        crumbs={[{ href: "/", label: "Главная" }, { label: "О компании" }]}
      />
      <section className="section">
        <div className="container">
          <p className="lead">
            {company.legalName} — производство и поставка съёмного грузоподъёмного оборудования. Работаем с{" "}
            {company.foundedYear} года. Начали с металлических канатов и строп, затем расширили ассортимент.
          </p>
          <p>
            Сегодня это {company.stats.workshops} цеха, {company.stats.catalogItems} наименований, комплекс{" "}
            {company.stats.complexArea}, {company.stats.branches} филиалов и {company.stats.sites} производственные
            площадки ({company.productionSites.join(" и ")}). В штате около {company.stats.staff} человек.
          </p>
          <h2>Продукция</h2>
          <ul>
            {company.products.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <h2>Отрасли</h2>
          <p>{company.industries.join(", ")}.</p>
          <h2>Разделы</h2>
          <ul>
            {companyMenu
              .filter((m) => m.href !== "/company/")
              .map((m) => (
                <li key={m.href}>
                  <Link href={m.href}>{m.label}</Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
