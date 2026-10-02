import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { RequestButton } from "@/components/RequestButton";
import { getProject, projects } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p?.title ?? "Проект", description: p?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        title={p.title}
        text={`${p.date} · ${p.industry}`}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { href: "/company/portfolio/", label: "Портфолио" },
          { label: p.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="card-img" style={{ maxWidth: 860, position: "relative", aspectRatio: "16/9" }}>
            <RemoteImage src={p.image} alt={p.title} fill sizes="860px" />
          </div>
          <p className="lead" style={{ marginTop: 24 }}>
            {p.summary}
          </p>
          <RequestButton formId={`proj-${p.slug}`} product={p.title}>
            Обсудить похожий заказ
          </RequestButton>
        </div>
      </section>
    </>
  );
}
