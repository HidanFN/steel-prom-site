import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { awards } from "@/content/pages";

export const metadata: Metadata = { title: "Награды" };

export default function AwardsPage() {
  return (
    <>
      <PageHero
        title="Награды"
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Награды" },
        ]}
      />
      <section className="section">
        <div className="container">
          {awards.map((a) => (
            <article key={a.title} style={{ marginBottom: 28 }}>
              <h2>{a.title}</h2>
              <p>{a.year}</p>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
