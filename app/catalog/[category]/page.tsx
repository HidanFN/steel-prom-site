import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import { categories, getCategory, PRICE_ON_REQUEST } from "@/content/catalog";

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const item = getCategory(category);
  return { title: item?.title ?? "Каталог", description: item?.description };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const item = getCategory(category);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        text={item.description}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/catalog/", label: "Каталог" },
          { label: item.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-cards">
            {item.children.map((s) => (
              <Link key={s.slug} href={`/catalog/${item.slug}/${s.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={s.image} alt={s.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                  <span className="price">{PRICE_ON_REQUEST}</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <RequestButton formId={`cat-${item.slug}`} product={item.title}>
              Запросить цену
            </RequestButton>
          </p>
        </div>
      </section>
    </>
  );
}
