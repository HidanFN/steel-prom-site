import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/content/news";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a?.title ?? "Статья", description: a?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return (
    <>
      <PageHero
        title={a.title}
        text={a.date}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/articles/", label: "Статьи" },
          { label: a.title },
        ]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {a.body.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
