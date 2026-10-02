import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RemoteImage } from "@/components/RemoteImage";
import { gallery } from "@/content/pages";

export const metadata: Metadata = { title: "Галерея" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Галерея"
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/company/", label: "О компании" },
          { label: "Галерея" },
        ]}
      />
      <section className="section">
        <div className="container grid-cards">
          {gallery.map((g) => (
            <figure key={g.title} className="card">
              <div className="card-img">
                <RemoteImage src={g.image} alt={g.title} fill sizes="400px" />
              </div>
              <figcaption className="card-body">
                <h2>{g.title}</h2>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
