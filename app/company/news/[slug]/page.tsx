import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { getNews, news } from "@/content/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  return { title: n?.title ?? "Новость", description: n?.excerpt };
}

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();
  return (
    <>
      <PageHero
        title={n.title}
        text={n.date}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/news/", label: "Новости" },
          { label: n.title },
        ]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="card-img" style={{ position: "relative", aspectRatio: "16/9" }}>
            <RemoteImage src={n.image} alt={n.title} fill sizes="820px" />
          </div>
          {n.body.map((p) => (
            <p key={p} className="lead" style={{ marginTop: 20 }}>
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
