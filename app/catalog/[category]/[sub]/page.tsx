import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import { categories, getCategory, getSubcategory, PRICE_ON_REQUEST } from "@/content/catalog";

type Params = { category: string; sub: string };

export function generateStaticParams() {
  return categories.flatMap((c) => c.children.map((s) => ({ category: c.slug, sub: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, sub } = await params;
  const item = getSubcategory(category, sub);
  return { title: item?.title ?? "Каталог", description: item?.description };
}

export default async function SubcategoryPage({ params }: { params: Promise<Params> }) {
  const { category, sub } = await params;
  const parent = getCategory(category);
  const item = getSubcategory(category, sub);
  if (!parent || !item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        text={item.description}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/catalog/", label: "Каталог" },
          { href: `/catalog/${parent.slug}/`, label: parent.title },
          { label: item.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-cards">
            {item.products.map((p) => (
              <Link key={p.slug} href={`/catalog/${parent.slug}/${item.slug}/${p.slug}/`} className="card">
                <div className="card-img">
                  <RemoteImage src={p.image} alt={p.title} fill sizes="400px" />
                </div>
                <div className="card-body">
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span className="price">{PRICE_ON_REQUEST}</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <RequestButton formId={`sub-${item.slug}`} product={item.title}>
              Запросить цену
            </RequestButton>
          </p>
        </div>
      </section>
    </>
  );
}
