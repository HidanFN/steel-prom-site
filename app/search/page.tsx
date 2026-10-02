import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SearchPanel } from "@/components/SearchPanel";

export const metadata: Metadata = { title: "Поиск" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <PageHero
        title="Поиск по сайту"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Поиск" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <SearchPanel initialQuery={q ?? ""} />
        </div>
      </section>
    </>
  );
}
