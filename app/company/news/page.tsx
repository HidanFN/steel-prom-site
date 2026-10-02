import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { news } from "@/content/news";

export const metadata: Metadata = { title: "Новости" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Новости"
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Новости" },
        ]}
      />
      <section className="section">
        <div className="container grid-cards">
          {news.map((n) => (
            <Link key={n.slug} href={`/company/news/${n.slug}/`} className="card">
              <div className="card-img">
                <RemoteImage src={n.image} alt={n.title} fill sizes="400px" />
              </div>
              <div className="card-body">
                <time dateTime={n.dateIso}>{n.date}</time>
                <h2>{n.title}</h2>
                <p>{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
