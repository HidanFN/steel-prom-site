import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import {
  categories,
  getCategory,
  getProduct,
  getSubcategory,
  PRICE_ON_REQUEST,
} from "@/content/catalog";

type Params = { category: string; sub: string; product: string };

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.children.flatMap((s) =>
      s.products.map((p) => ({ category: c.slug, sub: s.slug, product: p.slug })),
    ),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, sub, product } = await params;
  const item = getProduct(category, sub, product);
  return { title: item?.title ?? "Товар", description: item?.description };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { category, sub, product } = await params;
  const parent = getCategory(category);
  const group = getSubcategory(category, sub);
  const item = getProduct(category, sub, product);
  if (!parent || !group || !item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/catalog/", label: "Каталог" },
          { href: `/catalog/${parent.slug}/`, label: parent.title },
          { href: `/catalog/${parent.slug}/${group.slug}/`, label: group.title },
          { label: item.title },
        ]}
      />
      <section className="section">
        <div className="container split">
          <div>
            <div className="card-img" style={{ aspectRatio: "16/10", position: "relative" }}>
              <RemoteImage src={item.image} alt={item.title} fill sizes="700px" />
            </div>
            <h2 style={{ marginTop: 28 }}>Описание</h2>
            <p className="lead">{item.description}</p>
            {item.gost && <p>Норматив: {item.gost}</p>}
            {item.capacity && <p>Грузоподъёмность: {item.capacity}</p>}
            {item.specs && (
              <ul>
                {item.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </div>
          <aside className="card" style={{ alignSelf: "start" }}>
            <div className="card-body">
              <p className="price">{PRICE_ON_REQUEST}</p>
              <p>Сообщите длину, грузоподъёмность и стандарт — подготовим расчёт.</p>
              <RequestButton formId={`prod-${item.slug}`} product={item.title}>
                Запросить цену
              </RequestButton>
              <p style={{ marginTop: 16 }}>
                <a href="tel:+78007003456">8 (800) 700-34-56</a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
