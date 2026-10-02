import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import { directions, getDirection } from "@/content/directions";

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDirection(slug);
  return { title: d?.title ?? "Направление", description: d?.lead };
}

export default async function DirectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDirection(slug);
  if (!d) notFound();

  return (
    <>
      <PageHero
        title={d.title}
        text={d.lead}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/directions/", label: "Направления" },
          { label: d.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="card-img" style={{ maxWidth: 820, position: "relative", aspectRatio: "16/8" }}>
            <RemoteImage src={d.image} alt={d.title} fill sizes="820px" />
          </div>
          <ul style={{ marginTop: 28, fontSize: "1.05rem" }}>
            {d.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href={d.catalogHref} className="btn">
              Смотреть в каталоге
            </Link>
            <RequestButton formId={`dir-${d.slug}`} product={d.title} outline>
              Отправить запрос
            </RequestButton>
          </p>
        </div>
      </section>
    </>
  );
}
