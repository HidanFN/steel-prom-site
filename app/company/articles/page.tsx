import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/content/news";

export const metadata: Metadata = { title: "Статьи" };

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        title="Статьи"
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Статьи" },
        ]}
      />
      <section className="section">
        <div className="container">
          {articles.map((a) => (
            <article key={a.slug} style={{ marginBottom: 28 }}>
              <time dateTime={a.dateIso}>{a.date}</time>
              <h2>
                <Link href={`/company/articles/${a.slug}/`}>{a.title}</Link>
              </h2>
              <p>{a.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
