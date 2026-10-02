import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import { categories, PRICE_ON_REQUEST } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Стропы, канаты, стяжные системы и грузоподъёмное оборудование СтальПром.",
};

export default function CatalogPage() {
  return (
    <>
      <PageHero
        title="Каталог"
        text="Промышленный такелаж собственного производства. Работаем по ГОСТ, ТУ и DIN. Цены — по запросу."
        crumbs={[{ href: "/", label: "Главная" }, { label: "Каталог" }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-cards">
            {categories.map((c) => (
              <Link key={c.slug} href={`/catalog/${c.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={c.image} alt={c.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h2>{c.title}</h2>
                  <p>{c.description}</p>
                  <span className="price">{PRICE_ON_REQUEST}</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <RequestButton formId="catalog-price">Запросить прайс</RequestButton>
          </p>
        </div>
      </section>
    </>
  );
}
