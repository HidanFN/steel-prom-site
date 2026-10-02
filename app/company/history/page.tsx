import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { history } from "@/content/pages";

export const metadata: Metadata = { title: "История" };

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="История"
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "История" },
        ]}
      />
      <section className="section">
        <div className="container">
          {history.map((h) => (
            <article key={h.year} style={{ marginBottom: 28 }}>
              <h2>{h.year}</h2>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
