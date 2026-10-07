import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = { title: "Портфолио" };

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Портфолио"
        text="Примеры выполненных работ."
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Портфолио" },
        ]}
      />
      <section className="section">
        <div className="container grid-cards">
          {projects.map((p) => (
            <Link key={p.slug} href={`/company/portfolio/${p.slug}/`} className="card">
              <div className="card-img">
                <RemoteImage src={p.image} alt={p.title} fill sizes="400px" />
              </div>
              <div className="card-body">
                <h2>{p.title}</h2>
                <span className="card-meta">
                  {p.date} · {p.industry}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
