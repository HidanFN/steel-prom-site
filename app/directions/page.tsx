import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { directions } from "@/content/directions";

export const metadata: Metadata = {
  title: "Направления",
  description: "Стропы, канаты, стяжные системы, оборудование и ПДМ.",
};

export default function DirectionsPage() {
  return (
    <>
      <PageHero
        title="Направления"
        text="Производственные линейки СтальПром."
        crumbs={[{ href: "/", label: "Главная" }, { label: "Направления" }]}
      />
      <section className="section">
        <div className="container grid-cards">
          {directions.map((d) => (
            <Link key={d.slug} href={`/directions/${d.slug}/`} className="card">
              <div className="card-img">
                <RemoteImage src={d.image} alt={d.title} fill sizes="400px" />
              </div>
              <div className="card-body">
                <h2>{d.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
